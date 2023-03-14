import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { Navigation } from '@common/navigation/components/NavigationComponent/NavigationComponent';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles, { AppStyled, theme } from '@ui/assets/globalStyles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppStyled.ScreenWrapper>
                <Navigation />
            </AppStyled.ScreenWrapper>
        </ThemeProvider>
    );
}

export default App;
