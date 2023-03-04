import Color from '@ui/assets/color';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
`;

const Image = styled.img`
    max-width: 326px;
    width: 100%;
    margin-bottom: 40px;
`;

const Title = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.secondaryGray};
    margin-bottom: 20px;
    max-width: 320px;
    text-align: center;
`;

export const Styled = {
    Wrapper,
    Image,
    Title,
};
