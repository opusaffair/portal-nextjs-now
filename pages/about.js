import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
  },
  logos: {
    maxWidth: "200px"
  }
});

const About = ({ classes }) => (
  <div className="container" className={classes.root}>
    <Grid container justify="center">
      <Grid item md={6}>
        <Typography variant="h1" gutterBottom>
          StagePage
        </Typography>
        <Typography paragraph>
          Welcome to the new StagePage, your digital portal to New England
          Theatre. Want to know what’s good in Rhode Island,looking for a little
          night music up in Maine, well you’re on the right track. Browse
          through hundreds of theatre listings that will take you all the way
          from Saturday night to Sunday morning and beyond. If you’re looking
          for theatre in New England, your first stop needs to be the StagePage!
        </Typography>
        <Typography variant="h3">
          <img
            src="/static/stagesource-logo.png"
            width="280"
            alt="StageSource"
          />
        </Typography>
        <Typography paragraph>
          StageSource provides leadership and services to advance the art of
          theater in the Greater New England region, uniting theater artists,
          theater companies, and collaborators in vision and goals that inspire
          and empower our community to realize its greatest artistic potential
          through workforce development and sector improvement. Want to know
          more? Visit us at{" "}
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

        <br />
        <Typography variant="h3">
          <img
            src="/static/opusaffair-logo.png"
            alt="Opus Affair"
            width="280"
          />
        </Typography>
        <Typography paragraph>
          Opus Affair built this StagePage site as part of their Common Calendar
          project, building a shared event database to power arts event
          calendars, like StagePage, the{" "}
          <a href="https://www.bostonoperacalendar.org/" target="_blank">
            Boston Opera Calendar
          </a>
          , and the{" "}
          <a href="https://www.opusaffair.com/calendar/" target="_blank">
            Opus Affair Calendar
          </a>
          . They also host a monthly networking event for anyone interested in
          the arts in Boston—and provide design and digital marketing services
          to arts and culture organizations across the country.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://www.opusaffair.com"
        >
          Learn More About Opus Affair
        </Button>
        <br />
        <br />
        <Typography variant="h3">About the Standing O Designation</Typography>
        <Typography paragraph>
          The StageSource Gender Parity Task Force's Standing O subcommittee
          creates and coordinates audience engagement initiatives that promote
          awareness of and engagement in gender equity in theater. One way that
          we do this is with the Standing O designation! This designation is
          given to shows that meet at least three of the five following
          criteria: Female Director, Female Playwright, At least 50% Female
          Cast, At least 50% Female Design Team, or Female-Centered Story. To
          find out more about StageSource's work towards{" "}
          <a href="https://www.stagesource.org/page/StandingO">
            Gender Parity click here!
          </a>
        </Typography>
        <br />
        <Typography variant="h4" gutterBottom>
          StageSource Partners
        </Typography>

        <Grid container justify="center" spacing={16}>
          <Grid item md={4}>
            <img
              className={classes.logos}
              src="/static/MCC_Logo_RGB_NoTag.jpg"
              width="100%"
              alt="Massachusetts Cultural Council"
            />
          </Grid>
          <Grid item md={4}>
            <img
              className={classes.logos}
              src="/static/BCC Logo.jpg"
              width="100%"
              alt="Boston Cultural Council"
            />
          </Grid>
          <Grid item md={4}>
            <img
              className={classes.logos}
              src="/static/TBF_stacked_rgb_Screen.png"
              width="100%"
              alt="The Boston Foundation"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles, { withTheme: true })(About);
