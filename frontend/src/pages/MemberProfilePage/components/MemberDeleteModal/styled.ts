import Color from '@ui/assets/color';
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

const DeleteButton = styled.button`
    background-color: ${Color.critical} !important;
    color: ${Color.mainWhite} !important;
    width: 150px !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    border-radius: 8px;
    border: 1px solid ${Color.critical} !important;
    cursor: pointer;
`;

const CancelButton = styled.button`
    width: 100px !important;
    height: 36px;
    border-radius: 8px;
    border: 1px solid ${Color.secondaryGray} !important;
    background: ${Color.mainWhite} !important;
    color: ${Color.secondaryGray} !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    cursor: pointer;
`;

export const Styled = {
    Wrapper,
    Title,
    Subtitle,
    ButtonsWrapper,
    DeleteButton,
    CancelButton,
};
