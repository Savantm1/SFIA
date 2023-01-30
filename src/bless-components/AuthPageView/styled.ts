import Color from '@ui/assets/color';
import bg from '@ui/assets/images/bg.png';
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`;

const LeftSide = styled.div`
    background: url(${bg}) no-repeat;
    background-size: cover;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const RightSide = styled.div`
    background: ${Color.mainWhite};
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.span`
    font-family: 'Inter', serif;
    font-weight: 700;
    font-size: 40px;
    color: ${Color.mainWhite};
    text-align: center;
    max-width: 430px;
`;
export const Styled = {
    Title,
    PageWrapper,
    LeftSide,
    RightSide,
};
