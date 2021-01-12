import React, { FormEvent, useState, useEffect, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Tables from '../../components/Tables';
import { Grid } from './styles';

import api from '../../services/api';

interface RepositoriesForms {
    repository: string;
}

interface Produto {
    id: string;
    nome?: string;
    codigo: string;
    custo: number;
    valor_venda: number;
    id_grupo: string;
}

interface idVenda {
    id: string;
}

const PDV: React.FC = () => {
    const history = useHistory();
    const [produto, setProduto] = useState<Produto>();
    const [rotaId, setRotaId] = useState('');
    const [codigo, setCodigo] = useState('');
    const [tamArray, setTamArray] = useState([]);
    const [tamArray2, setTamArray2] = useState([]);
    const [nomesPro, setNomesPro] = useState([]);
    const [nome_produto, setNomep] = useState('');
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
            ordem: 0,
            nome_produto: '',
            codigo_produto: '',
            qtdvendido: 0,
            valor_vendido: 0,
        },
    ]);
    const [subtoltalTela, setSubtoltalTela] = useState('');

    const [total, setTotal] = useState(0);
    const [KeyT, setKeyT] = useState('');
    const [KeyQuantidade, setKeyQuantidade] = useState('');
    const [valor_vendido, setvalor_vendido] = useState(0);
    const [qtdvendido, setqtdvendido] = useState(0);
    const [staValue, setStaValue] = useState(false);
    const [looksize, setLooksize] = useState([]);
    const [codigo_produto, setCodigo_produto] = useState('');
    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
    }
    useEffect(() => {
        async function handleAddRepositorydd(
            event: FormEvent<HTMLFormElement>,
        ): Promise<void> {
            if (KeyT === 'F3') {
                event.preventDefault();
            }
        }
    }, [KeyT]);

    useEffect(() => {
        api.delete('itemvendaAcessoria');
    }, []);
    const [id_vendas, setId_vendas] = useState('');
    const [ordem, setOrdem] = useState('');
    const [id_cliente, setId_cliente] = useState(0);
    const [funcionario, setFuncionario] = useState('');

    useEffect(() => {
        let vord = 0;
        async function handleAddRepository3(): Promise<void> {
            let nameP = '';
            let idProd = '';
            let codProd = '';
            if (id_vendas === '') {
                setId_vendas('0');
            }
            if (ordem === '') {
                setOrdem('0');
            }

            if (produto) {
                nameP = produto.nome ? produto.nome : '';
                idProd = produto.id;
                codProd = produto.codigo;
            }
            await api.get('itemvendaAcessoria').then(response => {
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
                        setOrdem('1');
                    } else if (tam > 0) {
                        vord = tam + 1;
                        setOrdem(vord.toString());
                    }

                    await api.post('itemvendaAcessoria', {
                        id_vendas: Number(id_vendas),
                        ordem: Number(ordem),
                        id_produtos: idProd,
                        qtdvendido,
                        valor_vendido,
                        nome_produto: nameP,
                        codigo_produto: codProd,
                    });
                } else if (ifyouhave === rotaId) {
                    await api.put(`itemvendaAcessoria/${iditem}`, {
                        id: iditem,
                        qtdvendido,
                        valor_vendido,
                    });
                }
            }
            await api.get('itemvendaAcessoria').then(response => {
                setDadosVenda(response.data);
            });
            await api
                .get(`itemvendaAcessoria/soma/${id_vendas}`)
                .then(response => {
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
        console.log(nome_produto);
    }, [nome_produto]);

    const fecharVenda = useCallback(() => {
        async function CriarVenda(): Promise<void> {
            await setId_cliente(1);
            await setFuncionario('Fernando');
            await api.post('venda', {
                id_cliente,
                funcionario,
            });
        }
        CriarVenda();
    }, []);

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
                                    onClick={e => fecharVenda}
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
                            <input className="inputcabeçalho" type="text" />
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
                        <div id="divmodal" />
                    </div>
                </div>
            </Grid>
        </>
    );
};
// <tbody>{this.renderRows()}</tbody>
export default PDV;
