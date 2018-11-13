import { Component, Fragment } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Pagination,
  SortBy,
  Stats,
  connectRange
} from "react-instantsearch-dom";
import Head from "next/head";
import SearchResults from "../components/SearchResults";
import PortalVirtualMenu from "../components/PortalVirtualMenu";
import Header from "../components/Header";

const visibleTagFilters = ["cocktails"];

const VirtualRangeFilter = connectRange(() => null);

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Head>
          <title>Search Demo</title>
        </Head>
        <InstantSearch
          appId="K5XOOFWQTZ"
          apiKey="efaacbb6018b2a0aca8e5090a1a41a24"
          indexName="events_end_date_asc"
        >
          <SearchBox />
          <SortBy
            defaultRefinement="events_end_date_asc"
            items={[
              { value: "events_end_date_asc", label: "Date Asc." },
              { value: "events_end_date_desc", label: "Date Desc." }
            ]}
          />
          <PortalVirtualMenu />
          <Stats />
          <RefinementList
            attribute="tags"
            operator="and"
            transformItems={items => {
              return items.filter(item =>
                visibleTagFilters.includes(item.label)
              );
            }}
          />
          <VirtualRangeFilter
            attribute="end_date"
            defaultRefinement={{ min: Date.now() / 1000 }}
            precision={0}
          />
          <SearchResults />
          <Pagination />
        </InstantSearch>
      </Fragment>
    );
  }
}

export default Index;
