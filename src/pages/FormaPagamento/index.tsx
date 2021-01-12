import React, {
    FormEvent,
    useState,
    useEffect,
    useCallback,
    useRef,
    TableHTMLAttributes,
    SelectHTMLAttributes,
} from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { keyframes } from 'styled-components';
import api from '../../services/api';
import { Form } from './styles';

const FormaPagamento: React.FC = () => {
    const selectedRef = useRef<HTMLSelectElement>(null);
    const location = useLocation();

    const idVenda = location.search.replace('?', '');

    const [idVendat, setIdVenda] = useState([{ idv: '' }]);

    const [formaPNome, setFormaPNome] = useState('');
    const [formaPNomed, setFormaPNomed] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [valorInput, setValorInput] = useState(0);
    const tableTrTd = useRef<HTMLTableElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const [formaPId, setFormaPId] = useState(1);
    const [totaVenda, setTotaVenda] = useState(0);

    const [options, setOption] = useState([
        {
            id: 0,
            nome: '',
        },
    ]);
    const [dadosformPagamento, setDadosformPagamento] = useState('');
    const [formPagamento, setFormPagamento] = useState([
        {
            id: '',
            forma: '',
            valor: '',
        },
    ]);
    let verInput;
    let verSelect;
    // const valueSelect =
    //     options.find(d => d.id === Number(formaPId))?.nome || '';
    // setDadosformPagamento(valueSelect || '');

    useEffect(() => {
        async function handleAddRepository3(): Promise<void> {
            await api.get('formapagamento').then(response => {
                setOption(response.data);
            });
            await api.get(`itemvenda/soma/${idVenda}`).then(response => {
                setTotaVenda(response.data);
            });
        }
        handleAddRepository3();
    }, []);

    useEffect(() => {
        async function handleselect(): Promise<void> {
            verInput = inputRef.current?.value ? inputRef.current?.value : '';
            const forma = options.find(o => o.id === Number(formaPId))?.nome;
            if (verInput === '') {
                await setFormPagamento([
                    {
                        id: formaPId.toString(),
                        forma: forma || '',
                        valor: valorInput.toString(),
                    },
                ]);
            } else {
                await setFormPagamento([
                    ...formPagamento,
                    {
                        id: formaPId.toString(),
                        forma: dadosformPagamento,
                        valor: valorInput.toString(),
                    },
                ]);
            }
        }
        handleselect();
    }, [isSelected]);

    return (
        <Form>
            <div id="carroça">
                <div id="caixa">
                    <form id="forma">
                        <div id="tudo">
                            <div id="container1">
                                <div id="inicio">
                                    <div>
                                        <h1 id="lbs_cabeçalho">Codigo</h1>
                                        <h1 id="idC" className="idcod">
                                            {' '}
                                            {formaPId.toString()}
                                        </h1>
                                    </div>
                                    <div id="corpo">
                                        <h1 id="lbs_cabeçalho">
                                            Forma de Pagamento
                                        </h1>
                                        <select
                                            onChange={e => [
                                                setFormaPId(
                                                    Number(e.target.value),
                                                ),
                                            ]}
                                        >
                                            <option
                                                value="Selecione"
                                                disabled
                                                hidden
                                            >
                                                Selecione uma opção
                                            </option>
                                            {options.map(option => {
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
                                    <div>
                                        <h1
                                            id="lbs_cabeçalho"
                                            className="Valor"
                                        >
                                            Valor
                                        </h1>
                                        <input
                                            type="number"
                                            onChange={e =>
                                                setValorInput(
                                                    Number(e.target.value),
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <h1
                                            id="lbs_cabeçalho"
                                            className="Valor"
                                        >
                                            Vr. Restante
                                        </h1>
                                        <h1 id="idVR" className="ValorRestante">
                                            teste
                                        </h1>
                                    </div>
                                </div>

                                <div id="meio">
                                    <table id="customers">
                                        <thead>
                                            <tr>
                                                <th id="id">id</th>
                                                <th>Forma de Pagamento</th>
                                                <th className="idQ">Valor </th>
                                            </tr>
                                        </thead>

                                        <thead>
                                            {formPagamento
                                                .sort((a, b) =>
                                                    a.id > b.id ? 1 : -1,
                                                )
                                                .map(dados => (
                                                    <tr
                                                        className="tdh"
                                                        key={dados.id}
                                                    >
                                                        <td className="tdh">
                                                            {dados.id}
                                                        </td>
                                                        <td className="tdh">
                                                            {dados.forma}
                                                        </td>
                                                        <td className="tdh">
                                                            {dados.valor}
                                                        </td>
                                                    </tr>
                                                ))}
                                        </thead>
                                    </table>
                                </div>
                                <div id="final">
                                    <button
                                        className="btm"
                                        type="button"
                                        onClick={e => setIsSelected(true)}
                                    >
                                        Incluir - F6
                                    </button>
                                    <button
                                        id="btm2"
                                        className="btm"
                                        type="submit"
                                    >
                                        Excluir - F8
                                    </button>
                                </div>
                            </div>
                            <div id="butoesfinais">
                                <div>
                                    <button className="btf" type="button">
                                        Finalizar - F6
                                    </button>
                                </div>
                                <div>
                                    <button className="btf" type="button">
                                        Cancelar - F8
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Form>
    );
};

export default FormaPagamento;
