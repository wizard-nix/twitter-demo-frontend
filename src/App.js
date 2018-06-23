<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 45e4609958819edfe7317606fc89e21197bc981b
import {
  Route,
  Redirect,
  BrowserRouter as Router,
<<<<<<< HEAD
  Switch
} from "react-router-dom";
import Helmet from "react-helmet";
import ProfilePage from "./ProfilePage";
=======
  Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import ProfilePage from './ProfilePage';
>>>>>>> 45e4609958819edfe7317606fc89e21197bc981b

const App = () => (
  <div>
    <Helmet
      title="Every Interaction (@EveryInteract) on Twitter"
      meta={[
        {
<<<<<<< HEAD
          name: "description",
          content:
            "The latest Tweets from Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK"
        }
=======
          name: 'description',
          content: 'The latest Tweets from Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK',
        },
>>>>>>> 45e4609958819edfe7317606fc89e21197bc981b
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
