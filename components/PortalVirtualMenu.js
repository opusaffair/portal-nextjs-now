import { Fragment } from "react";
import { connectMenu } from "react-instantsearch-dom";
const VirtualMenu = connectMenu(() => null);

const PortalVirtualMenu = () => (
  <VirtualMenu attribute="tags" defaultRefinement="[StageSource] StagePage" />
);

export const visibleTagFilters = [
  "Early Music",
  "New Work / Premiere",
  "Holiday",
  "Shakespeare / Classical Theater",
  "Musical",
  "Opera",
  "[StageSource] Standing O"
];

export default PortalVirtualMenu;
