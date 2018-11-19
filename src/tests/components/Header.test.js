import React from "react";
import { shallow } from "enzyme";
// import ToJson from "enzyme-to-json"; => already imported in jest.config.json
import Header from "../../components/Header";

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);

  expect(ToJson(wrapper)).toMatchSnapshot();

  // expect(ToJson(wrapper)).toMatchSnapshot(); => The usage of we dont want to set it up in jest.config.json
  // expect(wrapper.find("h1").text()).toBe("BudgetApp"); => example of how we can use enzyme
  // More informations https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
});
