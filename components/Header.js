import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Logo from "./Logo";

const styles = theme => ({
  innerToolbar: {
    maxWidth: theme.breakpoints.values.lg,
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-between"
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar postition="static" color="primary">
      <Toolbar className={classes.innerToolbar}>
        <Logo />
        <Link href="/about">
          <Button color="inherit">About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
