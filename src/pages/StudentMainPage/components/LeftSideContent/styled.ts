import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 66px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const EmptySubtitle = styled(Text)`
    max-width: 380px;
    width: 100%;
`;
const EmptyImg = styled.img`
    margin-bottom: 30px;
    max-width: 450px;
    width: 100%;
`;

const SchemeImg = styled.img`
    margin-top: 66px;
    max-width: 600px;
    width: 100%;
`;
export const Styled = {
    Container,
    SchemeImg,
    EmptySubtitle,
    EmptyImg,
};
