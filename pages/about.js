import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    "& h1, h2, h3": {
      fontWeight: 700,
      paddingTop: `${theme.spacing.unit * 3}px`
    },
    "& h1": {
      fontSize: "2.8em"
    },
    "& h2": {
      fontSize: "2.5em"
    },
    "& h3": {
      fontSize: "2.2em"
    },
    "& h4": {
      fontSize: "1.5em"
    }
  },
  paper: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit
  }
});

const About = ({ classes }) => (
  <div className="container" className={classes.root}>
    <Typography variant="h1" gutterBottom>
      StagePage
    </Typography>
    <Typography paragraph>
      Welcome to the new StagePage, your digital portal to New England Theatre.
      Want to know what’s good in Rhode Island,looking for a little night music
      up in Maine, well you’re on the right track. Browse through hundreds of
      theatre listings that will take you all the way from Saturday night to
      Sunday morning and beyond. If you’re looking for theatre in New England,
      your first stop needs to be the StagePage!
    </Typography>
    <Typography variant="h3">
      <img src="/static/stagesource-logo.png" width="350" alt="StageSource" />
    </Typography>
    <Typography paragraph>
      StageSource provides leadership and services to advance the art of theater
      in the Greater New England region, uniting theater artists, theater
      companies, and collaborators in vision and goals that inspire and empower
      our community to realize its greatest artistic potential through workforce
      development and sector improvement. Want to know more? Visit us at{" "}
      <a href="https://www.stagesource.org" target="_blank">
        stagesource.org
      </a>
    </Typography>
    <Button
      variant="contained"
      color="primary"
      href="https://www.stagesource.org/"
    >
      Become a StageSource Member
    </Button>
    {/* <Paper className={classes.paper}> */}
    <br />
    <Typography variant="h3">
      <img src="/static/opusaffair-logo.png" alt="Opus Affair" width="350" />
    </Typography>

    <Typography paragraph>
      Opus Affair built this StagePage site as part of their Common Calendar
      project, building a shared event database to power arts event calendars,
      like StagePage, the{" "}
      <a href="https://www.bostonoperacalendar.org/" target="_blank">
        Boston Opera Calendar
      </a>
      , and the{" "}
      <a href="https://www.opusaffair.com/calendar/" target="_blank">
        Opus Affair Calendar
      </a>
      . They also host a monthly networking event for anyone interested in the
      arts in Boston—and provide design and digital marketing services to arts
      and culture organizations across the country.
    </Typography>
    <Button
      variant="contained"
      color="primary"
      href="https://www.opusaffair.com"
    >
      Learn More About Opus Affair
    </Button>
    {/* </Paper> */}
  </div>
);

export default withStyles(styles, { withTheme: true })(About);
