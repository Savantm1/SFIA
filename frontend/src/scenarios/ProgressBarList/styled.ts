import CircularProgress from '@mui/material/CircularProgress';
import Color from '@ui/assets/color';
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

const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    justify-content: flex-start;
    gap: 10px;
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

const DeleteBtn = styled.div`
    position: absolute;
    right: -6px;
    top: -4px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    &:before,
    &:after {
        position: absolute;
        left: 5px;
        top: 4px;
        content: ' ';
        height: 10px;
        width: 2px;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

const ProgressBarOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;
export const Styled = {
    ProgressBarOverlay,
    DeleteBtn,
    Wrapper,
    ListWrapper,
    ProgressBar,
    LabelWrapper,
    Title,
    Subtitle,
};
