import { Component } from "react";
import {
  InstantSearch,
  Stats,
  connectRange,
  Configure
} from "react-instantsearch-dom";
import Head from "next/head";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import SearchResults from "../components/SearchResults";
import PortalVirtualMenu from "../components/PortalVirtualMenu";

const VirtualDateMenu = connectRange(() => null);

class Index extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>Search Demo Upcoming</title>
        </Head>
        <InstantSearch
          appId={publicRuntimeConfig.ALGOLIA_APP_ID}
          apiKey={publicRuntimeConfig.ALGOLIA_API_KEY}
          indexName="events_end_date_asc"
        >
          <PortalVirtualMenu />
          <Configure hitsPerPage={4} />
          <VirtualDateMenu
            attribute="end_date"
            defaultRefinement={{ min: Date.now() / 1000 }}
            precision={0}
          />
          <SearchResults />
          <Stats />
        </InstantSearch>
      </div>
    );
  }
}

export default Index;
