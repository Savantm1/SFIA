import Color from '@ui/assets/color';
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    padding: 5px;
    background: ${Color.mainViolet};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all ease 0.3s;
    &:hover {
        scale: 1.1;
    }
`;

const Icon = styled.img<{ size: number }>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;

export const Styled = {
    Container,
    Icon,
};
