import Color from '@ui/assets/color';
import styled from 'styled-components';

const PageWrapper = styled.div`
    font-family: 'inter', serif;
    padding: 30px;
    width: 100%;
    height: 100%;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${Color.mainBlack};
`;

export const Styled = {
    PageWrapper,
    HeaderWrapper,
    Title,
};
