import * as React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.scss";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import SurveyForm from "./pages/NewSurveyForm/NewSurveyForm";
import SurveyDetails from "./pages/SurveyDetails/SurveyDetails";
import SurveyList from "./pages/ListSurveys/ListSurveys";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={SurveyList} />
        <PrivateRoute exact path="/new-survey" component={SurveyForm} />
        <PrivateRoute path="/survey/:surveyId" component={SurveyDetails} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
