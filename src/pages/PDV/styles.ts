import styled, { css } from 'styled-components';
import { shade } from 'polished';

// flex-container
export const Title = styled.h1`
    font-size: 48px;
    color: '#3a3a3a';
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;
// interface FormProps {
//     isteste: Boolean;
// }
export const Grid = styled.div`
    background-color: #128ac6;
    //margin-color: #128ac6;
    .Header #a1 a {
        text-align: none;
    }
    display: grid;

    a {
        color: #fff;
        text-align: none;
    }

    height: 100%;
    outline-width: 100px;

    grid-template-areas:
        'header header header header header header'
        'menu main main main main main'
        'menu footer footer footer footer footer';
    .Header {
        grid-area: header;

        //position: center;
    }
    #dadosIniciais {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    #dadosIniciais a {
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        &:hover {
            color: yellow;
        }
    }
    .Header #a1 {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    .Header #a1 div {
        margin: 7px;
    }
    .Header #a1 {
        align-items: flex-start;
        justify-content: flex-end;
    }
    #btnFechar {
        border: 1px solid #98fb98;
        padding: 20px;
        border-radius: 4px;
        color: #128ac6;
        &:hover {
            background-color: #98fb98;
        }
    }

    .h1cabeçado {
        font-size: 20px;
        color: #fff;
    }
    .inputcabeçalho {
        font-size: 13px;
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        text-align: center;
        height: 20px;
        width: 70px;
    }
    #h1doinput {
        margin-bottom: 8px;
        margin-left: 4px;
        margin-right: 4px;
        width: 100%;
    }
    .h1dadosInput {
        background-color: #b7b7b7;
        text-align: left;
        padding: 4px;
        font-size: 18px;
        color: #000;
        height: 28.5px;
        width: 100%;
        border-radius: 4px;
    }
    #clash1 {
        text-align: center;
    }

    Link {
        margin: 15px;
    }

    div.Header #clash1 {
        background-color: #fff;
        padding: 15px;
        font-size: 50px;
        height: 85px;
        border-radius: 4px;
        margin-bottom: 10px;
        border-radius: 4px;
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
        height: 320px;
        text-align: left;

        text-align: left;
        font-style: normal;
        width: 100%;
        font-weight: 300 !important;

        background-color: #ffffcb;
        color: #000;
        vertical-align: bottom;
    }

    #customers .idQ {
        text-align: center;
    }

    #customers .cvalor {
        text-align: right;
    }

    #customers th {
        background-color: #ffffcb;
        border-bottom: 1px dotted #000;
    }
    #customers td {
        background-color: #ffffcb;
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
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }

        /* Modal Content */
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        /* The Close Button */
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    }
    #bg {
        width: 100%;
        height: 100%;
        top: 10px;
        left: 20px;
        position: fixed;
        display: none;
    }
    .box {
        height: 405px;
        background-color: #fff;
    }
    #bg:target {
        display: block;
    }
    #bg:target ~ .box {
        top: 150px;
        transition: all 0.3s;
        transition-delay: 0.2s;
        height: 405px;
        background-color: #fff;
    }
    .box {
        width: 600px;
        height: 405px;
        position: absolute;
        margin-left: -360px;
    }
    #divmodal {
        margin: 20px;
        background-color: #fff;
    }
    #h1ClienteModal {
        margin-left: 20px;
        background-color: #fff;
        border-radius: 5px;
    }
    .box {
        weight: 500px;
        height: 500px;
        margin: 30px;

        border: 1px solid #fff;
        background-color: #128ac6;
    }
    .box2 {
        height: 500px;
        background-color: #fff;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 7px;
        /* display: table; */
    }
    .tableModalCli th {
        background-color: #c0c0c0;
        color: #000;
        border-bottom: 1px dotted #000;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    .tableModalCli th,
    .tableModalCli td {
        border: 1px solid #ddd;
        padding: 2px;
        height: 12px;
        vertical-align: bottom;
    }
    /* .tableModalCli tr:nth-child(even) {
        background-color: #f2f2f2;
    } */

    .tableModalCli td {
        color: #000;
    }
    tr:hover {
        color: #fff;
        background-color: #3390ff;
        cursor: pointer;

        & td {
            color: #fff;
        }
    }
    .activedados {
        background-color: #000;
    }
    .item {
        background-color: #fff;
    }
    .activedados {
        background-color: #000;
    }
    .item {
        background-color: #fff;
    }
`;

export const Repositories = styled.div``;
