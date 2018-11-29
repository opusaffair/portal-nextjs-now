import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { Configure } from "react-instantsearch-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import SortIcon from "@material-ui/icons/Sort";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PortalVirtualMenu, {
  visibleTagFilters
} from "../components/PortalVirtualMenu";
import ConnectedCheckBoxRefinementList from "./CheckBoxList";
import { InstantSearch } from "./InstantSearch";
import SearchResults from "./SearchResults";
import DateMinMax from "./DateMinMax";
import SearchBox from "./SearchBox";

const styles = theme => ({
  filters: {
    paddingBottom: theme.spacing.units * 4
  }
});

class SearchPage extends React.Component {
  state = { open: true };
  togglePanel = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <InstantSearch
        appId={publicRuntimeConfig.ALGOLIA_APP_ID}
        apiKey={publicRuntimeConfig.ALGOLIA_API_KEY}
        indexName="events_end_date_asc"
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
      >
        <Configure hitsPerPage={12} />
        <PortalVirtualMenu />

        <ExpansionPanel expanded={open} onChange={this.togglePanel}>
          <ExpansionPanelSummary expandIcon={<SortIcon />}>
            <Typography>{open ? "Hide" : "Show"} Filters</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <SearchBox className={classes.filters} />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <DateMinMax searchState={this.props.searchState} />
              </Grid>
              <Grid item lg={4} md={12}>
                <ConnectedCheckBoxRefinementList
                  attribute="tags"
                  operator="and"
                  transformItems={items => {
                    return items.filter(item =>
                      visibleTagFilters.includes(item.label)
                    );
                  }}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <SearchResults />
      </InstantSearch>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SearchPage);
