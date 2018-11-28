import { Fragment } from "react";
import { connectHits, Pagination } from "react-instantsearch-dom";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchResultGrid from "./SearchResultGrid";

const styles = theme => ({
  pagination: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    display: "flex",
    justifyContent: "center",
    "& .ais-Pagination": {
      fontFamily: theme.typography.fontFamily
    },
    "& .ais-Pagination--noRefinement": {},
    "& .ais-Pagination-list": {},
    "& .ais-Pagination-list--noRefinement": {},
    "& .ais-Pagination-item": {},
    "& .ais-Pagination-item--firstPage": {},
    "& .ais-Pagination-item--lastPage": {},
    "& .ais-Pagination-item--previousPage": {},
    "& .ais-Pagination-item--nextPage": {},
    "& .ais-Pagination-item--page": {},
    "& .ais-Pagination-item--selected": {},
    "& .ais-Pagination-item--disabled": {},
    "& .ais-Pagination-link": {
      color: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius
    },
    "& .ais-Pagination-link--selected": {
      backgroundColor: theme.palette.primary.main,
      border: "none"
    }
  }
});

const CustomHits = ({ hits, classes }) => (
  <Fragment>
    <SearchResultGrid hits={hits} />
    <div className={classes.pagination}>
      <Pagination />
    </div>
  </Fragment>
);

const Search = connectHits(CustomHits);

export default withStyles(styles, { withTheme: true })(Search);
