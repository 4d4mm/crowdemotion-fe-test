import * as React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.scss";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import SurveyForm from "./pages/NewSurveyForm/NewSurveyForm";
import SurveyDetails from "./pages/SurveyDetails/SurveyDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={SurveyForm} />
        <PrivateRoute path="/survey/:surveyId" component={SurveyDetails} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
