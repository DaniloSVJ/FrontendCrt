import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: Boolean;
}
export const Title = styled.h1`
    font-size: 48px;
    color: '#3a3a3a';
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const GRADE = styled.div`
    //background-color: #e0ffff;
    display: grid;

    grid-template-areas:
        'header header header header header header'
        'menu main main main main main'
        'menu footer footer footer footer footer';
    .Header {
        grid-area: header;
    }
    .Main {
        grid-area: main;
        background-color: #128ac6;
    }
    .Menu {
        grid-area: menu;
        margin-right: 20px;
    }
    .grid-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    label {
        color: #fff;
        font-style: bold;
        font-size: 30px;
        align-items: center;
    }
    h1 {
        color: #fff;
        font-style: bold;
        font-size: 50px;
        margin: 25px;
        text-align: center;
        align-items: center;
        padding: 10;
    }
    input {
        width: 250px;
        background-color: #fff;
        color: #000;
        padding: 14px 20px;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    button {
        width: 250px;
        background-color: #4caf50;
        color: #000;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #45a049;
        }
    }
    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customers td,
    #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    #customers tr:hover {
        background-color: #ddd;
    }

    #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4caf50;
        color: white;
    }
    #customers td {
        background-color: #fff;
    }
`;

// export const Error = styled.span`
//     display: block;
//     color: #c53030;
//     margin-top: 8px;
// `;

export const Repositories = styled.div``;
