import React, { FormEvent, useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Grid, Repositories } from './styles';
import Tables from '../../components/Tables';

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

// customers

const PDV: React.FC = () => {
    const [produto, setProduto] = useState<Produto | null>(null);
    const [rotaId, setRotaId] = useState('');
    const [dadosVenda, setDadosVenda] = useState([
        { id: 0, nome: '', qtd: 0, valor: 0 },
    ]);
    const [gambiarra, setGambiarra] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [qtdinput, setQtdinput] = useState(0);
    let valorProduto;
    // let subTotalP;
    // if (produto?.valor_venda === null) {
    //     subTotalP = 0;
    // } else {
    //     subTotalP = produto?.valor_venda;
    // }
    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        if (!rotaId) {
            console.log('errou aqui 1');
            return;
        }
        try {
            console.log(rotaId);
            return;
        } catch (error) {
            console.log('errou aqui 2');
        }
    }
    const { params } = useRouteMatch<RepositoriesForms>();
    useEffect(() => {
        api.get(`produto/${rotaId}`).then(response => {
            setProduto(response.data);
        });
        const Idver = dadosVenda.map(dados => dados.id);
        const nomePro = '{}';
        if (produto) {
            nomePro = produto?.nome;
        }
        // nomePro = {produto?.nome};
        if (Idver.toString() === '0') {
            if (produto) {
                setDadosVenda([
                    {
                        id: 1,
                        nome: gambiarra,
                        qtd: qtdinput,
                        valor: subtotal,
                    },
                ]);
            }
        }

        // console.log(`teste${ver}`);
    }, [rotaId]);
    useEffect(() => {
        if (produto) {
            const qtdPrduto = Number(qtdinput);
            if (!Number.isNaN(qtdPrduto)) {
                const valor = qtdPrduto * produto.valor_venda;
                if (qtdPrduto === null) {
                    setSubtotal(0);
                } else {
                    setSubtotal(valor);
                }
            }
        }

        // setSubtotal(valorSub);
        // console.log(valorSub);
    }, [qtdinput]);

    return (
        <>
            <Grid>
                <div className="Header">
                    <p>Suporte técnico</p>
                    <p>Data 16/12/2020</p>
                    <h1 id="teste11">{produto?.nome}</h1>
                </div>
                <div className="MenuDadosVenda">
                    <form onSubmit={handleAddRepository}>
                        <h1 className="h1Iput">Produto</h1>
                        <input
                            value={rotaId}
                            onChange={e => setRotaId(e.target.value)}
                            id="codigo"
                            name="codigo"
                            type="text"
                            placeholder="Digite o código de Barra"
                        />

                        <h1 className="h1Iput">Quantidade</h1>

                        <input
                            onChange={e =>
                                setQtdinput(parseInt(e.target.value, 10))
                            }
                            id="qtd"
                            name="qtd"
                            type="text"
                            placeholder="Digite a quantidade"
                        />

                        <h1 className="h1Iput">Valor</h1>
                        <p className="styInput">{produto?.valor_venda}</p>

                        <h1 className="h1Iput">SubTotal</h1>
                        <p className="styInput">{subtotal.toString()}</p>
                    </form>
                </div>
                <div className="Main">
                    <table id="customers" className="table mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome Produto</th>
                                <th>Qtd</th>
                                <th>Valor</th>
                            </tr>
                            {produto.map(prod => (
                                <tr>
                                    <td key={prod.id}>{prod.id}</td>{' '}
                                    <td key={prod.id}>{prod.nome}</td>{' '}
                                    <td key={prod.id}>{prod.custo}</td>{' '}
                                    <td key={prod.id}>{prod.nome}</td>{' '}
                                    <td key={prod.id}>{prod.nome}</td>{' '}
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
                <div className="Footer">
                    <div className="total">
                        <h1 id="label">Total de venda</h1>
                        <h1 id="valor">R$ 1700</h1>
                    </div>
                </div>
            </Grid>
        </>
    );
};
// <tbody>{this.renderRows()}</tbody>
export default PDV;
