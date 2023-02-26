import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled(Text)``;
const Level = styled(Text)`
    margin-left: 6px;
    margin-right: 8px;
    margin-top: 7px;
    width: 30px;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SliderWrapper = styled.div`
    display: flex;
`;

const MenuButton = styled(IconButton)`
    height: 32px;
    width: 26px;
    margin-bottom: 10px;
`;

export const Styled = {
    Container,
    Title,
    Block,
    SliderWrapper,
    Level,
    MenuButton,
};
