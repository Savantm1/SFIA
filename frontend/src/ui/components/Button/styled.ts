import { Button as ButtonMUI, ButtonProps, styled } from '@mui/material';
import Color from '@ui/assets/color';
export const Button = styled(ButtonMUI)<ButtonProps>(() => ({
    color: Color.mainWhite,
    maxWidth: '220px',
    width: '100%',
    border: 'none',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    borderRadius: '8px',
    backgroundColor: Color.mainViolet,
    paddingTop: '11px',
    paddingBottom: '12px',

    '&:hover': {
        backgroundColor: Color.purple,
        border: 'none',
    },

    '&:disabled': {
        backgroundColor: Color.secondaryGray,
        color: Color.mainWhite,
    },
}));

export const Styled = {
    Button,
};
