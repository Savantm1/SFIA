import Color from '@ui/assets/color';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const SubtitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSideRow = styled.div`
    margin-left: 2px;
`;

const RightSideRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Value = styled.div`
    width: 20px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${Color.mainBlack};
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;
export const Styled = {
    Value,
    Container,
    SubtitleRow,
    LeftSideRow,
    RightSideRow,
};
