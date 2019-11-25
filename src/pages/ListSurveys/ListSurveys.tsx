import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";
import useGetJSON from '../../hooks/useGetJSON';
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import SurveyListItem from '../../components/SurveyListItem/SurveyListItem';
import { SurveyListItemResponseType } from '../../types/survey'
const ListSurveys: React.SFC = () => {
  const { isLoading, error, data } = useGetJSON('/surveys')
  const surveys:Array<SurveyListItemResponseType> = data && data.data || [];
  
  return (
    <Layout>
      <Typography component="h1" variant="h3">
        Surveys
      </Typography>
      <Link to="/new-survey">
        <Button variant="primary">Create New Project</Button>
      </Link>
      {isLoading && <LoadingIndicator />}
      {surveys.map(survey=> (<SurveyListItem {...survey}/>))}
    </Layout>
  );
}

export default ListSurveys;
