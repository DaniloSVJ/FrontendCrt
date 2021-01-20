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
                <div id="buttonsCotem">
                    <div id="dbtincluir">
                        <button type="button">Incluir</button>
                    </div>
                    <div id="dbalterar">
                        <button type="button">Alterar</button>
                    </div>
                    <div id="dbexluir">
                        <button type="button">Excluir</button>
                    </div>
                    <div id="dbdesativar">
                        <button type="button">Desativar</button>
                    </div>
                    <div id="dbconsultar">
                        <button type="button">Consultar</button>
                    </div>
                    <div id="dbreativar">
                        <button type="button">Reativar</button>
                    </div>
                </div>
                <div id="demaisObjetosCotem">
                    <div id="dadosPesquisa">
                        <div id="dadoProd">
                            <div id="rd_input">
                                <div id="rds" />
                                <div id="inp" />
                            </div>
                            <div id="chks" />
                        </div>
                        <div id="selGrup">
                            <h1>Filtrar por grupos</h1>
                        </div>
                    </div>
                    <div id="demaisInfo" />
                </div>
            </GRADE>
        </>
    );
};

export default Dashboard;
