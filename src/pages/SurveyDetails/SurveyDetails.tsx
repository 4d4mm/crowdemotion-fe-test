import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../../templates/Layout/Layout";
import useJSONRequest from '../../hooks/useJSONRequest';
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import { SurveyResponseType } from '../../types/survey';
import SurveyDisplay from '../../components/SurveyDisplay/SurveyDisplay';

type TParams = { surveyId: string; }
const ListSurveys: React.SFC<RouteComponentProps<TParams>> = ({ match }) => {
  const [{ isLoading, error, data }] = useJSONRequest(`/surveys/${match.params.surveyId}`)
  const survey:SurveyResponseType = data && data.data;
  console.log(data, survey);
  return (
    <Layout>
      {isLoading && <LoadingIndicator />}
      {survey && <SurveyDisplay {...survey} />}
    </Layout>
  );
}

export default ListSurveys;
