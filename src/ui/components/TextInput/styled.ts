import styled from 'styled-components';
import Color from '@ui/assets/color';
import { Size } from '@ui/assets/size';
import '@fontsource/inter/500.css';

type InputCSSType = {
    isError?: boolean;
};

const Input = styled.input<InputCSSType>`
    font-family: 'inter', serif;
    color: ${(props) => (props.isError ? 'red' : Color.mainBlack)};
    font-size: ${Size.size_16}px;
    font-weight: 500;
    background: ${Color.mainWhite};
    border: 1.5px solid
        ${(props) => (props.isError ? 'red' : Color.secondaryBlue)};
    border-radius: 10px;
    padding: 12px 10px 10px 10px;
    outline: none;

    &:disabled {
        background: rgba(251, 251, 251, 1);
        border-color: rgba(159, 159, 159, 1);
        color: rgba(159, 159, 159, 1);
    }

    &:focus {
        color: ${Color.mainBlack};
        background: ${Color.secondaryLightBlue};
        border: 1.5px solid ${Color.secondaryBlue};
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding-bottom: 16px;
`;

const ErrorText = styled.span`
    position: absolute;
    bottom: 0;
    left: 4px;
    font-family: 'inter', serif;
    font-weight: 500;
    font-size: ${Size.size_12}px;
    color: red;
`;

export const Styled = {
    Input,
    Wrapper,
    ErrorText,
};
