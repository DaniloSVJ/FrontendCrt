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

    const [totalagora, setTotalAgora] = useState(0);
    const [valRestante, setValRestante] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const [formaPId, setFormaPId] = useState(1); // PEGA O ID DA CAIXA DE COMBINAÇÃO
    const [formaPNome, setFormaPNome] = useState(''); // PEGA O NOME QUE TÁ NA CAIXA DE COMBINAÇÃO

    // window.addEventListener('load', carrega);
    const carrega = useCallback(() => {
        async function handleAddRepo(): Promise<void> {
            // await api.get(`itemvenda/soma/${idVenda}`).then(response => {});
        }
        handleAddRepo();
    }, []);
    // OPÇÕES DA FORMA DE PAGAMENTO /////////////////////////////////////////////

    const [options, setOption] = useState([{ id: 0, ordem: 0, nome: 'teste' }]);

    const [tipopagam, setTipopagam] = useState([
        {
            id: 0,
            id_forma_pagamet: 2,
            ordem: 0,
            formapagamento: '',
            valor: 0,
            clicado: false,
        },
    ]);
    const [atztipopagam, setAtzTipopagam] = useState([
        {
            id: 0,
            id_forma_pagamet: 2,
            ordem: 0,
            formapagamento: '',
            valor: 0,
            clicado: false,
        },
    ]);
    const [isClick, setIsclick] = useState(false);
    const [isViewTroco, setIsViewTroco] = useState(false);

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

    const vinical = totalIncial();
    const [formText, setFormText] = useState('');
    const total = vinical;

    // AQUI É O CARREGAMENTO INICIAL DA CAIXA DE COMBIANAÇÃO E TOTAL DA VENDA
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
            await api.get(`formapagamento/1`).then(response => {
                setFormaPNome(response.data);
            });

            await api.delete(`formapagamentovendaDel/${0}`);
        }
        handleAddRepository3();
    }, []);

    async function clickinput(): Promise<void> {
        const valorAnt = inputRef.current?.value;
        setTotalAgora(Number(valorAnt));
    }
    // ATUALIZAR O NOME DA FORMA DE PAGAMENTO///////////////////////////
    async function clickselect(): Promise<void> {
        const or = selectRef.current?.selectedIndex;

        if (Number(or) !== 0) {
            await api.get(`formapagamento/${or}`).then(response => {
                setFormaPNome(response.data);
            });
        } else if (Number(or) === 0) {
            await api.get(`formapagamento/1`).then(response => {
                setFormaPNome(response.data);
            });
        }
    }
    /// /////////////////////////////////////////////////////////////////

    // FUNÇÃO DO BOTÃO INCLUIR///////////////////////////////////////////////////////
    const [valores, setValores] = useState(0);
    async function soma(): Promise<void> {
        await api.get(`formapagamentovenda/soma/${0}`).then(res => {
            setValores(res.data);
        });
    }
    let valTotal = 0;
    useEffect(() => {
        setAtzTipopagam(tipopagam);
        const updateddadoscliente = tipopagam.map(d =>
            d.id === idlinha
                ? { ...d, clicado: true }
                : { ...d, clicado: false },
        );
        console.log('Chamou a função');
        console.log(updateddadoscliente);
        console.log('===============');
        setTipopagam(updateddadoscliente);
    }, [idlinha]);
    async function incluir(): Promise<void> {
        const verId = options[formaPId - 1];
        const selref = verId.id;

        async function handleselect(): Promise<void> {
            const verinputref = totalagora.toString(); // inputRef.current?.value;
            const valRes = valRestante.toString(); /// inputRefVR.current?.value;

            const Vr = Number(valRes);

            if (Vr > 0) {
                if (Number(verinputref) > 0) {
                    await api.post('formapagamentovenda', {
                        id_forma_pagmet: Number(selref),
                        id_venda: 0,
                        valor: verinputref,
                        ordem: formaPId,
                        formapagamento: formaPNome,
                        status: false,
                    });
                    await api.get('formapagamentovenda').then(res => {
                        setTipopagam(res.data);
                    });
                    await api.get(`formapagamentovenda/soma/${0}`).then(res => {
                        valTotal = res.data;
                    });
                    setAtzTipopagam(tipopagam);

                    const tlt = valTotal;
                    console.log(tipopagam);
                    if (Number(vlrIncial) >= Number(tlt)) {
                        setValRestante(Number(vlrIncial) - Number(tlt));
                        setTroco(0);
                        setIsclick(false);
                        setTotalAgora(Number(vlrIncial) - Number(tlt));
                        setIsViewTroco(false);
                        const totalgeral = tipopagam?.reduce(
                            (acc, current) => acc + current.valor,
                            0,
                        );
                        console.log(`VALOR TOTAL GERAL${totalgeral}`);
                    } else if (Number(vlrIncial) < Number(tlt)) {
                        setValRestante(0);
                        setIsViewTroco(true);
                        const verSinal = Number(tlt) - Number(vlrIncial);
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
    // =======================

    async function excluir(): Promise<void> {
        async function handleselect(): Promise<void> {
            if (idlinha !== 0) {
                await api.delete(`formapagamentovenda/${idlinha}`);
                await api.get('formapagamentovenda').then(res => {
                    setTipopagam(res.data);
                });
                await api.get(`formapagamentovenda/soma/${0}`).then(res => {
                    valTotal = res.data;
                });

                const totalReduzido = valTotal;
                console.log(totalReduzido);
                if (Number(vlrIncial) >= Number(totalReduzido)) {
                    setIsclick(true);
                    setTroco(0);
                    setIsViewTroco(false);
                    setValRestante(Number(vlrIncial) - Number(totalReduzido));
                    setTotalAgora(Number(vlrIncial) - Number(totalReduzido));
                } else if (Number(vlrIncial) < Number(totalReduzido)) {
                    setIsclick(true);
                    setIsViewTroco(true);
                    setValRestante(0);
                    setTotalAgora(0);
                    const verSinal = Number(totalReduzido) - Number(vlrIncial);

                    if (Math.sign(verSinal) === -1) {
                        setTroco(-1 * verSinal);
                    } else {
                        setTroco(verSinal);
                    }
                }
                setIdLinha(0);
            } else if (idlinha === 0) {
                alert('Selecione um item acima para excluir');
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
        alert('Pedido encontre-se aberto');
        window.location.href = '/';
    }, []);
    async function teste(): Promise<void> {
        document.getElementById('teste');
    }

    return (
        <Form isClick={isClick} isViewTroco={isViewTroco}>
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
                                            id="selectId"
                                            ref={selectRef}
                                            onLoad={e =>
                                                setFormaPId(Number(e.target))
                                            }
                                            onChange={e => [
                                                [
                                                    setFormaPId(
                                                        Number(e.target.value),
                                                    ),
                                                    clickselect(),
                                                ],
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
                                                        value={option.ordem}
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
                                            value={totalagora.toLocaleString(
                                                'pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                },
                                            )}
                                            onClick={e => setIsclick(true)}
                                        />

                                        <input
                                            onKeyDown={e => setIsclick(true)}
                                            className="idVR"
                                            id="idVRI"
                                            type="text"
                                            ref={inputRef}
                                            onClick={clickinput}
                                            defaultValue={valRestante}
                                            onChange={({ target }) =>
                                                setTotalAgora(
                                                    Number(target.value),
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
                                        <input
                                            className="idVR"
                                            id="ValorRestante"
                                            value={valRestante.toLocaleString(
                                                'pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                },
                                            )}
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
                                            {tipopagam
                                                .sort((a, b) =>
                                                    a.ordem > b.ordem ? 1 : -1,
                                                )
                                                .map(dados => (
                                                    <tr
                                                        // className={
                                                        //     dados.clicado
                                                        //         ? 'activedados'
                                                        //         : 'item'
                                                        // }
                                                        className="corteste"
                                                        onClick={e =>
                                                            setIdLinha(dados.id)
                                                        }
                                                        key={dados.id}
                                                    >
                                                        <td>{dados.ordem}</td>
                                                        <td>
                                                            {
                                                                dados.formapagamento
                                                            }
                                                        </td>
                                                        <td>
                                                            {dados.valor.toLocaleString(
                                                                'pt-br',
                                                                {
                                                                    style:
                                                                        'currency',
                                                                    currency:
                                                                        'BRL',
                                                                },
                                                            )}
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
                                        <h1 id="hb">Troco: </h1>
                                        <h1 id="hb2">
                                            {troco.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            })}
                                        </h1>
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
