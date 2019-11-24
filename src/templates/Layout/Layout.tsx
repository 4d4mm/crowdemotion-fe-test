import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Logo from "../../components/Logo/Logo";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <main>
    <CssBaseline />
    <h1>
      <Logo />
      crowdemotion
    </h1>
    {children}
  </main>
);

export default Layout;
