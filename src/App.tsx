import { AppStyled } from '@ui/assets/globalStyles';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@ui/components/IconButton/IconButton';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { TextField } from '@ui/components/TextField';
import { Slider } from '@ui/components/Slider/Slider';
import { Size } from '@ui/assets/size';
import { Text } from '@ui/components/Text';
import { Checkbox } from '@ui/components/Checkbox';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(false)
  const [textValue, setTextValue] = useState('aaffAsd')

  return (
    <ThemeProvider theme={theme}>
      <AppStyled.ScreenWrapper>
        <IconButton onClick={()=> {
          console.log(123);}} iconName={Icons.back} />
          <Text align={'center'} variant={'body2'} color={Color.secondaryBlue}>123124 asdad</Text>
        <Checkbox color={Color.fuxy} checked={value} onChangeHandler={(value1)=>{setValue(value1)}}/>
        <Slider/>
        <TextField label={'label'} onChange={(evt) => {setTextValue(evt.target.value)}}  value={textValue} disabled={false} />
      </AppStyled.ScreenWrapper>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'inter',
      textTransform: 'none',
      fontWeight: 'bold',
    },
    h1: {
      fontSize: Size.size_24,
      fontWeight: 700
    },
    h2: {
      fontSize: Size.size_20,
      fontWeight: 600
    },
    h3: {
      fontSize: Size.size_16,
      fontWeight: 500
    },
    h4: {
      fontSize: Size.size_14,
      fontWeight: 500
    },
    h5: {
      fontSize: Size.size_12,
      fontWeight: 700
    },
    h6: {
      fontSize: Size.size_12,
      fontWeight: 500
    },
    body1: {
      fontSize: Size.size_10,
      fontWeight: 700
    },
    body2: {
      fontSize: Size.size_10,
      fontWeight: 500
    },
    subtitle1: {
      fontSize: Size.size_8,
      fontWeight: 600
    }
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

export default App;
