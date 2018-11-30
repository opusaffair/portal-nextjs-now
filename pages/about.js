import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    "& h1, h2, h3": {
      fontWeight: 700,
      paddingTop: theme.spacing.unit
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
      StagePage, please <a href="#">submit them here</a>.
    </Typography>
    <Typography variant="h2" gutterBottom>
      About StageSource
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
      <Button
        variant="contained"
        color="secondary"
        href="https://www.stagesource.org/"
      >
        Become a StageSource Member
      </Button>
    </Typography>
    <Paper className={classes.paper}>
      <Typography variant="h3">Opus Affair</Typography>
      <Typography gutterBottom>
        Opus Affair built the StagePage site and powers it with their calendar
        database, which powers other arts calendars with shared event listings.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Paper>
  </div>
);

export default withStyles(styles, { withTheme: true })(About);
