import { withRouter } from "next/router";

import React, { Component, Fragment } from "react";
import Head from "next/head";

import Header from "../components/Header";
import EventDetail from "../components/EventDetail";

export default withRouter(
  class Events extends Component {
    render() {
      return (
        <Fragment>
          <Header />
          <div>Events {this.props.router.query.slug}</div>
          <Head>
            <title>{this.props.router.query.slug}</title>
          </Head>
          <EventDetail slug={this.props.router.query.slug} />
        </Fragment>
      );
    }
  }
);
