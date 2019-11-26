import * as React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    link: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center"
    },
    title: {
      fontFamily: "'Comfortaa', cursive",
      letterSpacing: "-1px",
      color: theme.palette.secondary.contrastText,
    }
  }),
  {
    name: "CrowdEmotionAppBar"
  }
);

type CrowdEmotionAppBarProps = {
  logo: React.ComponentType<React.ComponentProps<any>>;
};

const CrowdEmotionAppBar: React.SFC<CrowdEmotionAppBarProps> = ({
  logo: Logo
}) => {
  const { title, link } = useStyles({});
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar variant="dense">
        <Link to="/" className={link}>
          <Logo />
          &nbsp;
          <Typography variant="h5" className={title}>
            <b>crowd</b>emotion
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CrowdEmotionAppBar;
