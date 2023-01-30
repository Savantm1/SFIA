import { Button as ButtonMUI, ButtonProps, styled } from '@mui/material';
import Color from '@ui/assets/color';
export const Button = styled(ButtonMUI)<ButtonProps>(() => ({
    color: Color.mainWhite,
    maxWidth: '220px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: Color.mainViolet,
    '&:hover': {
        backgroundColor: Color.purple,
        border: 'none',
    },
}));

export const Styled = {
    Button,
};
