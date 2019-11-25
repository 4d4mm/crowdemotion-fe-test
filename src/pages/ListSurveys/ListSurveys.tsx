import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";

const ListSurveys: React.SFC = () => (
  <Layout>
    <Typography component="h1" variant="h3">
      Surveys
    </Typography>
    <Link to="/new-survey">
      <Button variant="primary">Create New Project</Button>
    </Link>
  </Layout>
);

export default ListSurveys;
