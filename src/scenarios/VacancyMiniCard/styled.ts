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
    padding: 14px 12px 12px 12px;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 12px;
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
    gap: 2px;
`;

const HeaderText = styled.span`
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    color: ${Color.secondaryDarkGray};
`;

const Icon = styled.img`
    width: 11px;
    height: 7.5px;
    margin-top: 1.5px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${Color.mainBlack};
    margin-bottom: 2px;
`;

const Subtitle = styled.span`
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    color: ${Color.secondaryDarkGray};
    margin-bottom: 10px;
`;

const ProgressBarsWrapper = styled(ProgressBarList)`
    margin-bottom: 10px;
`;

const Responses = styled.span`
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    color: ${Color.green};
`;

export const Styled = {
    ScenarioWrapper,
    HeaderWrapper,
    HeaderLeftBlock,
    HeaderRightBlock,
    HeaderText,
    Icon,
    ContentWrapper,
    Title,
    Subtitle,
    ProgressBarsWrapper,
    Responses,
};
