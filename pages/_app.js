import App, { Container } from "next/app";
import React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";
import PageLayout from "../components/PageLayout";
import getPageContext from "../lib/getPageContext";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <PageLayout>
                <Component pageContext={this.pageContext} {...pageProps} />
              </PageLayout>
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
