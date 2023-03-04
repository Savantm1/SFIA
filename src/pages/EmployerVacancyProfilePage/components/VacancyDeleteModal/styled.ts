import Color from '@ui/assets/color';
import { Button } from '@ui/components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 30px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${Color.mainBlack};
    margin-bottom: 6px;
`;

const Subtitle = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${Color.secondaryGray};
    margin-bottom: 30px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const DeleteButton = styled(Button)`
    background-color: ${Color.critical} !important;
    color: ${Color.mainWhite} !important;
    width: 150px !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
`;

const CancelButton = styled(Button)`
    background-color: ${Color.mainWhite} !important;
    color: ${Color.secondaryGray} !important;
    border: 1px solid ${Color.secondaryGray}!important;
    width: 100px !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
`;

export const Styled = {
    Wrapper,
    Title,
    Subtitle,
    ButtonsWrapper,
    DeleteButton,
    CancelButton,
};
