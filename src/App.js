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
      title="Every Interaction (@EveryInteract) on Twitter"
      meta={[
        {
          name: "description",
          content:
            "The latest Tweets from Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK"
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
