import CircularProgress from '@mui/material/CircularProgress';
import Color from '@ui/assets/color';
import styled from 'styled-components';

const ProgressBar = styled(CircularProgress)<{ customColor: string }>`
    width: 38px !important;
    height: 38px !important;
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

const Title = styled.span<{ color: Color }>`
    font-weight: 700;
    font-size: 8px;
    line-height: 10px;
    color: ${({ color }) => color};
`;

const Subtitle = styled.span`
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
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
