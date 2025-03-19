"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import "@fontsource/gochi-hand";
import "@fontsource/baloo-2";

const theme = createTheme({
    palette: {
        background: {
            default: "#FEE3B8",
        },
    },
    typography: {
        fontFamily: "Baloo 2, sans-serif",
        h1: { fontFamily: "Gochi Hand, cursive !important" },
        h2: { fontFamily: "Gochi Hand, cursive !important" },
        h3: { fontFamily: "Gochi Hand, cursive !important" },
        h4: { fontFamily: "Baloo 2, sans-serif !important" },
        h5: { fontFamily: "Baloo 2, sans-serif !important" },
        h6: { fontFamily: "Baloo 2, sans-serif !important" },
        body1: { fontFamily: "Baloo 2, sans-serif !important" },
        body2: { fontFamily: "Baloo 2, sans-serif !important" },
        button: { fontFamily: "Baloo 2, sans-serif !important" },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                html, body {
                    font-family: 'Baloo 2', sans-serif !important;
                }
            `,
        }
    },
});

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
