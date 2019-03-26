import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { Configure, SortBy } from "react-instantsearch-dom";
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
import InfiniteSearchResults from "./InfiniteSearchResults";
import DateMinMax from "./DateMinMax";
import SearchBox from "./SearchBox";

const styles = theme => ({
  panel: {
    "& input": {
      height: theme.spacing.unit * 3
    }
  },
  img: {
    height: "auto",
    width: "100%"
  }
});

class SearchPage extends React.Component {
  state = { open: false, sortByEndDate: true };
  togglePanel = () => {
    this.setState({ open: !this.state.open });
  };
  toggleSort = () => {
    this.setState({ sortByEndDate: !this.statet.sortByEndDate });
  };
  render() {
    const { classes, theme } = this.props;
    const { open, sortByEndDate } = this.state;
    const image1 = `https://res.cloudinary.com/opusaffair/image/upload/c_fill,dpr_auto,f_auto,g_faces:auto,h_250,w_1264/v1546881962/StagePage/stagepage-banner1.jpg`;
    return (
      <InstantSearch
        appId={publicRuntimeConfig.ALGOLIA_APP_ID}
        apiKey={publicRuntimeConfig.ALGOLIA_API_KEY}
        indexName={"events_end_date_asc"}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
      >
        <Configure hitsPerPage={12} />
        <PortalVirtualMenu />
        <h1 hidden>
          StagePage: StageSource's calendar of theater in New England
        </h1>
        <ExpansionPanel expanded={open} onChange={this.togglePanel}>
          <ExpansionPanelSummary expandIcon={<SortIcon />}>
            <Typography>{open ? "Hide" : "Show"} Filters</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panel}>
            <Grid container>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <SearchBox />
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <DateMinMax searchState={this.props.searchState} />
              </Grid>
              <Grid item lg={4} md={12}>
                <Typography>
                  Sort by:{" "}
                  <SortBy
                    defaultRefinement="events_end_date_asc"
                    items={[
                      { value: "events_end_date_asc", label: "End Date" },
                      { value: "events_start_date_asc", label: "Start Date" }
                    ]}
                  />
                </Typography>

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
        <InfiniteSearchResults />
        {/* <Typography>Banner photo credit: American Repertory Theater</Typography> */}
      </InstantSearch>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SearchPage);
