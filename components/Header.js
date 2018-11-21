import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <AppBar postition="static" color="primary">
      <Toolbar>
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

export default Header;
