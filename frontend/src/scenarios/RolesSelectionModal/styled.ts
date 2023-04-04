import { Select as SelectUI } from '@ui/components/Select';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 40px 40px;
    min-width: 750px;
    width: 100%;
`;

const LeftSide = styled.div`
    min-width: 280px;
    width: 50%;
    flex-direction: column;
    display: flex;
`;

const Description = styled(Text)`
    margin-top: 20px;
`;

const Select = styled(SelectUI)`
    width: 280px;
`;

const RightSide = styled.div`
    width: 40%;

    & > img {
        width: 100%;
    }
`;

const SelectContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: stretch;
    gap: 8px;
`;

export const Styled = {
    SelectContainer,
    Description,
    Select,
    Container,
    RightSide,
    LeftSide,
};
