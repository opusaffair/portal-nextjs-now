import { Query } from "react-apollo";
import gql from "graphql-tag";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NextSeo from "next-seo";
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
  },
  title: {
    fontWeight: 700,
    fontSize: "2.75em"
  },
  date: {
    fontSize: "2em"
  },
  opuslink: {
    marginTop: theme.spacing.unit * 10
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
            <Paper className={classes.root}>
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
              <Grid container>
                <Grid item lg={9} md={12}>
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
                </Grid>
              </Grid>

              <Typography className={classes.opuslink}>
                <a
                  className={classes.link}
                  href={`https://www.opusaffair.com/events/${event.slug}`}
                >
                  Link to Opus Affair calendar
                </a>
              </Typography>
            </Paper>
            <NextSeo
              config={{
                title: event.title,
                description: event.organizer_desc,
                canonical: `https://stagepage.now.sh/events/${event.slug}`,
                images: [
                  {
                    url: `https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces,h_500,w_1200,z_0.3/${
                      event.image_url
                    }`,
                    width: 1200,
                    height: 500,
                    alt: event.title
                  }
                ]
              }}
            />
          </div>
        );
      }}
    </Query>
  );
};

export default withStyles(styles, { withTheme: true })(EventDetails);
