import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  }
});

const Footer = ({ classes }) => {
  return (
    <AppBar postition="static" className={classes.appBar}>
      <Toolbar>Footer</Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Footer);
