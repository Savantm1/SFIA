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
    justify-content: space-between;
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

const Title = styled.span<{ color: Color; isBig?: boolean }>`
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

export const Styled = {
    Wrapper,
    ListWrapper,
    ProgressBar,
    LabelWrapper,
    Title,
    Subtitle,
};
