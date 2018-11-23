import { withRouter } from "next/router";
import EventDetail from "../components/EventDetails";

const Events = ({
  router: {
    query: { slug }
  }
}) => <EventDetail slug={slug} />;

export default withRouter(Events);
