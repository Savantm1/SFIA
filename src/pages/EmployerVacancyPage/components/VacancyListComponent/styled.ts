import Color from '@ui/assets/color';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    padding: 30px 26px 30px 30px;
    overflow: auto;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${Color.mainBlack};
`;

const VacancyListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: baseline;
`;

export const Styled = {
    Wrapper,
    HeaderWrapper,
    Title,
    VacancyListWrapper,
};
