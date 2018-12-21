import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const styles = theme => ({
  root: {
    top: "auto",
    bottom: 0
  },
  innerToolbar: {
    maxWidth: theme.breakpoints.values.lg,
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-between",
    "& a": {
      color: theme.palette.primary.main
    }
  },
  button: {
    textTransform: "none"
  }
});

const Footer = ({ classes }) => {
  return (
    <AppBar postition="absolute" color="default" className={classes.root}>
      <Toolbar className={classes.innerToolbar}>
        <a href="https://www.stagesource.org/" target="_blank">
          <Button color="inherit" className={classes.button}>
            StagePage by StageSource
          </Button>
        </a>
        <a
          href="https://stagesource.wufoo.com/forms/ro7wwyz1mraq2z/"
          target="_blank"
        >
          <Button color="inherit" className={classes.button}>
            Submit a performance
          </Button>
        </a>
        <a href="https://www.opusaffair.com/" target="_blank">
          <Button color="inherit" className={classes.button}>
            Powered by Opus Affair
          </Button>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Footer);
