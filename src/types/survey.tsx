export type SurveyAuthorResponseType = {
  name: string; 
  type: string;
  username: string;
}

export type SurveyCategory = {
    surveyTopic: Array<string>;
}

export type SurveyExclusions = {
    list: Array<any>;
    type: string;
}

export type SurveyListItemResponseType = {
  author: SurveyAuthorResponseType;
  createdAt: string;
  extProjectId: string;
  jobNumber: string;
  state: string;
  stateLastUpdatedAt: string;
  title: string;
  updatedAt: string;
}

export type SurveyEndlink = {
    complete: string;
    overquota: string;
    screenout: string;
    securityKey1: string;
    securityKey2: string;
    securityLevel: string;
}
export type SurveyQuotaPlanItem = {
    attributeId: string;
    operator: string;
    options: Array<string>;
} 
export type SurveyQuotaPlan = {
    filters: Array<SurveyQuotaPlanItem>;
}

export type SurveySource = {
    id: number
}

export type SurveyTarget = {
    count: number;
    dailyLimit: number;
    softLaunch: number;
    type: string;
}

export type SurveyLineItem = {
    countryISOCode: string;
    createdAt: string;
    daysInField: number;
    deliveryType: string;
    endLinks: Array<SurveyEndlink>,
    extLineItemId: string;
    indicativeIncidence: number;
    languageISOCode: string;
    launchedAt: string;
    lengthOfInterview: string;
    
    quotaPlan: SurveyQuotaPlan;
    requiredCompletes: number;
    sources: Array<SurveySource>;
    state: string;
    stateLastUpdatedAt: string;
    surveyTestURL: string;
    surveyURL: string;
    targets: Array<SurveyTarget>,
    title: string;
    updatedAt: string;
}

export type SurveyResponseType = {
    author: SurveyAuthorResponseType;
    category: SurveyCategory;
    createdAt: string;
    devices: Array<string>;
    exclusions: SurveyExclusions;
    extProjectId: string;
    jobNumber: string;
    lineItems: Array<SurveyLineItem>;
    notificationEmails: Array<string>,
    state: string;
    stateLastUpdatedAt: string;
    title: string;
    updatedAt: string;
}
