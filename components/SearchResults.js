import { Fragment } from "react";
import { Highlight, connectInfiniteHits } from "react-instantsearch-dom";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Imgix from "react-imgix";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CustomHits = ({ hits, marginLeft, hasMore, refine }) => (
  <Fragment>
    <Grid container spacing={16}>
      {hits.map(hit => (
        <Grid item lg={3} md={6} sm={12} xs={12} key={hit.objectID}>
          <Link as={`/events/${hit.slug}`} href={`/events?slug=${hit.slug}`}>
            <a>
              <Card>
                <Imgix
                  src={`${hit.image_url}?w=620&h=350&fit=crop&crop=faces`}
                  sizes="calc(10% - 10px)"
                  imgixParams={{ ar: "16:9" }}
                />
                <style jsx>{`
                  img {
                    width: 100%;
                  }
                `}</style>
                <CardContent>
                  <Typography>
                    <Highlight attribute="title" hit={hit} />
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
    <div style={{ display: "flex", justifyContent: "center" }}>
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

export default Search;
