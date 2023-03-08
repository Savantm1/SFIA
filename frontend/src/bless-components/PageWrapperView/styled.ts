import Color from '@ui/assets/color';
import styled from 'styled-components';

const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: stretch;
    background: ${Color.mainViolet};
    padding: 14px 10px;
`;
const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${Color.mainWhite};
`;

export const Styled = {
    MainWrapper,
    ContentWrapper,
};
