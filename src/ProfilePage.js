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

const ProfilePage = () => (
  <div>
    <Helmet
      title="Every Interaction (@EveryInteract) on Twitter"
      meta={[
        {
          name: "description",
          content: "The latest Tweets from Every Interaction (@EveryInteract)."
        }
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
