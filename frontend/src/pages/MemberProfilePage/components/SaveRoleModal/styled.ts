import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px 40px;
    flex-direction: column;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const CancelButton = styled.button`
    width: 100px !important;
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${Color.secondaryGray} !important;
    background: ${Color.mainWhite} !important;
    color: ${Color.secondaryGray} !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    cursor: pointer;
`;

const Description = styled(Text)`
    margin-bottom: 10px;
`;
const Title = styled(Text)`
    margin-bottom: 10px;
`;

export const Styled = {
    Title,
    Description,
    Container,
    ButtonsContainer,
    CancelButton,
};
