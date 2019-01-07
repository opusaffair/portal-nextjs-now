import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { displayTimeDateRange } from "../lib/date-helpers";

const styles = theme => ({
  root: {
    "& a": { textDecoration: "none" }
  },
  img: {
    height: "auto",
    width: "100%"
  },
  item: {
    height: "100%"
  },
  title: {
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "1.2",
    marginBottom: "10px"
  }
});

const SearchResultGrid = ({ hits, classes, theme }) => (
  <Grid container spacing={16} className={classes.root}>
    {hits.map(event => (
      <Grid item lg={3} md={6} sm={12} xs={12} key={event.objectID}>
        <Link as={`/events/${event.slug}`} href={`/events?slug=${event.slug}`}>
          {/* For dev purposes, switching away from clean URLs */}
          {/* <Link href={`/events?slug=${event.slug}`}> */}
          <a>
            <Card className={classes.item}>
              <div>
                <picture>
                  <source
                    media={`(min-width: ${theme.breakpoints.values.xl}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces:auto,h_150,w_304,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <source
                    media={`(min-width: ${theme.breakpoints.values.lg}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces:auto,h_150,w_304,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <source
                    media={`(min-width: ${theme.breakpoints.values.md}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces:auto,h_250,w_616,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <source
                    media={`(min-width: ${theme.breakpoints.values.sm}px)`}
                    sizes="100vw"
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces:auto,h_363,w_950,z_0.3/${
                      event.image_url
                    }`}
                  />
                  <img
                    srcSet={`https://res.cloudinary.com/opusaffair/image/fetch/c_fill,dpr_auto,f_auto,g_faces:auto,h_200,w_548,z_0.3/${
                      event.image_url
                    }`}
                    className={classes.img}
                  />
                </picture>
              </div>
              <CardContent>
                <Typography variant="h2" className={classes.title}>
                  {event.title}
                </Typography>
                <Typography>
                  {displayTimeDateRange(event.start_date, event.end_date)}
                  {event.start_date && event.end_date && <br />}
                  {event.organizers}
                </Typography>
              </CardContent>
            </Card>
          </a>
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles, { withTheme: true })(SearchResultGrid);
