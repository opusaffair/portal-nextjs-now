import { Fragment } from "react";
import { connectHits, Pagination } from "react-instantsearch-dom";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchResultGrid from "./SearchResultGrid";

const styles = theme => {};

const CustomHits = ({ hits, marginLeft, hasMore, refines }) => (
  <Fragment>
    <SearchResultGrid hits={hits} />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination />
    </div>
  </Fragment>
);

const Search = connectHits(CustomHits);

export default withStyles(styles, { withTheme: true })(Search);
