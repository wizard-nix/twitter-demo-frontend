import React from "react";
import styled from "styled-components";
import comments from "./icon-comments.svg";
import retweet from "./icon-retweet.svg";
import loves from "./icon-loves.svg";
import messages from "./messages.svg";

const TweetWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 17.5px;
  padding-bottom: 12px;
  border-top: 1px solid #e1e8ed;
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: ${props => (props.pinned ? "3px" : "10.6px")};
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding-top: 8px;
`;

const UserName = styled.span`
  line-height: 19px;
  font-weight: 500;
  font-size: 15px;
  color: #292f33;
`;

const ProfileName = styled.span`
  line-height: 19px;
  font-size: 13px;
  font-weight: 400;
  color: #697787;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  color: #292f33;
  margin-top: 0;
`;

const BigText = styled.p`
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;
  font-style: Light;
  text-align: left;
  color: #292f33;
  margin-top: 0;
  margin-bottom: 0;
`;

const Icon = styled.img`
  margin-right: 11px;
`;

const Pin = styled.img`
  margin-bottom: 9.6px;
`;

const Action = styled.div`
  display: flex;
`;

const ActionCount = styled.span`
  line-height: normal;
  font-size: 13px;
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
  font-weight: ${props => (props.liked ? "bold" : "normal")};
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  line-height: normal;
  font-size: 12px;
  letter-spacing: -0.175385px;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const PostedImage = styled.img`
  margin-right: 11px;
  margin-bottom: 14px;
  width: 495px;
`;

const Tweet = props => (
  <TweetWrap>
    <AvatarSection>
      <Pin src={props.ico} />
      <AvatarImage src={props.avatar} />
    </AvatarSection>
    <PostSection>
      <div>
        <Pinned>{props.pinned}</Pinned>
        <UserName>{props.name}</UserName>
        <ProfileName>{props.profileName}</ProfileName>
      </div>
      {props.bigFont && <BigText>{props.text}</BigText>}
      {!props.bigFont && <Text>{props.text}</Text>}
      <PostedImage src={props.image} />
      <ActionSection>
        <Action>
          <Icon src={comments} />
          <ActionCount>{props.comments}</ActionCount>
        </Action>
        <Action>
          <Icon src={retweet} />
          <ActionCount>{props.retweets}</ActionCount>
        </Action>
        <Action>
          <Icon src={loves} />
          <ActionCount>{props.likes}</ActionCount>
        </Action>
        <Action>
          <Icon src={messages} />
          <ActionCount>{props.messages}</ActionCount>
        </Action>
      </ActionSection>
    </PostSection>
  </TweetWrap>
);

export default Tweet;
