import { Menu as MenuUI } from '@mui/material';
import { getColorCouple } from '@scenarios/SkillsSelectionModal/ColorCouples';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Menu = styled(MenuUI)`
    margin-top: 6px;
    border-radius: 8px;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
`;

const Container = styled.div``;

const EditBlock = styled.div`
    margin-left: 20px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

type AbbrBlockType = {
    color: (typeof Color)[KeysOfColor];
};

const AbbrBlock = styled.div<AbbrBlockType>`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    margin-left: 20px;
    color: ${(props) => props.color};
    padding: 8px 14px 8px 24px;
    border-right: 6px solid ${(props) => props.color};
    background: ${(props) => getColorCouple(props.color)?.secondary};
`;

const SliderWrapper = styled.div`
    display: flex;
`;
const Level = styled(Text)`
    margin-left: 6px;
    margin-right: 8px;
    margin-top: 7px;
    width: 30px;
`;
export const Styled = {
    SliderWrapper,
    Level,
    Menu,
    Container,
    EditBlock,
    HeaderWrapper,
    TextBlock,
    AbbrBlock,
};
