import { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  SortBy,
  Stats
} from "react-instantsearch-dom";
import Head from "next/head";
import SearchResults from "../components/SearchResults";
import PortalVirtualMenu from "../components/PortalVirtualMenu";
import { withStyles } from "@material-ui/core/styles";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import DateFilter from "../components/DateFilter";
import { todayPlusDays, dateToUnixTs } from "../lib/date-helpers";

const visibleTagFilters = [
  "Early Music",
  "New Work / Premiere",
  "Holiday",
  "Shakespeare / Classical Theater",
  "Musical",
  "Opera"
];

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Index extends Component {
  state = {
    dateMin: dateToUnixTs(todayPlusDays()),
    dateMax: dateToUnixTs(todayPlusDays(30))
  };
  handleDateRangeChange = (name, value) => {
    console.table({ name, value });
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="container">
        <Head>
          <title>Search Demo</title>
        </Head>
        <InstantSearch
          appId={publicRuntimeConfig.ALGOLIA_APP_ID}
          apiKey={publicRuntimeConfig.ALGOLIA_API_KEY}
          indexName="events_end_date_asc"
        >
          <SearchBox />
          <DateFilter
            attribute="end_date"
            name="dateMin"
            label="Start Date"
            id="startDate"
            min={this.state.dateMin}
            timestamp={this.state.dateMin}
            handleDateChange={this.handleDateRangeChange}
          />
          <DateFilter
            attribute="start_date"
            name="dateMax"
            label="End Date"
            id="endDate"
            max={this.state.dateMax}
            timestamp={this.state.dateMax}
            handleDateChange={this.handleDateRangeChange}
          />
          <SortBy
            defaultRefinement="events_end_date_asc"
            items={[
              { value: "events_end_date_asc", label: "Date Asc." },
              { value: "events_end_date_desc", label: "Date Desc." }
            ]}
          />
          <PortalVirtualMenu />
          <RefinementList
            attribute="tags"
            operator="and"
            transformItems={items => {
              return items.filter(item =>
                visibleTagFilters.includes(item.label)
              );
            }}
          />
          <SearchResults />
          <Stats />
        </InstantSearch>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);
