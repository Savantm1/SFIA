import { Text } from '@ui//components/Text';
import Color from '@ui/assets/color';
import { Shadow } from '@ui/assets/shadow';
import styled from 'styled-components';

const SelectContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all ease 0.1s;
    &:hover {
        background: ${Color.secondaryLightBlue};
        outline: 2px solid ${Color.secondaryBlue};
    }
    background: ${Color.mainWhite};
    box-shadow: ${Shadow.mainShadow};
    border-radius: 8px;
    padding: 20px 25px;
    & > img {
        opacity: 0;
    }
    &:hover > img {
        opacity: 1;
    }
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14px;
    max-width: 210px;
`;

const SubTitle = styled(Text)`
    margin-top: 4px;
`;

export const Styled = {
    SelectContainer,
    TextBlock,
    SubTitle,
};
