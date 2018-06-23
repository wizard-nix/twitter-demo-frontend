import React from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Helmet from "react-helmet";
import ProfilePage from "./ProfilePage";

const App = () => (
  <div>
    <Helmet
      title="Twitter. It's what's happening."
      meta={[
        {
          name: "description",
          content:
            "From breaking news and entertainment to sports and politics, get the full story with all the live commentary."
        }
      ]}
    />
    <Router>
      <Switch>
        <Route path="/everyinteract" component={ProfilePage} />
        <Redirect from="/" to="/everyinteract" />
      </Switch>
    </Router>
  </div>
);

export default App;
