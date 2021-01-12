import React, { FormEvent, useState, useEffect } from 'react';
import { keyframes } from 'styled-components';
import api from '../../services/api';
import { Form } from './styles';

const FormaPagamento: React.FC = () => {
    const [formaPNome, setFormaPNome] = useState('');
    const [formaPId, setFormaPId] = useState(0);
    const [options, setOption] = useState([
        {
            id: 0,
            nome: '',
        },
    ]);
    // useEffect(() => {
    //     const idF = options.find(op => op.nome === formaPNome)?.id;
    //     setFormaPId(Number(idF));
    //     console.log(idF);
    // }, [formaPNome]);

    useEffect(() => {
        api.get('formapagamento').then(response => {
            setOption(response.data);
        });
    }, []);
    return (
        <Form>
            <div id="carroça">
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </div>
        </Form>
    );
};

export default FormaPagamento;
