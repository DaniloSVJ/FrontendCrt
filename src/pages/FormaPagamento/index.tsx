import { render } from '@testing-library/react';
import React, {
    FormEvent,
    useState,
    useEffect,
    useCallback,
    useRef,
    TableHTMLAttributes,
    SelectHTMLAttributes,
    useImperativeHandle,
} from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { keyframes } from 'styled-components';
import api from '../../services/api';
import { Form } from './styles';

const FormaPagamento: React.FC = () => {
    const location = useLocation();
    const [troco, setTroco] = useState(0);
    const [idlinha, setIdLinha] = useState(0);
    const [vlrIncial, setVlrIncial] = useState(0);
    const idVenda = location.search.replace('?', '');
    const [forma, setForma] = useState('');
    const [idVendat, setIdVenda] = useState([{ idv: '' }]);
    // let total1;
    const [totalagora, setTotalAgora] = useState(0);
    const [valRestante, setValRestante] = useState(0);
    const [verInput, setVerInput] = useState(0);
    const [formaPNome, setFormaPNome] = useState('');
    const [formaPNomed, setFormaPNomed] = useState('[]');
    const [isSelected, setIsSelected] = useState(false);
    const [valorInput, setValorInput] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const inputRefVR = useRef<HTMLInputElement>(null);
    const [formaPId, setFormaPId] = useState(1);
    const [totaVenda, setTotaVenda] = useState(0);

    // window.addEventListener('load', carrega);
    const carrega = useCallback(() => {
        async function handleAddRepo(): Promise<void> {
            // await api.get(`itemvenda/soma/${idVenda}`).then(response => {});
        }
        handleAddRepo();
    }, []);
    const [tes, settes] = useState([
        {
            id: 1,
            nome: 'Daniel',
        },
        {
            id: 2,
            nome: 'Danielle',
        },
        {
            id: 3,
            nome: 'Denise',
        },
    ]);

    const [options, setOption] = useState([
        {
            id: 0,
            nome: 'teste',
        },
    ]);
    const [dadosformPagamento, setDadosformPagamento] = useState('');
    const [formPagamento, setFormPagamento] = useState([
        {
            id: 0,
            id_forma_pagmet: 0,
            ordem: 0,
            formapagamento: '',
            valor: 0,
        },
    ]);
    const [isClick, setIsclick] = useState(false);

    // const clickInH1 = useCallback(()=>{
    //     setIsclick(false)

    // })
    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
    }
    async function totalIncial(): Promise<void> {
        let valorSoma;
        await api.get(`itemvenda/soma/${idVenda}`).then(response => {
            valorSoma = response.data;
        });
        return valorSoma;
    }

    window.onload = function () {
        //   alert('Está carregado!');
    };
    const vinical = totalIncial();
    const [formText, setFormText] = useState('');
    const total = vinical;
    // console.log(total);
    const [tesTotal, setTes] = useState('');
    // const [total, setTotal] = useState('vinical');
    useEffect(() => {
        async function handleAddRepository3(): Promise<void> {
            await api.get('formapagamento').then(response => {
                setOption(response.data);
            });
            await api.get(`itemvenda/soma/${idVenda}`).then(response => {
                setValRestante(response.data);
                setTotalAgora(response.data);
                setVlrIncial(response.data);
            });
            await api.delete(`formapagamentovendaDel/${0}`);
        }
        handleAddRepository3();
    }, []);

    const [valop, setfora] = useState('');
    const valores = [0];
    const [textoselect, settextosel] = useState('');
    const [totalArray, setTotalArray] = useState(0);
    async function incluir(): Promise<void> {
        async function handleselect(): Promise<void> {
            const verinputref = totalagora.toString(); // inputRef.current?.value;
            const valRes = valRestante.toString(); /// inputRefVR.current?.value;
            const selref = selectRef.current?.value || 1;
            const textoSel = '';

            await api.get(`formapagamento/${formaPId}`).then(res => {
                settextosel(res.data);
            });
            const selrefNome = formText;
            const Vr = Number(valRes);
            console.log(textoSel);
            console.log(`total reduz ${[valores]}`);
            if (Vr > 0) {
                if (Number(verinputref) > 0) {
                    const vVal = valores.includes(0);
                    if (vVal === true) {
                        valores.shift();
                        valores.push(Number(verinputref));
                    } else {
                        valores.push(Number(verinputref));
                    }

                    const totalvvv = valores.reduce(function (
                        acumulador,
                        valorAtual,
                    ) {
                        return acumulador + valorAtual;
                    },
                    0);
                    await api.post('formapagamentovenda', {
                        id_forma_pagmet: Number(selref),
                        id_venda: 0,
                        valor: verinputref,
                        ordem: selref,
                        formapagamento: textoselect,
                        status: false,
                    });

                    if (Number(valRes) >= Number(totalvvv)) {
                        setValRestante(Number(valRes) - Number(totalvvv));
                        //
                        setIsclick(false);
                        setTotalAgora(Number(valRes) - Number(totalvvv));
                        console.log(`Total valRes ${totalvvv}`);

                        await api.get('formapagamentovenda').then(res => {
                            setFormPagamento(res.data);
                        });
                    } else if (Number(valRes) < Number(totalvvv)) {
                        setValRestante(0);
                        await api.get('formapagamentovenda').then(res => {
                            setFormPagamento(res.data);
                        });
                        const verSinal = Number(totalvvv) - Number(vlrIncial);
                        if (Math.sign(verSinal) === -1) {
                            setTroco(-1 * verSinal);
                        } else {
                            setTroco(verSinal);
                        }
                    }
                } else if (Number(verinputref) === 0) {
                    alert('O valor de pagamento não pode ser zero');
                }
            } else if (Number(valRestante) === 0) {
                alert('O Valor Restante Encontra-se zerado');
            }
        }
        handleselect();
    }

    async function excluir(): Promise<void> {
        async function handleselect(): Promise<void> {
            const linha = formPagamento.findIndex(o => o.id === idlinha);

            const pegaindex = valores.splice(linha, 1);
            console.log(`valor da linha: ${idlinha}`);
            console.log(`valor da linha: ${linha}`);
            const totalReduzido = pegaindex.reduce(function (
                acumulador,
                valorAtual,
            ) {
                return acumulador + valorAtual;
            },
            0);
            console.log(`total reduz ${valores}`);
            setValRestante(Number(vlrIncial) - Number(totalReduzido));
            await api.delete(`formapagamentovenda/${idlinha}`);
            await api.get('formapagamentovenda').then(res => {
                setFormPagamento(res.data);
            });
            if (Number(valRestante) < Number(totalReduzido)) {
                const verSinal = Number(totalReduzido) - Number(vlrIncial);
                if (Math.sign(verSinal) === -1) {
                    setTroco(-1 * verSinal);
                } else {
                    setTroco(verSinal);
                }
            }
            if (Number(valRestante) === Number(vlrIncial)) {
                setTroco(0);
            }
        }

        handleselect();
    }

    async function finalizar(): Promise<void> {
        await api.post('venda', {
            id_cliente: 1,
            funcionario: 'Danilo',
        });
        let idVendaCriado = 0;
        await api.get('ultimavenda').then(res => {
            idVendaCriado = res.data;
        });

        const id_venda = Number(idVendaCriado);
        const status = true;
        await api.put(`formapagamentovendaDel/${0}`, {
            id_venda,
            status,
        });

        await api.put(`itemvendaVenda/${0}`, {
            id_vendas: Number(idVendaCriado),
            status: 1,
        });

        window.location.href = '/';
    }

    const voltarPdv = useCallback(() => {
        window.location.href = '/';
    }, []);
    async function teste(): Promise<void> {
        document.getElementById('teste');
    }
    return (
        <Form isClick={isClick}>
            <script />
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
                                            ref={selectRef}
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
                                            id="idCInp"
                                            className="idcodInp"
                                            value={totalagora}
                                            onClick={e => setIsclick(true)}
                                        />

                                        <input
                                            onKeyDown={e => setIsclick(true)}
                                            className="idVR"
                                            id="idVRI"
                                            type="text"
                                            // onClick={e=>e.target.addEventListener("click", myFunction))}
                                            defaultValue={valRestante}
                                            onChange={({ target }) =>
                                                setTotalAgora(
                                                    Number(target.value),
                                                )
                                            }
                                            ref={inputRef}
                                        />
                                    </div>
                                    <div>
                                        <h1
                                            id="lbs_cabeçalho"
                                            className="Valor"
                                        >
                                            Vr. Restante
                                        </h1>
                                        <input
                                            className="idVR"
                                            id="ValorRestante"
                                            value={valRestante}
                                        />
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
                                                    a.ordem > b.ordem ? 1 : -1,
                                                )
                                                .map(dados => (
                                                    <tr
                                                        onClick={e =>
                                                            setIdLinha(dados.id)
                                                        }
                                                        className="tdh"
                                                        key={dados.id}
                                                    >
                                                        <td className="tdh">
                                                            {dados.ordem}
                                                        </td>
                                                        <td className="tdh">
                                                            {'sem nada'
                                                                ? ''
                                                                : dados.formapagamento}
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
                                    <div>
                                        <button
                                            className="btm"
                                            type="button"
                                            onClick={incluir}
                                        >
                                            Incluir
                                        </button>
                                        <button
                                            id="btm2"
                                            className="btm"
                                            type="button"
                                            onClick={excluir}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                    <div id="troco">
                                        <h1 id="hb">Troco</h1>
                                        <h1 id="hb2">{troco}</h1>
                                    </div>
                                </div>
                            </div>
                            <div id="butoesfinais">
                                <div>
                                    <button
                                        className="btf"
                                        type="button"
                                        onClick={finalizar}
                                    >
                                        Finalizar
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="btf"
                                        type="button"
                                        onClick={voltarPdv}
                                    >
                                        Cancelar
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
