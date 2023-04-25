import CircularProgress from '@mui/material/CircularProgress';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const ProgressBar = styled(CircularProgress)<{
    customColor: string;
    isBig?: boolean;
}>`
    width: ${({ isBig }) => (isBig ? 60 : 38)}px !important;
    height: ${({ isBig }) => (isBig ? 60 : 38)}px !important;
    transform: rotate(165deg) !important;

    & > svg {
        color: ${({ customColor }) => customColor};
        stroke-linecap: round;
        transform: scale(-1, 1);
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

const ListWrapper = styled.div<{
    skillsGap?: number;
    offset?: number;
}>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: ${({ skillsGap }) => skillsGap ?? 10}px;
    position: relative;
    transition: all ease 0.3s;
    transform: translateX(${({ offset }) => offset ?? 0}px);
`;

const LeftButton = styled(IconButton)<{ arrowVisibility: boolean }>`
    background-color: white;
    width: 20px;
    height: 20px;
    transition: all ease 0.3s;
    opacity: ${({ arrowVisibility }) => {
        return arrowVisibility ? 1 : 0.2;
    }};
    cursor: ${({ arrowVisibility }) => {
        return arrowVisibility ? 'pointer' : 'default';
    }};
`;

const RightButton = styled(IconButton)<{ arrowVisibility: boolean }>`
    background-color: white;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
    transition: all ease 0.3s;
    opacity: ${({ arrowVisibility }) => {
        return arrowVisibility ? 1 : 0.2;
    }};
    cursor: ${({ arrowVisibility }) => {
        return arrowVisibility ? 'pointer' : 'default';
    }};
`;

const SliderWrapper = styled.div<{ isBig: boolean }>`
    width: ${({ isBig }) => (isBig ? 344 : 230)}px;
    overflow: hidden;
`;

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -4px;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Title = styled.span<{ color: Color | string; isBig?: boolean }>`
    font-weight: 700;
    font-size: ${({ isBig }) => (isBig ? 12 : 8)}px !important;
    line-height: ${({ isBig }) => (isBig ? 14.5 : 10)}px !important;
    color: ${({ color }) => color};
`;

const Subtitle = styled.span<{ isBig?: boolean }>`
    font-weight: 600;
    font-size: ${({ isBig }) => (isBig ? 12 : 8)}px !important;
    line-height: ${({ isBig }) => (isBig ? 14.5 : 10)}px !important;
    color: ${Color.secondaryDarkGray};
`;

const PopoverContentWrapper = styled.div`
    padding: 14px;
    width: 350px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PopoverInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
`;

const PopoverTitle = styled.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #656464;
`;

const PopoverSubtitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`;

const PopoverSliderWrapper = styled.div`
    margin-top: 10px;
    display: flex;
`;

const PopoverCode = styled.div<{ color: string; subColor?: string }>`
    background-color: ${({ subColor }) => subColor};
    color: ${({ color }) => color};
    width: 70px;
    height: 30px;
    margin-right: -14px;
    display: flex;
    align-items: center;
    justify-content: end;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    :after {
        right: 0;
        height: 30px;
        width: 6px;
        background-color: ${({ color }) => color};
        content: '';
    }
`;

const PopoverCodeSpan = styled.span`
    margin-right: 8px;
`;

const PopoverLevel = styled(Text)`
    margin-left: 8px;
    margin-top: 7px;
    width: 30px;
`;

const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Styled = {
    Wrapper,
    ListWrapper,
    ProgressBar,
    LabelWrapper,
    Title,
    Subtitle,
    PopoverContentWrapper,
    Row,
    PopoverInfo,
    PopoverTitle,
    PopoverSubtitle,
    PopoverSliderWrapper,
    PopoverCode,
    PopoverLevel,
    PopoverCodeSpan,
    SliderWrapper,
    LeftButton,
    RightButton,
    ProgressBarContainer,
};
