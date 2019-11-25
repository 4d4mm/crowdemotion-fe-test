import * as React from "react";
import { mount } from "enzyme";
import NewSurveyForm from "./NewSurveyForm";

describe("NewSurveyForm", () => {
  it("renders NewSurveyForm", () => {
    const newSurveyForm = mount(<NewSurveyForm />);
    //expect(newSurveyForm).toMatchSnapshot();
  });
});
