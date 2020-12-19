import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: Boolean;
}
// flex-container
export const Title = styled.h1`
    font-size: 48px;
    color: '#3a3a3a';
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Grid = styled.div`
    //background-color: #e0ffff;

    display: grid;

    grid-template-areas:
        'header header header header header header'
        'menu main main main main main'
        'menu footer footer footer footer footer';
    .Header {
        grid-area: header;

        //position: center;
    }
    #teste11 {
        text-align: center;
    }
    div.Header h1 {
        background-color: #fff;
        padding: 15px;
        font-size: 50px;
        height: 85px;
        border-radius: 4px;
        margin-bottom: 10px;
        border-radius: 4px;
        /* background-color: #fff;
        padding: 15px;
        // display: flex;
        font-size: 50px;
        // width: 50%;
        margin-bottom: 10px;
        border-radius: 4px; */
    }

    .MenuDadosVenda {
        grid-area: menu;
        margin-right: 36px;
        width: 250px;
        display: flex;
        flex-direction: column;
    }
    .MenuDadosVenda label {
        color: #fff;
        font-style: bold;
        font-size: 30px;
        //width: 350px;
    }
    .h1Iput {
        color: #fff;
        font-size: 30px;
        //width: 350px;
    }
    .Main {
        grid-area: main;
        background-color: #ffffcb;
        height: 320px;
        margin-top: 10px;
    }
    .item4 {
        grid-area: right;
    }
    .Footer {
        margin-top: 15px;
        grid-area: footer;
        color: #fff;
        display: flex;
    }

    .total {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
    }
    h1 {
    }
    #label {
        align-items: left;
    }
    #valor {
        align-items: right;
    }

    #customers {
        font-family: 'Arial';
        border-collapse: collapse;
        width: 100%;
    }

    #customers td {
        background-color: #ffffcb;
        text-align: center;
    }

    #customers tr:nth-child(even) {
        background-color: #ffffcb;
    }

    #customers tr:hover {
        background-color: #ffffcb;
    }

    #customers th {
        padding: 4px;
        text-align: left;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 300 !important;
        border-bottom: 1px dotted #000;
        background-color: #ffffcb;
        color: #000;
    }
    th {
        vertical-align: bottom;
    }

    input,
    .styInput {
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 14px 20px;
        margin: 8px 0px 8px 0px;
        border: none;
        border-radius: 4px;
        height: 47px;
        cursor: pointer;
        &::placeholder {
            color: #a8a8b3;
        }
    }
`;

// export const Error = styled.span`
//     display: block;
//     color: #c53030;
//     margin-top: 8px;
// `;

export const Repositories = styled.div``;
