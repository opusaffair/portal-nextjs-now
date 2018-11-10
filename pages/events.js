import { withRouter } from "next/router";

const Events = withRouter(props => <div>Events {props.router.query.slug}</div>);

export default Events;
