import { connectSearchBox } from "react-instantsearch-dom";
import Icon from "@material-ui/core/Icon";
import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "baseline",
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 4
  }
});

const MaterialUiSearchBox = ({ currentRefinement, refine, classes }) => {
  return (
    <div className={classes.root}>
      <TextField
        label="Search"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        id="SearchBox"
        fullWidth={true}
        InputProps={{ startAdornment: <Search /> }}
      />
    </div>
  );
};

const ConnectedSearchBox = connectSearchBox(MaterialUiSearchBox);
export default withStyles(styles, { withTheme: true })(ConnectedSearchBox);
