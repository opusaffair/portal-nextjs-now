import { Fragment } from "react";
import { connectMenu } from "react-instantsearch-dom";
const VirtualMenu = connectMenu(() => null);

const PortalVirtualMenu = () => (
  <Fragment>
    <VirtualMenu attribute="tags" defaultRefinement="[StageSource] StagePage" />
  </Fragment>
);

export default PortalVirtualMenu;
