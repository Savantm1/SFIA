import Color from '@ui/assets/color';
import styled from 'styled-components';

const StudentBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const SkillsBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 40px;
`;

const EmptySkillsBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.span`
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    width: 100%;
    max-width: 220px;
    color: ${Color.secondaryGray};
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const Styled = {
    StudentBar,
    TextBlock,
    Container,
    SkillsBar,
    EmptySkillsBlock,
    Text,
};
