import Head from "next/head";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NextSeo from "next-seo";
import Error from "../pages/_error";
import { displayTimeDateRange } from "../lib/date-helpers";
import Loading from "./Loading";

const styles = theme => ({
  link: {
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  img: {
    height: "auto",
    width: "100%"
  },
  para: {
    fontFamily: theme.typography.body2.fontFamily
  }
});

export const eventDetailQuery = gql`
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

export const eventDetailQueryVars = { slug: "" };

const EventDetails = ({ theme, classes, slug }) => {
  eventDetailQueryVars.slug = slug;
  return (
    <Query query={eventDetailQuery} variables={eventDetailQueryVars}>
      {({ loading, error, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <Loading />;
        const { event } = data;
        if (!event) return <div>No match</div>;
        return (
          <div>
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
            <NextSeo
              config={{
                title: event.title,
                description: event.organizer_desc,
                canonical: `https://stagepage.now.sh/events/${event.slug}`
              }}
            />
            <Typography variant="h3">
              {displayTimeDateRange(event.start_datetime, event.end_datetime)}
            </Typography>

            <span
              className={classes.para}
              dangerouslySetInnerHTML={{
                __html: `${event.organizer_desc}`
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              href={event.ticket_link}
              target="_blank"
            >
              Official Site
            </Button>
            <Typography>
              <a
                className={classes.link}
                href={`https://www.opusaffair.com/events/${event.slug}`}
              >
                Link to Opus Affair calendar
              </a>
            </Typography>
          </div>
        );
      }}
    </Query>
  );
};

export default withStyles(styles, { withTheme: true })(EventDetails);
