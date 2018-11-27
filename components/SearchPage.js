import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import {
  RefinementList,
  SearchBox,
  Configure,
  Pagination
} from "react-instantsearch-dom";
import PortalVirtualMenu, {
  visibleTagFilters
} from "../components/PortalVirtualMenu";
import { InstantSearch } from "./InstantSearch";
import SearchResults from "./SearchResults";
import DateMinMax from "./DateMinMax";

export default class extends React.Component {
  render() {
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
        <header>
          <SearchBox />
        </header>
        <content>
          <menu>
            <PortalVirtualMenu />
            <DateMinMax searchState={this.props.searchState} />
            <RefinementList
              attribute="tags"
              operator="and"
              transformItems={items => {
                return items.filter(item =>
                  visibleTagFilters.includes(item.label)
                );
              }}
            />
          </menu>
          <SearchResults />
        </content>
      </InstantSearch>
    );
  }
}
