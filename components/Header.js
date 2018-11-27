import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  innerToolbar: {
    maxWidth: theme.breakpoints.values.lg,
    alignSelf: "center",
    width: "100%"
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar postition="static" color="primary">
      <Toolbar className={classes.innerToolbar}>
        <Link href="/">
          <Button color="inherit">Demo</Button>
        </Link>

        <Link href="/upcoming">
          <Button color="inherit">Upcoming</Button>
        </Link>

        <Link href="/past">
          <Button color="inherit">Past</Button>
        </Link>

        <Link href="/about">
          <Button color="inherit">About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
