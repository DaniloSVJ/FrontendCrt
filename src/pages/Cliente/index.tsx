import { Divider } from 'antd';
import React, { FormEvent, useEffect, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import api from '../../services/api';
import apiBGE from '../../services/apiIBGE';

const PageCliente: React.FC = () => {
    const location = useLocation();
    const [troco, setTroco] = useState(0);
    const [idlinha, setIdLinha] = useState(0);
    const [cidade, setCidades] = useState([{ id: 0, nome: '' }]);
    useEffect(() => {
        apiBGE.get('ce/municipios').then(response => {
            setCidades(response.data);
            console.log(response.data);
            console.log('======================================');
            console.log(cidade.map(c => c.nome));
        });
    }, []);

    return (
        <div>
            <div>
                <div>
                    <input type="radio" id="huey" name="drone" />
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" />
                </div>
            </div>
            <div>
                <div>
                    <select name="" id="selgrupo">
                        <option value="Selecione" disabled hidden>
                            Selecione uma opção
                        </option>
                        {cidade.map(option => {
                            return (
                                <option key={option.id} value={option.id}>
                                    {option.nome}
                                </option>
                            );
                        })}
                    </select>
                    <input type="text" value="nome" />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" value="apelido" />
                </div>
                <div>
                    <input type="text" value="cpf" />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" value="endereço" />
                </div>
                <div>
                    <input type="text" value="bairro" />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" value="cep" />
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <h1>Ola</h1>
            </div>
        </div>
    );
};
export default PageCliente;
