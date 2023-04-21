import styled from 'styled-components';

const StudentBar = styled.div`
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 30px;
    padding-bottom: 15px;
    background: white;
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

const ScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SkillsBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 25px;
`;
export const Styled = {
    SkillsBar,
    StudentBar,
    TextBlock,
    Container,
    ScrollContainer,
};
