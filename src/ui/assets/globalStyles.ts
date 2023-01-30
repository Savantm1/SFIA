import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';
import Color from '@ui/assets/color';
import { createGlobalStyle } from 'styled-components';

const ScreenWrapper = styled.div`
    background-color: lightgray;
    width: 100%;
    height: 100%;
`;

export const AppStyled = {
    ScreenWrapper,
};

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  };

  a {
      text-decoration: none;
  };

`;

export const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'inter',
            textTransform: 'none',
            fontWeight: 'bold',
        },
        h1: {
            fontSize: 24,
            fontWeight: 700,
        },
        h2: {
            fontSize: 22,
            fontWeight: 600,
        },
        h3: {
            fontSize: 16,
            fontWeight: 500,
        },
        h4: {
            fontSize: 14,
            fontWeight: 500,
        },
        h5: {
            fontSize: 12,
            fontWeight: 700,
        },
        h6: {
            fontSize: 12,
            fontWeight: 500,
        },
        body1: {
            fontSize: 10,
            fontWeight: 700,
        },
        body2: {
            fontSize: 10,
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 8,
            fontWeight: 600,
        },
    },
    components: {
        // Name of the component
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    color: 'white',
                    backgroundColor: Color.mainViolet,
                    borderColor: 'none',
                },
            },
        },
    },
});
