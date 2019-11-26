import React from 'react';
import renderer from 'react-test-renderer';
import SurveyDisplay from './SurveyDisplay'
import { MemoryRouter, Route } from "react-router-dom";

const SurveyDisplayTester = () =>  (
    <SurveyDisplay
    {...{
        "author": {
        "name": "crowd_emotion_sample_api",
        "type": "api",
        "username": "crowd_emotion_sample_api"
        },
        "category": {
        "surveyTopic": [
            "AUTOMOTIVE",
            "BUSINESS"
        ]
        },
        "createdAt": "2019/11/07 21:12:02",
        "devices": [
        "mobile",
        "desktop",
        "tablet"
        ],
        "exclusions": {
        "list": [],
        "type": ""
        },
        "extProjectId": "project001",
        "jobNumber": "PO-1234",
        "lineItems": [
        {
            "countryISOCode": "US",
            "createdAt": "2019/11/07 21:12:02",
            "daysInField": 20,
            "deliveryType": "BALANCED",
            "endLinks": {
            "complete": "https://api.uat.pe.dynata.com/respondent/exit?rst=1&psid={psid}&med={calculatedSecurityCode}",
            "overquota": "https://api.uat.pe.dynata.com/respondent/exit?rst=3&psid={psid}",
            "screenout": "https://api.uat.pe.dynata.com/respondent/exit?rst=2&psid={psid}",
            "securityKey1": "93896",
            "securityKey2": "42614",
            "securityLevel": "MEDIUM"
            },
            "extLineItemId": "lineItem001",
            "indicativeIncidence": 20,
            "languageISOCode": "en",
            "launchedAt": "",
            "lengthOfInterview": 10,
            "quotaPlan": {
            "filters": [
                {
                "attributeId": "11",
                "operator": "INCLUDE",
                "options": [
                    "2"
                ]
                }
            ]
            },
            "requiredCompletes": 800,
            "sources": [
            {
                "id": 100
            }
            ],
            "state": "PROVISIONED",
            "stateLastUpdatedAt": "2019/11/07 21:12:02",
            "surveyTestURL": "www.mysurvey.com/test/survey?pid=<#DubKnowledge[1500/Entity id]>&k2=<#Project[Secure Key 2]>&psid=<#IdParameter[Value]>",
            "surveyURL": "www.mysurvey.com/live/survey?pid=<#DubKnowledge[1500/Entity id]>&k2=<#Project[Secure Key 2]>&psid=<#IdParameter[Value]>",
            "targets": [
            {
                "count": 800,
                "dailyLimit": 0,
                "softLaunch": 0,
                "type": "COMPLETE"
            }
            ],
            "title": "US College",
            "updatedAt": "2019/11/15 12:15:31"
        }
        ],
        "notificationEmails": [
        "api-test@dynata.com"
        ],
        "state": "PROVISIONED",
        "stateLastUpdatedAt": "2019/11/07 21:12:01",
        "title": "..",
        "updatedAt": "2019/11/15 12:15:31"
    }}
    />
);

describe('SurveyDisplay', () => {
    it('renders demo survey', () => {
        const renderedSurveyDisplay = renderer.create(
            <MemoryRouter keyLength={0} initialEntries={[{pathname: '/'}]}>
                <Route path="/" component={SurveyDisplayTester} />
            </MemoryRouter>
        ).toJSON();
        expect(renderedSurveyDisplay).toMatchSnapshot();
    
    })    
})