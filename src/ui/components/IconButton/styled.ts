import Color from '@ui/assets/color';
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
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

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

export const Styled = {
    Container,
    Icon,
};
