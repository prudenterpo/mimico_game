import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
      () =>
          createTheme({
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
              background: {
                default: prefersDarkMode ? '#0a0a0a' : '#ffffff',
              },
              text: {
                primary: prefersDarkMode ? '#ededed' : '#171717',
              },
            },
            typography: {
              fontFamily: 'Arial, Helvetica, sans-serif',
            },
          }),
      [prefersDarkMode]
  );

  return (
      <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
};

export default RootLayout;
