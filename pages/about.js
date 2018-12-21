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
      StagePage lists performances from StageSource members—including theater
      artists, theater companies, and related organizations in the Greater
      Boston area. If you or your organization have events to include on
      StagePage, please{" "}
      <a
        href="https://stagesource.wufoo.com/forms/ro7wwyz1mraq2z/"
        target="_blank"
      >
        submit them here
      </a>
      .
    </Typography>
    <Typography variant="h3">
      <img src="/static/stagesource-logo.png" width="350" alt="StageSource" />
    </Typography>
    <Typography paragraph>
      StageSource provides leadership and services to advance the art of theater
      in the Greater Boston region. Our mission is to unite theater artists,
      theater companies, and related organizations in vision and goals that
      inspire and empower our community to realize its greatest artistic
      potential.
    </Typography>
    <Typography paragraph>
      Founded in 1985, StageSource is a non-profit theater service organization
      led by staff in our Boston offices, a Board of Directors, member
      volunteers and advisory committees representing our members. StageSource
      reaches over 6,000 households and businesses including individual theater
      artists (actors, directors, designers, playwrights, and other theater
      professionals), 220 theater, film, casting, audio, video, service and
      theater support companies, and over 50,000 patrons directly and hundreds
      of thousands more through our member theaters. Our members are located
      throughout New England, New York and beyond.
    </Typography>

    <Typography paragraph>
      StageSource is dedicated to increasing cultural participation through
      advocacy, communication, and education. Providing information,
      initiatives, and resources to established and emerging theater artists and
      organizations in the areas of employment, professional development, and
      institutional growth. Fostering access and non-discrimination in the
      belief that theater should shape, as well as be shaped by, the diversity
      of the community it represents.
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
