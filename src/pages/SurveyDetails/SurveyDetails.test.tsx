import * as React from "react";
import { mount } from "enzyme";
import SurveyDetails from "./SurveyDetails";

describe("SurveyDetails", () => {
  it("renders SurveyDetails", () => {
    const surveyDetails = mount(<SurveyDetails />);
    //expect(surveyDetails).toMatchSnapshot();
  });
});
