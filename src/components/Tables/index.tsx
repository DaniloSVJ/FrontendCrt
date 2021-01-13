import React, { useEffect, useState } from 'react';
// import { Fi } from 'react-icons/fi';
// import { FiChevronRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Table } from './styles';

const Tables: React.FC = () => {
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
    return (
        <Table>
            <div id="meio">
                <table className="table mt-4">
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
                                <tr id="trm" key={dados.id}>
                                    <td className="tdm">{dados.id}</td>
                                    <td className="tdm">{dados.nome}</td>
                                    <td className="tdm">{dados.bairro}</td>
                                    <td className="tdm">{dados.cep}</td>
                                    <td className="tdm">{dados.cidade}</td>
                                    <td className="tdm">{dados.uf}</td>
                                    <td className="tdm">{dados.CPF}</td>
                                    <td className="tdm">{dados.RG}</td>
                                </tr>
                            ))}
                    </thead>
                </table>
            </div>
        </Table>
    );
};
export default Tables;
/* <table id="customers" className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome Produto</th>
                        <th>Qtd</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Arroz do Papaidfdfdfdfdfdfdffdfdfdfdf</td>
                        <td>1</td>
                        <td>3,00</td>
                        <td> </td>
                    </tr>
                </thead>
            </table> */
