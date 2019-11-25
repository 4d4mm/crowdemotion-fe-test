export type SurveyAuthorResponseType = {
  name: string; 
  type: string;
  username: string;
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