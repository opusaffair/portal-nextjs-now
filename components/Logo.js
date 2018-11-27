import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
const styles = () => ({
  logo: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1.2em"
  }
});
const Logo = ({ classes }) => (
  <Button color="inherit" className={classes.logo}>
    StagePage
  </Button>
);

export default withStyles(styles)(Logo);
