import { Component } from "react";

import {
  InstantSearch,
  SearchBox,
  RefinementList,
  connectMenu,
  Pagination,
  SortBy
} from "react-instantsearch-dom";
import SearchResults from "../components/SearchResults";

const VirtualMenu = connectMenu(() => null);

class Index extends Component {
  render() {
    return (
      <div>
        <InstantSearch
          appId="K5XOOFWQTZ"
          apiKey="efaacbb6018b2a0aca8e5090a1a41a24"
          indexName="events"
        >
          <SearchBox />
          <SortBy
            defaultRefinement="events"
            items={[
              { value: "events_end_date_asc", label: "Date Asc." },
              { value: "events_end_date_desc", label: "Date Desc." }
            ]}
          />
          <VirtualMenu
            attribute="tags"
            defaultRefinement="Boston Opera Calendar"
          />
          <RefinementList attribute="tags" />
          <SearchResults />
          <Pagination />
        </InstantSearch>
      </div>
    );
  }
}

export default Index;
