import React, { Component, Fragment } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./Theme";
import Header from "./Header";
import Footer from "./Footer";

class PageLayout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />

        {this.props.children}

        <style jsx global>{`
          body {
            padding-top: 64px;
          }
        `}</style>
      </MuiThemeProvider>
    );
  }
}

export default PageLayout;
