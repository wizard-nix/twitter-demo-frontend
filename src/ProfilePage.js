<<<<<<< HEAD
import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import ProfileImg from "./ProfileImg";
import ProfileStat from "./ProfileStat";
import ProfileBio from "./ProfileBio";
import Stream from "./Stream";
import ProfileSideBar from "./ProfileSideBar";
import TrendSideBar from "./TrendSideBar";
import CopyrightSideBar from "./CopyrightSideBar";
import RecFollow from "./RecFollow";
import Media from "./Media";
=======
import React from 'react';
import Helmet from 'react-helmet';
import Header from './components/Header';
import ProfileImg from './components/ProfileImg';
import ProfileStat from './components/ProfileStat';
import ProfileBio from './components/ProfileBio';
import Stream from './components/Stream';
import ProfileSideBar from './components/ProfileSideBar';
import TrendSideBar from './components/TrendSideBar';
import CopyrightSideBar from './components/CopyrightSideBar';
import RecFollow from './components/RecFollow';
import Media from './components/Media';
>>>>>>> 45e4609958819edfe7317606fc89e21197bc981b

const ProfilePage = () => (
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
    <Header />
    <ProfileImg />
    <ProfileStat />
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <ProfileBio />
          <RecFollow />
          <Media />
        </div>
        <div className="col-lg-6">
          <Stream />
        </div>
        <div className="col-lg-3">
          <ProfileSideBar />
          <TrendSideBar />
          <CopyrightSideBar />
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
