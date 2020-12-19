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

export const Form = styled.div`
    //background-color: #e0ffff;
    display: flex;
    flex-direction: column;
    .teste {
    }
    label {
        position: s;
    }
    input {
        width: 100%;
        background-color: #fff;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        cursor: pointer;
        &::placeholder {
            color: #a8a8b3;
        }
    }

    /* button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        } */
    // }
`;

// export const Error = styled.span`
//     display: block;
//     color: #c53030;
//     margin-top: 8px;
// `;

export const Repositories = styled.div``;
