import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";
import useJSONRequest from '../../hooks/useJSONRequest';
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import SurveyListItem from '../../components/SurveyListItem/SurveyListItem';
import PageTitle from '../../components/PageTitle/PageTitle';
import { SurveyListItemResponseType } from '../../types/survey';

const ListSurveys: React.SFC = () => {
  const [{ isLoading, error, data }] = useJSONRequest('/surveys')
  const surveys:Array<SurveyListItemResponseType> = data && data.data || [];
  return (
    <Layout>
      <PageTitle title="Surveys">
        <Link to="/new-survey">
          <Button variant="primary">Create New Project</Button>
        </Link>
      </PageTitle>
      {isLoading && <LoadingIndicator />}
      {surveys.map(survey=> (<SurveyListItem {...survey}/>))}
    </Layout>
  );
}

export default ListSurveys;
