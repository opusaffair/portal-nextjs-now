import { Query } from "react-apollo";
import gql from "graphql-tag";

export const EVENT_DETAIL_QUERY = gql`
  query eventDetail($slug: String!) {
    event(slug: $slug) {
      title
      image_url
      organizer_desc
    }
  }
`;

export default function EventDetail(props) {
  return (
    <Query query={EVENT_DETAIL_QUERY} variables={props}>
      {({ loading, error, data }) => {
        if (error) return <div>Errors</div>;
        if (loading) return <div>Loading</div>;
        const { event } = data;
        if (!event) return <div>No match</div>;
        return (
          <section>
            <h1>{event.title}</h1>
            <img src={`${event.image_url}?w=620&h=350&fit=crop&crop=faces`} />
            <div
              dangerouslySetInnerHTML={{
                __html: `${event.organizer_desc}`
              }}
            />
          </section>
        );
      }}
    </Query>
  );
}
