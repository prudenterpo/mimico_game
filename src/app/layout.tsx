import MuiThemeProvider from '../components/MuiThemeProvider';
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <MuiThemeProvider>
                    {children}
                </MuiThemeProvider>
            </body>
        </html>
    );
}


