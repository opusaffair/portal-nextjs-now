import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";

const styles = theme => ({
  root: {
    minHeight: `calc(100vw+${theme.spacing.unit * 0})`,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 10,
    width: "100%",
    maxWidth: theme.breakpoints.values.lg,
    alignItems: "center",
    margin: "auto",
    padding: `0 ${theme.spacing.unit}px`,
    "& a:not([role='button'])": {
      color: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.primary.main
      },
      "&:active": {
        color: theme.palette.secondary.main
      }
    }
  },
  main: {
    // height: "100vw"
  }
});

class PageLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.main}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PageLayout);
