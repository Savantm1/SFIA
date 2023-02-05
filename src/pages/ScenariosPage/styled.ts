import Color from '@ui/assets/color';
import styled from 'styled-components';

const ScenarioWrapper = styled.div`
    background: ${Color.mainBlack};
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 40px;
    padding: 40px;
`;

const VacancyMiniCardWrapper = styled.div`
    width: 200px;
`;

const CandidateMiniCardWrapper = styled.div`
    width: 230px;
`;

export const Styled = {
    ScenarioWrapper,
    VacancyMiniCardWrapper,
    CandidateMiniCardWrapper,
};
