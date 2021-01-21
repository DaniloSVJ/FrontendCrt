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
    const [estoqueMin, setEstoqueMin] = useState(0);
    const [estoqueMax, setEstoqueMax] = useState(0);
    const [embalagem, setEmbalagem] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [descricaoR, setDescricaoR] = useState('');
    const [descricaoGeral, setDescricaoGeral] = useState('');
    const [id_grupo, setId_grupo] = useState(1);
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
    const [grupoproduto, setGrupoproduto] = useState([
        {
            id: '',
            nome: '',
        },
    ]);
    useEffect(() => {
        api.get('produto').then(response => {
            setProduto(response.data);
        });
        api.get('grupoproduto').then(response => {
            setGrupoproduto(response.data);
        });
    }, []);
    async function addProduto(): Promise<void> {
        console.log(nome);
        console.log(codigo);
        console.log(custo);
        console.log(valor_venda);
        console.log(id_grupo);
        console.log(estoqueMin);
        console.log(estoqueMax);
        console.log(embalagem);
        console.log(quantidade);
        console.log(descricaoR);
        console.log(descricaoGeral);
        await api.post('produto', {
            nome,
            codigo,
            custo,
            valor_venda,
            id_grupo,
            estoqueMin,
            estoqueMax,
            embalagem,
            quantidade,
            descricaoR,
            descricaoGeral,
        });
        alert('Salvo com Sucesso');
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
                <div id="DivTitle">
                    <h1 id="H1Title">CADASTRO DE PRODUTOS</h1>
                </div>
                <div id="arca">
                    <div id="div1" className="containers">
                        <div className="inicio" id="divinputREF">
                            <h1>Referencia</h1>
                            <input
                                id="inputREF"
                                onChange={e => [[setCodigo(e.target.value)]]}
                                type="text"
                            />
                        </div>

                        <div className="inicio">
                            <h1>Sub Grupo</h1>
                            <select
                                name=""
                                id="selgrupo"
                                onChange={e =>
                                    setId_grupo(Number(e.target.value))
                                }
                            >
                                <option value="Selecione" disabled hidden>
                                    Selecione uma opção
                                </option>
                                {grupoproduto.map(option => {
                                    return (
                                        <option
                                            key={option.id}
                                            value={option.id}
                                        >
                                            {option.nome}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="containers">
                        <div>
                            <h1>Descrição Reduzida</h1>
                            <input
                                onChange={e => [
                                    setDescricaoR(e.target.value),
                                    setNome(e.target.value),
                                ]}
                                className="descriptions"
                                type="text"
                            />
                        </div>
                    </div>
                    <div id="div3" className="containers">
                        <div>
                            <h1>Estoque Mín</h1>
                            <input
                                onChange={e =>
                                    setEstoqueMin(Number(e.target.value))
                                }
                                className="inputEQ"
                                type="number"
                            />
                        </div>
                        <div>
                            <h1>Estoque Máx</h1>
                            <input
                                onChange={e =>
                                    setEstoqueMax(Number(e.target.value))
                                }
                                className="inputEQ"
                                type="number"
                            />
                        </div>
                        <div>
                            <h1>Valor Custo</h1>
                            <input
                                onChange={e => setCusto(Number(e.target.value))}
                                className="inputValore"
                                type="number"
                            />
                        </div>
                        <div>
                            <h1>Embalagem</h1>
                            <select
                                id="selectEm"
                                onChange={e => setEmbalagem(e.target.value)}
                            >
                                <option value="Pacote">Pacote</option>
                                <option value="Un">Un</option>
                                <option value="Kg">Kg</option>
                                <option value="Litro">Litro</option>
                            </select>
                        </div>
                    </div>
                    <div className="containers">
                        <div>
                            <h1>Vr. Venda</h1>
                            <input
                                onChange={e =>
                                    setValorVenda(Number(e.target.value))
                                }
                                className="inputValore"
                                type="number"
                            />
                        </div>
                    </div>

                    <div id="div4" className="containers">
                        <div>
                            <h1>Descrição Completa</h1>
                            <textarea
                                onChange={e =>
                                    setDescricaoGeral(e.target.value)
                                }
                                className="descriptions"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                </div>
                <div id="containersButton">
                    <div id="div5">
                        <div>
                            <button onClick={addProduto} type="button">
                                Salvar
                            </button>
                        </div>
                        <div>
                            <button type="button">Cancelar</button>
                        </div>
                    </div>
                </div>
            </GRADE>
        </>
    );
};

export default Dashboard;
