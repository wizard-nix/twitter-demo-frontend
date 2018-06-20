import React from 'react';
import Helmet from 'react-helmet';
import Header from './components/Header';
import ProfileImg from './components/ProfileImg';
import ProfileStat from './components/ProfileStat';
import ProfileBio from './components/ProfileBio';
import Stream from './components/Stream';

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
    <ProfileBio />
  </div>
);

export default ProfilePage;
