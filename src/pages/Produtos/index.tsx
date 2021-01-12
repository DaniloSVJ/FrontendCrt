import React, { useState, useEffect } from 'react';
// import { Fi } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { GRADE } from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [custo, setCusto] = useState(0);
    const [valor_venda, setValorVenda] = useState(0);
    const [produto, setProduto] = useState([
        {
            id: '',
            nome: '',
            codigo: '',
            custo: 0,
            valor_venda: 0,
            id_grupo: 0,
        },
    ]);
    useEffect(() => {
        api.get('produto').then(response => {
            setProduto(response.data);
        });
    }, []);
    async function addProduto(): Promise<void> {
        const id_grupo = 1;
        await api.post('produto', {
            nome,
            codigo,
            custo,
            valor_venda,
            id_grupo,
        });
    }
    async function cadastrar(): Promise<void> {
        addProduto();
        ver();
    }
    async function ver(): Promise<void> {
        await api.get('produto').then(response => {
            setProduto(response.data);
        });
    }

    return (
        <>
            <GRADE>
                <div className="Header">
                    <Link to="/">Ir Para PDV</Link>
                    <h1>CADASTRO DE PRODUTOS</h1>
                </div>
                <div className="Menu">
                    <form onSubmit={cadastrar}>
                        <div className="grid-container">
                            <div>
                                <label htmlFor="codigo">
                                    Código de Barra
                                    <input
                                        id="codigo"
                                        onChange={e =>
                                            setCodigo(e.target.value)
                                        }
                                        name="codigo"
                                        type="text"
                                        placeholder="Digite o código de Barra"
                                    />
                                </label>
                            </div>

                            <div>
                                <label htmlFor="codigo">
                                    Nome Produto
                                    <input
                                        id="codigo"
                                        onChange={e => setNome(e.target.value)}
                                        name="codigo"
                                        type="text"
                                        placeholder=" Nome Produto"
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="codigo">
                                    Custo
                                    <input
                                        id="codigo"
                                        onChange={e =>
                                            setCusto(Number(e.target.value))
                                        }
                                        name="codigo"
                                        type="text"
                                        placeholder="Custo"
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="codigo">
                                    Valor Venda
                                    <input
                                        id="codigo"
                                        onChange={e =>
                                            setValorVenda(
                                                Number(e.target.value),
                                            )
                                        }
                                        name="codigo"
                                        type="text"
                                        placeholder="Valor Venda"
                                    />
                                </label>
                            </div>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
                <div className="Main">
                    <table id="customers" className="table mt-4">
                        <thead>
                            <tr>
                                <th>Codigo de Barra</th>
                                <th>Nome Produto</th>
                                <th className="idQ">Custo</th>
                                <th className="idQ">Valor Venda</th>
                            </tr>

                            {produto.map(dados => (
                                <tr key={dados.id}>
                                    <td>{dados.codigo}</td>
                                    <td>{dados.nome}</td>
                                    <td className="idQ">{dados.custo}</td>
                                    <td className="idQ">{dados.valor_venda}</td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
            </GRADE>
        </>
    );
};

export default Dashboard;
