import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "../../containers/PrivateRoute/PrivateRoute";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SurveyForm from "../../pages/NewSurveyForm/NewSurveyForm";
import SurveyDetails from "../../pages/SurveyDetails/SurveyDetails";
import SurveyList from "../../pages/ListSurveys/ListSurveys";

type AppProps = {
    router?: React.ComponentType
}

const App:React.SFC<AppProps> = ({ router:Router = BrowserRouter }) => (
    <div className="App">
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={SurveyList} />
        <PrivateRoute exact path="/new-survey" component={SurveyForm} />
        <PrivateRoute exact path="/surveys/:surveyId" component={SurveyDetails} />
      </Router>
    </div>
);

export default App;