/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Header from "../components/Header";
import EventDetail from "../components/EventDetails";

describe("With Snapshot Testing", () => {
  it("Header renders", () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  //   it("EventDetail renders", () => {
  //     const component = renderer.create(
  //       <EventDetail slug="boston-youth-symphony-orchestra-la-boheme" />
  //     );
  //     const tree = component.toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
