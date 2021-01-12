import React, { useState } from 'react';
import api from '../services/api';

interface Produto {
    id: string;
    nome_produto: string;
    codigo_produto: string;
    qtdvendido: number;
    valor_vendido: number;
}
export default async function captureproduct(
    codigo: string,
    dadost: Produto | null,
): Promise<Produto | null> {
    let dados: {
        id: string;
        nome_produto: string;
        codigo_produto: string;
        qtdvendido: number;
        valor_vendido: number;
    }[];
    // let codigo2 = '';

    await api.get(`produto/${codigo}`).then(response => {
        const {
            id,
            nome_produto,
            codigo_produto,
            qtdvendido,
            valor_vendido,
        } = response.data;
        dados = [
            {
                id,
                nome_produto,
                codigo_produto,
                qtdvendido,
                valor_vendido,
            },
        ];
        // dadost?.codigo_produto = codigo_produto;
        // codigo2 = codigo;
    });

    return dadost;
}
