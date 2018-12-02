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
        type="text"
        fullWidth={true}
        InputProps={{ startAdornment: <Search /> }}
        className={classes.textField}
      />
    </div>
  );
};

const ConnectedSearchBox = connectSearchBox(
  withStyles(styles, { withTheme: true })(MaterialUiSearchBox)
);
export default ConnectedSearchBox;
