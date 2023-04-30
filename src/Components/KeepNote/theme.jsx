import { Button, createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC300',
            light: '#FACA30',
            dark: '#F2B900'
        },
        secondary: {
            main: '#6B6B6B',
            light: '#FFFFFF',
            dark: '#000000'
        },
        error: {
            main: "#f44336"
        },
        info: {
            main: "#29b6f6"
        },
        success: {
            main: "#66bb6a"
        },
        warning: {
            main: "#ffa726"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    typography: {
        fontFamily: 'verdana',
        Button: {
            fonstSize: ['0.25rem', '.5rem', '1rem', '1.5rem']
        },
        // h5: {
        //     fontSize: ['0.25rem', '5rem', '3rem', '1.5rem']
        // }

    }

})
