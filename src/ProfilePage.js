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

const ProfilePage = () => (
  <div>
    <Helmet
      title="Every Interaction (@EveryInteract) on Twitter"
      meta={[
        {
          name: 'description',
          content: 'The latest Tweets from Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK',
        },
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
