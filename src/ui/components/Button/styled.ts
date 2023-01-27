import { Button as ButtonMUI, ButtonProps, styled } from '@mui/material';
import Color from '@ui/assets/color';
export const Button = styled(ButtonMUI)<ButtonProps>(({ theme }) => ({
    color: Color.mainWhite,
    border: 'none',
    backgroundColor: Color.mainViolet,
    '&:hover': {
        backgroundColor: Color.purple,
        border: 'none',
    },
}));

export const Styled = {
    Button,
};
