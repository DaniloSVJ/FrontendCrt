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

export const Form = styled.form<FormProps>``;
