import '@fontsource/inter/500.css';

import Color from '@ui/assets/color';
import styled from 'styled-components';

type InputCSSType = {
    isError?: boolean;
};

const TextArea = styled.textarea<InputCSSType>`
    resize: none;
    font-family: 'inter', serif;
    color: ${(props) => (props.isError ? 'red' : Color.mainBlack)};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    background: ${Color.mainWhite};
    border: 1px solid
        ${(props) => (props.isError ? 'red' : Color.secondaryGray)};
    border-radius: 10px;
    padding: 10px 10px 11px 16px;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &:disabled {
        background: rgba(251, 251, 251, 1);
        border-color: rgba(159, 159, 159, 1);
        color: rgba(159, 159, 159, 1);
    }

    &::placeholder {
        color: ${Color.secondaryGray};
    }

    &:focus {
        color: ${Color.mainBlack};
        background: ${Color.secondaryLightBlue};
        border: 1px solid ${Color.secondaryBlue};
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
    font-size: 12px;
    color: red;
`;

const Counter = styled.div<InputCSSType>`
    font-family: 'inter', serif;
    font-weight: 500;
    font-size: 12px;
    color: ${(props) => (props.isError ? 'red' : Color.secondaryBlue)};
    position: absolute;
    right: 6px;
    bottom: 20px;
`;

export const Styled = {
    TextArea,
    Wrapper,
    ErrorText,
    Counter,
};
