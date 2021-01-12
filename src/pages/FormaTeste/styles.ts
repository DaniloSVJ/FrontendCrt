import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: '#3a3a3a';
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.div`
    height: 500px;
    margin: 0;
    #carroça {
        display: flex;
        height: 100%;
        margin: 0;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .box {
        width: 65px;
        height: 65px;
        background: red;
        margin: 5px;
    }
`;
