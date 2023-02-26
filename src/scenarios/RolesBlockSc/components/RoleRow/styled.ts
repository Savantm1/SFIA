import { ProgressBarList } from '@scenarios/ProgressBarList';
import { IconButton } from '@ui/components/IconButton/IconButton';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const EditButton = styled(IconButton)`
    height: 60px;
`;

const Content = styled.div`
    width: 100%;
`;
const ProgressBarListWrapper = styled(ProgressBarList)`
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
`;
export const Styled = {
    Content,
    Container,
    EditButton,
    ProgressBarListWrapper,
};
