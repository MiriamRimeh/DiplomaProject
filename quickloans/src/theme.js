import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const mainTheme = createTheme({
    components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
      },
});
