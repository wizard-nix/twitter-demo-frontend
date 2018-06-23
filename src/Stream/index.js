import React from "react";
import NavProfile from "./NavProfile";
import Tweet from "./Tweet";
import styled from "styled-components";
import pinned from "./icon-pin.svg";

const posted = `${process.env.PUBLIC_URL}/img.png`;
const avatar = `${process.env.PUBLIC_URL}/avatar.png`;

const Wrappper = styled.div`
  max-width: 100%;
  background: #fff;
  margin-top: 9px;
`;

const Text = styled.p`
  margin-top: 0;
  > a {
    text-decoration: none;
    cursor: pointer;
    color: #1da1f2;
  }
`;

const tweets = [
  {
    avatar: avatar,
    pinned: "Pinned Tweet",
    name: "Every Interaction ",
    profileName: "@EveryInteract",
    image: posted,
    date: "2 Mar 2015",
    comments: "0",
    retweets: "17",
    likes: "47",
    bigFont: true,
    ico: pinned,
    text: (
      <Text
        dangerouslySetInnerHTML={{
          __html:
            'We’ve made some more resources for all you wonderful <a href="#">#design</a> folk <a href="https://www.everyinteraction.com/resources/">everyinteraction.com/resources/</a> <a href="#">#webdesign</a> <a href="#">#UI</a>'
        }}
      />
    )
  },
  {
    avatar: avatar,
    pinned: "",
    name: "Every Interaction ",
    profileName: "@EveryInteract",
    image: "",
    date: "2 Mar 2015",
    comments: "1",
    retweets: "4",
    likes: "2",
    bigFont: true,
    ico: "",
    text: (
      <Text
        dangerouslySetInnerHTML={{
          __html:
            'Our new website concept; Taking you from… @ Every Interaction <a href="https://www.instagram.com/p/BNFGrfhBP3M/">instagram.com/p/BNFGrfhBP3M/</a>'
        }}
      />
    )
  },
  {
    avatar: avatar,
    pinned: "",
    name: "Every Interaction ",
    profileName: "@EveryInteract",
    image: "",
    date: "2 Mar 2015",
    comments: "0",
    retweets: "0",
    likes: "0",
    bigFont: false,
    ico: "",
    text: (
      <Text
        dangerouslySetInnerHTML={{
          __html:
            'Variable web fonts are coming, and will open a world of opportunities for weight use online <a href="https://www.vilijamis.com">vilijamis.com</a>'
        }}
      />
    )
  }
];

const Stream = props => (
  <Wrappper>
    <NavProfile />
    {tweets.map((tweet, index) => (
      <Tweet
        name={tweet.name}
        profileName={tweet.profileName}
        pinned={tweet.pinned}
        date={tweet.date}
        ico={tweet.ico}
        avatar={tweet.avatar}
        bigFont={tweet.bigFont}
        text={tweet.text}
        image={tweet.image}
        comments={tweet.comments}
        retweets={tweet.retweets}
        likes={tweet.likes}
        link={tweet.link}
      />
    ))}
  </Wrappper>
);

export default Stream;
