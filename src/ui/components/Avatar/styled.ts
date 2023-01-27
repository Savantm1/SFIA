import styled from 'styled-components';
import Color from '@ui/assets/color';

type Sizes = {
    width: number;
    height: number;
};
type WrapperProps = {
    sizes: Sizes;
};

const Wrapper = styled.div<WrapperProps>`
    border-radius: 50%;
    width: ${(props) => props.sizes.width}px;
    height: ${(props) => props.sizes.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.mainBlack};
`;

const Image = styled.img`
    width: 24px;
    height: 24px;
`;

export const Styled = {
    Wrapper,
    Image,
};
