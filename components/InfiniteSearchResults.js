import { Fragment } from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchResultGrid from "./SearchResultGrid";
import BottomScrollListener from "react-bottom-scroll-listener";

const styles = theme => {};

const CustomHits = ({ hits, marginLeft, hasMore, refine }) => (
  <Fragment>
    <SearchResultGrid hits={hits} />
    <br />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <BottomScrollListener
        onBottom={() => {
          if (hasMore) {
            refine();
          }
        }}
      />
      <Button
        onClick={() => {
          if (hasMore) {
            refine();
          }
        }}
        disabled={!hasMore}
        variant="contained"
        color="primary"
        style={{ alignSelf: "center", marginLeft, marginBottom: 10 }}
      >
        Load More
      </Button>
    </div>
  </Fragment>
);

const Search = connectInfiniteHits(CustomHits);

export default withStyles(styles, { withTheme: true })(Search);
