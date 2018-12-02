import { connectRefinementList } from "react-instantsearch-dom";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  list: {
    padding: 0
  },
  checkBox: {
    padding: theme.spacing.unit
  },
  badge: {
    top: 0
  }
});

const CheckBoxItem = ({ item, refine, classes }) => (
  <ListItem
    className={classes.list}
    onClick={e => {
      e.preventDefault();
      refine(item.value);
    }}
  >
    <Checkbox className={classes.checkBox} checked={item.isRefined} />
    <Badge
      classes={{ badge: classes.badge }}
      badgeContent={item.count}
      color="secondary"
    >
      <ListItemText primary={item.label} />
    </Badge>
  </ListItem>
);

const MaterialUiCheckBoxRefinementList = ({
  classes,
  items,
  refine,
  createURL
}) => (
  <List>
    {items.map(item => (
      <CheckBoxItem
        key={item.label}
        item={item}
        refine={refine}
        createURL={createURL}
        classes={classes}
      />
    ))}
  </List>
);

const ConnectedCheckBoxRefinementList = connectRefinementList(
  MaterialUiCheckBoxRefinementList
);

export default withStyles(styles, { withTheme: true })(
  ConnectedCheckBoxRefinementList
);
