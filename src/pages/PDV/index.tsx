import React, { FormEvent, useState, useEffect } from 'react';
import Tables from '../../components/Tables';
import { Grid } from './styles';

import api from '../../services/api';

interface Produto {
    id: string;
    nome?: string;
    codigo: string;
    custo: number;
    valor_venda: number;
    id_grupo: string;
}

const PDV: React.FC = () => {
    const [produto, setProduto] = useState<Produto>();
    const [rotaId, setRotaId] = useState('');
    const [idCli, setIdCli] = useState(1);

    useEffect(() => {
        console.log(idCli);
    }, [idCli]);
    const [fecharV, setFecharV] = useState(false);
    const [chamar, setChamar] = useState('');
    const [dadosCliente, setDadosCliente] = useState([
        {
            id: '',
            nome: '',
            bairro: '',
            cep: '',
            cidade: '',
            uf: '',
            telefone: '',
            CPF: '',
            RG: '',
        },
    ]);
    useEffect(() => {
        api.get('cliente').then(response => {
            setDadosCliente(response.data);
        });
    }, []);

    const [dadosVenda, setDadosVenda] = useState([
        {
            id: '',
            id_venda: 2,
            ordem: 0,
            nome_produto: '',
            codigo_produto: '',
            qtdvendido: 0,
            valor_vendido: 0,
            status: 2,
        },
    ]);
    const [subtoltalTela, setSubtoltalTela] = useState('');

    const [total, setTotal] = useState(0);
    const [KeyT, setKeyT] = useState('');
    const [KeyQuantidade, setKeyQuantidade] = useState('');
    const [valor_vendido, setvalor_vendido] = useState(0);
    const [qtdvendido, setqtdvendido] = useState(0);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
    }

    const id_vendas = 0;
    let ordem = 0;
    const [id_cliente, setId_cliente] = useState(0);
    const [funcionario, setFuncionario] = useState('');

    useEffect(() => {
        async function handleAddRepository3(): Promise<void> {
            let nameP = '';
            let idProd = '';
            let codProd = '';

            if (produto) {
                nameP = produto.nome ? produto.nome : '';
                idProd = produto.id;
                codProd = produto.codigo;
            }
            await api.get('itemvenda').then(response => {
                setDadosVenda(response.data);
            });

            if (KeyT === 'Enter') {
                const ifyouhave = dadosVenda.find(
                    d => d.codigo_produto === rotaId,
                )?.codigo_produto; // (d => d.codigo_produto === rotaId);
                const iditem = dadosVenda.find(d => d.codigo_produto === rotaId)
                    ?.id;
                const tam = dadosVenda.length;

                if (ifyouhave !== rotaId) {
                    if (tam === 0) {
                        ordem = 1;
                    } else if (tam > 0) {
                        ordem = tam + 1;
                    }

                    await api.post('itemvenda', {
                        id_vendas,
                        ordem,
                        id_produtos: idProd,
                        qtdvendido,
                        valor_vendido,
                        nome_produto: nameP,
                        codigo_produto: codProd,
                        status: 2,
                    });
                } else if (ifyouhave === rotaId) {
                    await api.put(`itemvenda/${iditem}`, {
                        id: iditem,
                        qtdvendido,
                        valor_vendido,
                    });
                }
            }
            await api.get('itemvenda').then(response => {
                setDadosVenda(response.data);
            });

            await api.get(`itemvenda/soma/${id_vendas}`).then(response => {
                setTotal(response.data);
            });
        }

        handleAddRepository3();
    }, [KeyT]);

    useEffect(() => {
        async function handleAddRepository2(): Promise<void> {
            await api.get(`produto/${rotaId}`).then(response => {
                setProduto(response.data);
            });
        }

        handleAddRepository2();
    }, [rotaId, KeyT]);

    useEffect(() => {
        if (produto) {
            const qtdPrduto = Number(qtdvendido);
            if (!Number.isNaN(qtdPrduto)) {
                const valor = qtdPrduto * produto.valor_venda;
                if (qtdPrduto === null) {
                    setvalor_vendido(0);
                } else {
                    setvalor_vendido(valor);
                    if (valor !== 0 || valor.toString() !== 'NaN')
                        setSubtoltalTela(valor.toString());
                }
            }
        }
    }, [qtdvendido]);

    useEffect(() => {
        async function CriarVenda(): Promise<void> {
            if (fecharV === true) {
                await setId_cliente(1);
                await setFuncionario('Fernando');
                await api.post('venda', {
                    id_cliente,
                    funcionario,
                });
            }
        }
        CriarVenda();
    }, [fecharV]);

    return (
        <>
            <Grid onKeyDown={e => setKeyT(e.key)}>
                <div className="Header">
                    <nav id="a1">
                        <div>
                            <a href="#bg" onKeyUp={e => setChamar('chamar')}>
                                Lista de Clientes
                            </a>
                        </div>
                        <div id="bFecharVenda">
                            <div id="btnFechar">
                                <a
                                    onClick={e => setFecharV(true)}
                                    href={`/formapagamento/?${id_vendas}`}
                                >
                                    Fechar Venda
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div id="dadosIniciais">
                        <div>
                            <h1 className="h1cabeçado">Cliente</h1>
                            <input
                                className="inputcabeçalho"
                                type="text"
                                placeholder="1"
                            />
                        </div>
                        <div id="h1doinput">
                            <h1 className="h1dadosInput">Cliente</h1>
                        </div>

                        <div>
                            <h1 className="h1cabeçado">Caixa</h1>
                            <input className="inputcabeçalho" type="text" />
                        </div>
                        <div id="h1doinput">
                            <h1 className="h1dadosInput">Caixa</h1>
                        </div>
                    </div>
                    <div>
                        <h1 id="clash1">{produto?.nome}</h1>
                    </div>
                </div>
                <div className="MenuDadosVenda">
                    <form onSubmit={handleAddRepository}>
                        <h1 className="h1Iput">Produto</h1>
                        <input
                            onChange={e => setRotaId(e.target.value)}
                            onKeyUp={e => setKeyT(e.key)}
                            id="codigo"
                            name="codigo"
                            type="text"
                            placeholder="Digite o código de Barra"
                        />

                        <h1 className="h1Iput">Quantidade</h1>

                        <input
                            onKeyPress={e => setKeyT(e.key)}
                            onChange={e => [
                                setqtdvendido(parseInt(e.target.value, 10)),
                            ]}
                            onKeyDown={e => setKeyQuantidade(e.key)}
                            onKeyUp={e => setKeyT(e.key)}
                            // value={limparInput.value}
                            id="qtd"
                            name="qtd"
                            type="text"
                            placeholder="Digite a quantidade"
                        />

                        <h1 className="h1Iput">Valor</h1>
                        <p className="styInput">{produto?.valor_venda}</p>

                        <h1 className="h1Iput">SubTotal</h1>
                        <p className="styInput">{subtoltalTela}</p>
                    </form>
                </div>
                <div />
                <div className="Main">
                    <table id="customers" className="table mt-4">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nome Produto</th>
                                <th className="idQ">Qtd</th>
                                <th className="idQ">Valor</th>
                            </tr>

                            {dadosVenda
                                .sort((a, b) => (a.ordem > b.ordem ? 1 : -1))
                                .map(dados => (
                                    <tr
                                        key={dados.ordem}
                                        tabIndex={dados.ordem}
                                    >
                                        <td>{dados.ordem}</td>
                                        <td>{dados.nome_produto}</td>
                                        <td className="idQ">
                                            {dados.qtdvendido}
                                        </td>
                                        <td className="idQ">
                                            {dados.valor_vendido}
                                        </td>
                                    </tr>
                                ))}
                        </thead>
                    </table>
                </div>
                <div className="Footer">
                    <div className="total">
                        <h1 id="label">Total de venda</h1>
                        <h1 id="valor">
                            R$
                            {total}
                        </h1>
                    </div>
                </div>
                <div id="bg">
                    <div className="box">
                        <a href="/" onClick={e => setChamar('')}>
                            Fechar
                        </a>
                        <div id="divmodal">
                            <table className="tableModalCli">
                                <thead>
                                    <tr>
                                        <th className="thm">id</th>
                                        <th className="thm">Nome</th>
                                        <th className="thm">Bairro</th>
                                        <th className="thm">Cep</th>
                                        <th className="thm">Cidade</th>
                                        <th className="thm">UF</th>
                                        <th className="thm">CPF</th>
                                        <th className="thm">RG</th>
                                    </tr>
                                </thead>
                                <thead>
                                    {dadosCliente
                                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                                        .map(dados => (
                                            <tr
                                                id="trm"
                                                key={dados.id}
                                                onClick={e =>
                                                    setIdCli(Number(dados.id))
                                                }
                                            >
                                                <td className="tdm">
                                                    {dados.id}
                                                </td>
                                                <td className="tdm">
                                                    {dados.nome}
                                                </td>
                                                <td className="tdm">
                                                    {dados.bairro}
                                                </td>
                                                <td className="tdm">
                                                    {dados.cep}
                                                </td>
                                                <td className="tdm">
                                                    {dados.cidade}
                                                </td>
                                                <td className="tdm">
                                                    {dados.uf}
                                                </td>
                                                <td className="tdm">
                                                    {dados.CPF}
                                                </td>
                                                <td className="tdm">
                                                    {dados.RG}
                                                </td>
                                            </tr>
                                        ))}
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
};
// <tbody>{this.renderRows()}</tbody>
export default PDV;
