import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import themeOptions from "../../constants/theme";

type ThemeProps = {
  children: React.ReactNode;
};

const theme = createMuiTheme(themeOptions);

const Theme: React.SFC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
