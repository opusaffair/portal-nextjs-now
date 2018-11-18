import { withRouter } from "next/router";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import Loading from "../components/Loading";

export const EVENT_DETAIL_QUERY = gql`
  query eventDetail($slug: String!) {
    event(slug: $slug) {
      title
      image_url
      organizer_desc
      slug
    }
  }
`;

export default withRouter(
  class Events extends Component {
    render() {
      const variables = {
        slug: this.props.router.query.slug
      };
      return (
        <Fragment>
          <Query query={EVENT_DETAIL_QUERY} variables={variables}>
            {({ loading, error, data }) => {
              if (error) return <div>Errors</div>;
              if (loading) return <Loading />;
              const { event } = data;
              if (!event) return <div>No match</div>;
              return (
                <section>
                  <h1>{event.title}</h1>
                  <img
                    src={`${event.image_url}?w=620&h=350&fit=crop&crop=faces`}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${event.organizer_desc}`
                    }}
                  />
                  <div>
                    <a href={`https://www.opusaffair.com/events/${event.slug}`}>
                      Link to Opus listing
                    </a>
                  </div>
                </section>
              );
            }}
          </Query>
        </Fragment>
      );
    }
  }
);
