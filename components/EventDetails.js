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
import striptags from "striptags";
import Error from "../pages/_error";
import { displayTimeDateRange } from "../lib/date-helpers";
import Loading from "./Loading";
import escape_quotes from "escape-quotes";

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
  superTitle: {
    fontWeight: 700,
    fontSize: "1.2em"
  },
  date: {
    fontSize: "1.4em",
    lineHeight: "1.5em"
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
  },
  desc: {
    marginTop: 0
  },
  standingOLogo: {
    width: "20px",
    height: "20px",
    margin: "0px 5px 0px 0px",
    float: "left"
  }
});

export const eventDetailQuery = gql`
  query eventDetail($slug: String!) {
    event(slug: $slug) {
      title
      image_url
      organizer_desc
      slug
      supertitle_creative
      start_datetime
      end_datetime
      ticket_link
      org_names
      published
      tags {
        name
      }
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
        const jsonldVenues = venues.map(venue => {
          return `{"@type": "place",
            "name": "${venue.name}",
            "address": {
              "@type": "PostalAddress",
              "name": "${venue.name}",
              "streetAddress": "${venue.address}",
              "addressLocality": "${venue.city}",
              "addressRegion": "${venue.state}",
              "postalCode": "${venue.zip_code}"
            }}`;
        });
        const jsonld = `{
          "@type": "Event",
          "image": "https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_500,w_1200,z_0.3/${
            event.image_url
          }",
          "description": "${escape_quotes(
            striptags(event.organizer_desc),
            '"'
          )}",
          "name": "${event.title}",
          "startDate": "${event.start_datetime}",
          "endDate": "${event.end_datetime}",
          "location": [${jsonldVenues}]
        }`;
        return (
          <div>
            <picture>
              <source
                media={`(min-width: ${theme.breakpoints.values.lg}px)`}
                sizes="100vw"
                srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_500,w_1200,z_0.3/${
                  event.image_url
                }`}
              />
              <source
                media={`(min-width: ${theme.breakpoints.values.md}px)`}
                sizes="100vw"
                srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_375,w_900,z_0.3/${
                  event.image_url
                }`}
              />
              <source
                media={`(min-width: ${theme.breakpoints.values.sm}px)`}
                sizes="100vw"
                srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_363,w_950,z_0.3/${
                  event.image_url
                }`}
              />
              <img
                srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_200,w_548,z_0.3/${
                  event.image_url
                }`}
                className={classes.img}
                alt={event.title}
              />
            </picture>
            <Paper className={classes.root}>
              {event.supertitle_creative && (
                <Typography className={classes.superTitle} variant="h3">
                  {event.supertitle_creative}
                </Typography>
              )}
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
              <Grid container spacing={24} className={classes.desc}>
                <Grid item lg={8} md={12}>
                  <span
                    className={classes.para}
                    dangerouslySetInnerHTML={{
                      __html: `${event.organizer_desc}`
                    }}
                  />
                  {event.tags &&
                    event.tags.some(
                      tag => tag.name === "[StageSource] Standing O"
                    ) && (
                      <Fragment>
                        <img
                          className={classes.standingOLogo}
                          src="/static/Standing O Logo.jpg"
                        />
                        <Typography>
                          This production has received a StageSource{" "}
                          <a href="https://www.stagesource.org/page/StandingO">
                            Standing O
                          </a>{" "}
                          for their work towards achieving gender parity in New
                          England theatre.
                        </Typography>
                      </Fragment>
                    )}
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
                description: striptags(event.organizer_desc),
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
                  url: `https://www.stagepage.org/events/${event.slug}`,
                  title: event.title,
                  description: striptags(event.organizer_desc)
                }
              }}
            />
            <Head>
              <meta
                property="og:image"
                content={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_auto,h_500,w_1200,z_0.3/${
                  event.image_url
                }`}
              />
            </Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: jsonld }}
            />
          </div>
        );
      }}
    </Query>
  );
};

export default withStyles(styles, { withTheme: true })(EventDetails);
