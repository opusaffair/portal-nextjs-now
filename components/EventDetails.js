import { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NextSeo from "next-seo";
import Head from "next/head";
import Error from "../pages/_error";
import { displayTimeDateRange } from "../lib/date-helpers";
import Loading from "./Loading";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  link: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  img: {
    height: "auto",
    width: "100%"
  },
  para: {
    fontFamily: theme.typography.body2.fontFamily
  },
  title: {
    fontWeight: 700,
    fontSize: "2.75em"
  },
  date: {
    fontSize: "1.8em"
  },
  opuslink: {
    marginTop: theme.spacing.unit * 10
  },
  venueTitle: {
    fontWeight: 700,
    fontSize: "1.2em",
    paddingTop: theme.spacing.unit * 2
  },
  venueAddress: {
    "& a": {
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.secondary.main
      }
    }
  },
  presentedBy: {
    fontWeight: 700,
    fontSize: "1.4em"
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
      org_names
      published
      venues {
        opus_id
        name
        address
        city
        state
        zip_code
        latitude
        longitude
      }
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
        if (!event || !event.published) return <div>No match</div>;
        const { venues, org_names } = event;
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
            <Paper className={classes.root}>
              <Typography className={classes.superTitle}>
                {event.creative_supertitle}
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                className={classes.title}
                gutterBottom
              >
                {event.title}
              </Typography>
              <Typography variant="h3" className={classes.date}>
                {displayTimeDateRange(event.start_datetime, event.end_datetime)}
              </Typography>
              {org_names && (
                <Typography variant="h3" className={classes.presentedBy}>
                  Presented by {org_names}
                </Typography>
              )}
              <Grid container spacing={24}>
                <Grid item lg={8} md={12}>
                  <span
                    className={classes.para}
                    dangerouslySetInnerHTML={{
                      __html: `${event.organizer_desc}`
                    }}
                  />
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={event.ticket_link}
                    target="_blank"
                    fullWidth
                  >
                    Official Site
                  </Button>
                  {venues && (
                    <Fragment>
                      <Typography variant="h5" className={classes.venueTitle}>
                        Venue{venues.length > 1 ? "s" : ""}
                      </Typography>
                      <Typography className={classes.venueAddress}>
                        {venues.map(venue => {
                          return (
                            <Fragment key={venue.opus_id}>
                              {venue.name}
                              <br />
                              <a
                                target="_blank"
                                href={`https://www.google.com/maps/dir//(${
                                  venue.latitude
                                },%20${venue.longitude})`}
                              >{`${venue.address} ${venue.city}, ${
                                venue.state
                              } ${venue.zip_code}`}</a>
                              <br />
                              <br />
                            </Fragment>
                          );
                        })}
                      </Typography>
                    </Fragment>
                  )}
                </Grid>
              </Grid>

              <Typography className={classes.opuslink}>
                <a
                  className={classes.link}
                  href={`https://www.opusaffair.com/events/${event.slug}`}
                >
                  admin
                </a>
              </Typography>
            </Paper>
            <NextSeo
              config={{
                title: event.title,
                description: event.organizer_desc,
                // images: [
                //   {
                //     url: `https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_500,w_1200,z_0.3/${
                //       event.image_url
                //     }`,
                //     width: 1200,
                //     height: 500,
                //     alt: event.title
                //   }
                // ],
                openGraph: {
                  type: "website",
                  // url: `https://stagepage.now.sh/events/${event.slug}`,
                  title: event.title,
                  description: event.organizer_desc
                }
              }}
            />
            <Head>
              <meta
                property="og:image"
                content={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_500,w_1200,z_0.3/${
                  event.image_url
                }`}
              />
            </Head>
          </div>
        );
      }}
    </Query>
  );
};

export default withStyles(styles, { withTheme: true })(EventDetails);
