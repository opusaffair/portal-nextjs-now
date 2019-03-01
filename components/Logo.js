import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

const styles = () => ({
  logo: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1.5em"
  }
});
const Logo = ({ classes }) => (
  <Link href="/">
    <Button color="inherit" className={classes.logo}>
      StagePage by StageSource
    </Button>
  </Link>
);

export default withStyles(styles)(Logo);
