// First, we need to add the Hits component to our import
import { Hits, Highlight } from "react-instantsearch-dom";
import Link from "next/link";

function Search() {
  return (
    <div className="container">
      <Hits
        hitComponent={Product}
        transformItems={items => orderBy(items, ["end_date"], ["asc"])}
      />
    </div>
  );
}

function Product({ hit }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <span className="hit-name">
        <Highlight attribute="title" hit={hit} />
        <div>
          <Link as={`/events/${hit.slug}`} href={`/events?slug=${hit.slug}`}>
            <a>{hit.slug}</a>
          </Link>
        </div>
      </span>
    </div>
  );
}
export default Search;
