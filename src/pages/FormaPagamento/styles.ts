import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: '#3a3a3a';
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;
interface displayNoneFlex {
    isClick: boolean;
    isViewTroco: boolean;
}
export const Form = styled.div<displayNoneFlex>`
    color: #fff;
    border: 1px #fff;
    border-radius: 4px;
    html {
        background-color: #128ac6;
        height: 100%;
        margin: 0;
    }
    #ValorRestante {
        text-align: right;
        padding-right: 4px;
        background-color: #c7c7c7;
    }
    height: 500px;
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 1000px;
    #forma {
        height: 100%;
        margin: 0;
        display: flex;
        width: 1000px;
        flex-direction: column;
        align-items: center;
    }
    #tudo {
        padding: 15px;
        border: 1px solid #fff;
        border-radius: 4px;

        box-shadow: 1px 1px 3px #000;
        align-items: center;
    }

    #btm2 {
        margin-left: 4px;
    }
    .btm {
        padding: 4px;
        background-color: #e5e5e5;
    }
    #butoesfinais {
        display: flex;
        flex-direction: row;

        align-items: flex-end;
        justify-content: flex-end;
    }

    .botoes {
        margin: 10px;
    }
    .btf {
        margin: 10px;
        border-radius: 3px;
        border: 0px;
        padding: 7px;
        box-shadow: none;
        background-color: #e5e5e5;
        &:hover {
            background-color: #c0c0c0;
        }
    }

    #caixa {
        width: 1000px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #128ac6;
    }
    #container1 {
        border-radius: 5px;
        border: 1px solid #fff;
        padding: 4px;
        border-color: #fff;
    }
    #inicio {
        display: flex;
        flex-direction: row;
    }
    #meio {
        background-color: #fff;
        /* width: 100%; */
        height: 100px;
        overflow: auto;
        margin-bottom: 4px;
    }

    h4 {
        color: #000;
        font-size: 50px;
    }
    h1 {
        weight: 100px;
        font-size: 15px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 7px;
        display: table;
    }
    th {
        background-color: #c0c0c0;
        color: #000;
        border-bottom: 1px dotted #000;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 2px;
        height: 12px;
        vertical-align: bottom;
    }

    td {
        background-color: #fff;
        color: #000;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .tdh:hover {
        background-color: #3390ff;
    }
    #idVRI {
        display: none;
    }

    .idVR {
        color: #000;
        margin-bottom: 4px;
        border: 1px solid #c0c0c0;
        height: 20px;
        align-items: right;
    }
    #idC {
        background-color: #fff;
        color: #000;
        margin-bottom: 4px;
        border: 1px solid #c0c0c0;
        height: 20px;
        align-items: right;
    }
    #idCInp {
        background-color: #fff;
        color: #000;
        margin-bottom: 4px;
        border: 1px solid #c0c0c0;
        height: 20px;

        text-align: right;
        display: flex;
    }
    #lbs_cabeçalho {
        align-items: left;
        margin-left: 5px;
        margin-right: 5px;
    }
    input,
    select {
        height: 20px;
        border: 1px solid #c0c0c0;
        margin-left: 5px;
        margin-right: 5px;
    }
    .idcod {
        text-align: left;
        padding-left: 2px;
    }
    .idcodInp {
        text-align: right;
        padding-left: 2px;
    }
    input {
        text-align: right;
        width: 100px;
        padding: 4px;
    }

    .Valor {
        text-align: right;
        width: 100px;
    }
    .id {
        text-align: right;
        padding-right: 4px;
        background-color: #c7c7c7;
    }

    tr {
        width: 100%;
        background-color: #000;
        &:hover {
            background-color: #3390ff;
        }
    }
    #final {
        display: flex;
        flex-direction: row;
    }
    #btnInEx {
        width: 500px;
    }
    #final #troco {
        display: none;
    }
    #final #troco #hb {
        margin-left: 100px;
        font-size: 30px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    #final #troco #hb2 {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        margin-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
        background-color: #fff;
        font-size: 30px;
        color: #000;
        width: 100%;
    }

    ${props =>
        props.isClick &&
        css`
            #idVRI {
                display: flex;
            }
            #idCInp {
                display: none;
            }
        `}
    ${props =>
        props.isViewTroco &&
        css`
            #final #troco {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
            }
        `}
`;
