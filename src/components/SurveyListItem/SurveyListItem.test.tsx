import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import SurveyListItem from "./SurveyListItem";

describe("SurveyListItem", () => {
  it("renders Survey list item with default ui", () => {
    const renderedSurveyListItem = mount(
        <MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}>
            <SurveyListItem 
                {...{
                    "author": {
                        "name": "crowd_emotion_sample_api",
                        "type": "api",
                        "username": "crowd_emotion_sample_api"
                    },
                    "createdAt": "2019/11/07 21:12:02",
                    "extProjectId": "project001",
                    "jobNumber": "PO-1234",
                    "state": "PROVISIONED",
                    "stateLastUpdatedAt": "2019/11/07 21:12:01",
                    "title": "..",
                    "updatedAt": "2019/11/15 12:15:31"
                }}
            />
        </MemoryRouter>
    );
    expect(renderedSurveyListItem).toMatchSnapshot();
  });
});
