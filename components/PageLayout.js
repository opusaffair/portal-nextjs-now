import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    width: "100%",
    maxWidth: theme.breakpoints.values.lg,
    alignItems: "center",
    margin: "auto",
    padding: `0 ${theme.spacing.unit}px`
  },
  "a:active": {
    color: theme.palette.secondary.main
  }
});

class PageLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PageLayout);
