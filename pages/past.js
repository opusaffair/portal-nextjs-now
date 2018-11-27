import { Component, Fragment } from "react";
import {
  InstantSearch,
  Stats,
  connectRange,
  Configure
} from "react-instantsearch-dom";
import Head from "next/head";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import InfiniteSearchResults from "../components/InfiniteSearchResults";
import PortalVirtualMenu from "../components/PortalVirtualMenu";

const VirtualDateMenu = connectRange(() => null);

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Search Demo Past</title>
        </Head>
        <InstantSearch
          appId={publicRuntimeConfig.ALGOLIA_APP_ID}
          apiKey={publicRuntimeConfig.ALGOLIA_API_KEY}
          indexName="events_end_date_desc"
        >
          <PortalVirtualMenu />
          <Configure hitsPerPage={8} />
          <VirtualDateMenu
            attribute="end_date"
            defaultRefinement={{ max: Date.now() / 1000 }}
            precision={0}
          />
          <InfiniteSearchResults />

          <Stats />
        </InstantSearch>
      </Fragment>
    );
  }
}

export default Index;
