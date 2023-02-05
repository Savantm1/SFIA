import { ProgressBarList } from '@scenarios/ProgressBarList';
import Color from '@ui/assets/color';
import styled from 'styled-components';

const ScenarioWrapper = styled.div`
    font-family: 'inter', serif;
    background: ${Color.mainWhite};
    border-radius: 10px;
    box-shadow: 0 1px 35px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HeaderLeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const HeaderRightBlock = styled.div`
    display: flex;
    flex-direction: row;
`;

const HeaderText = styled.span<{ matchColor?: Color }>`
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    color: ${({ matchColor }) => matchColor ?? Color.secondaryDarkGray};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.mainBlack};
    margin-bottom: 3px;
    max-width: 170px;
`;

const Subtitle = styled.span`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: ${Color.secondaryDarkGray};
    margin-bottom: 10px;
`;

const ProgressBarsWrapper = styled(ProgressBarList)`
    margin-top: 4px;
`;

export const Styled = {
    ScenarioWrapper,
    HeaderWrapper,
    HeaderLeftBlock,
    HeaderRightBlock,
    HeaderText,
    ContentWrapper,
    Title,
    Subtitle,
    ProgressBarsWrapper,
};
