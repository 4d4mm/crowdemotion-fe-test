import * as React from "react";
import Theme from "../../components/Theme/Theme";
import Logo from "../../components/Logo/Logo";
import AppBar from "../../components/AppBar/AppBar";
import MainContent from "../../components/MainContent/MainContent";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <Theme>
    <AppBar logo={Logo} />
    <MainContent>{children}</MainContent>
  </Theme>
);

export default Layout;
