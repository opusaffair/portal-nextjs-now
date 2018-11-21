import { withRouter } from "next/router";
import { Query } from "react-apollo";
import Head from "next/head";
import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../components/Loading";
import { displayTimeDateRange } from "../lib/date-helpers";

const styles = theme => ({
  img: {
    height: "auto",
    width: "100%"
  }
});

export const EVENT_DETAIL_QUERY = gql`
  query eventDetail($slug: String!) {
    event(slug: $slug) {
      title
      image_url
      organizer_desc
      slug
      start_datetime
      end_datetime
      ticket_link
    }
  }
`;

class Events extends Component {
  render() {
    const variables = {
      slug: this.props.router.query.slug
    };
    const { classes, theme } = this.props;
    return (
      <Fragment>
        <Query query={EVENT_DETAIL_QUERY} variables={variables} ssr={false}>
          {({ loading, error, data }) => {
            if (error) return <div>Errors</div>;
            if (loading) return <Loading />;
            const { event } = data;
            if (!event) return <div>No match</div>;
            return (
              <section>
                <picture>
                  <source
                    media={`(min-width: ${theme.breakpoints.values.lg}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_500,w_1200,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <source
                    media={`(min-width: ${theme.breakpoints.values.md}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_375,w_900,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <source
                    media={`(min-width: ${theme.breakpoints.values.sm}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_363,w_950,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <img
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_200,w_548,z_0.3/${
                      event.image_url
                    }`}
                    className={classes.img}
                  />
                </picture>

                <Typography component="h1" variant="h2">
                  {event.title}
                </Typography>
                <Head>
                  <title>{event.title}</title>
                </Head>
                <Typography variant="h3">
                  {displayTimeDateRange(
                    event.start_datetime,
                    event.end_datetime
                  )}
                </Typography>
                <Typography>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${event.organizer_desc}`
                    }}
                  />
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  href={event.ticket_link}
                  target="_blank"
                >
                  Official Site
                </Button>
                <Typography>
                  <a href={`https://www.opusaffair.com/events/${event.slug}`}>
                    Link to Opus listing
                  </a>
                </Typography>
              </section>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Events));
