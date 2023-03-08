import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled as styledMUI, Theme } from '@mui/system';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import clsx from 'clsx';
import * as React from 'react';
import styled from 'styled-components';

export const BackdropUnstyled = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
>((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

const ModalUI = styledMUI(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButtonBlock = styled.div`
    width: 100%;
    height: 30px;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    top: 20px;
    cursor: pointer;
`;

const Backdrop = styledMUI(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

export const style = (theme: Theme) => ({
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '96%',
    maxHeight: '96%',
    minWidth: '100px',
    minHeight: '100px',
    overflow: 'scroll',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    boxShadow: 24,
    background: Color.mainWhite,
    borderRadius: '10px',
});

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Close = styled(IconButton)`
    background: ${Color.mainWhite};
`;
export const Styled = {
    Backdrop,
    ModalUI,
    CloseButtonBlock,
    ContentContainer,
    Close,
};
