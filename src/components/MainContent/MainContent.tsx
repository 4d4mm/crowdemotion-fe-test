import React from "react";
import { makeStyles } from "@material-ui/core";
import { number } from "prop-types";

const useStyles = makeStyles(
  theme => ({
    content: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3) + Number(theme.mixins.toolbar.minHeight),
      paddingBottom: theme.spacing(6),
      maxWidth: 600
    }
  }),
  {
    name: "Main"
  }
);

type MainContentProps = {
  children: React.ReactNode;
};

const MainContent: React.SFC<MainContentProps> = ({ children }) => {
  const { content } = useStyles({});
  return <main className={content}>{children}</main>;
};

export default MainContent;
