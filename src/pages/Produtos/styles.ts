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

    .containers {
        width: 100%;
        margin: 1000px;
    }
`;

export const GRADE = styled.div`
    border-radius: 4px;
    border: 1px solid #fff;
    width: 600px;
    #DivTitle {
        width: 570px;
        margin-left: 10px;
        margin-right: 10px;
    }

    #H1Title {
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        color: #fff;
    }
    select {
        width: 100%;
        height: 25px;
        border-radius: 4px;
    }

    #selgrupo {
        width: 100%;
    }
    #arca {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 4px;
        border: 1px solid #fff;
        display: flex;
        width: 570px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-right: 20px;

        h1 {
            color: #fff;
            font-size: 13px;
            font-family: Arial;
            font-weight: normal;
        }

        .containers {
            width: 100%;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        #div1 {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        .inicio {
            width: 100%;
        }
        #divinputREF {
            margin-right: 3px;
        }
        #inputREF {
            width: 100%;
        }
        #div2 {
            width: 100%;
            margin-left: 10px;
            margin-right: 100px;
        }
        #div3 {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        #div3 div {
            margin-right: 3px;
        }
        #div4 {
        }

        input {
            border-radius: 4px;
            padding: 10px;
            height: 20px;
            border-color: #fff;
        }
        .descriptions {
            width: 100%;
        }
        .inputEQ {
            width: 100%;
        }
        .inputValore {
            width: 100px;
        }
    }
    #containersButton {
        width: 100%;
        padding-right: 15px;
        #div5 {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-end;
        }

        .botoes {
            margin-top: 7px;
            margin-bottom: 7px;
        }
        button {
            padding: 10px;
            margin: 3px;
            border-radius: 4px;
            border-color: #efefef;
        }
        button:hover {
            background-color: #a9a9a9;
            border-color: #a9a9a9;
        }
    }
`;

export const Repositories = styled.div``;
