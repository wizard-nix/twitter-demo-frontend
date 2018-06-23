import React from "react";
import styled from "styled-components";
import verified from "../ProfileBio/verified.png";
import peopleIcon from "./people-icon.svg";
import aiAvatar from "./ai.png";
import creodeAvatar from "./creode.png";
import epiphAvatar from "./epiphany.png";
import crossIcon from "./cross-icon.svg";

const Wrappper = styled.div`
  max-width: 100%;
  background: #fff;
  margin-top: 9px;
  padding-top: 18px;
  padding-left: 11px;
  padding-bottom: 17px;
`;

const FollowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 16px;
  padding-top: 11px;
`;

const Title = styled.span`
  line-height: 1;
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.active ? "#14171a" : "#1da1f2")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  text-decoration: none;
`;

const Link = styled.a`
  font-size: 12px;
  color: #1da1f2;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkButton = styled.button`
  font-size: 12px;
  color: #1da1f2;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Dot = styled.span`
  font-size: 10px;
  padding: 0 4px;
`;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 9px;
  &:hover {
    cursor: pointer;
  }
`;

const User = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #333333;
  font-weight: 700;
  margin-left: 2px;
  ${Section}:hover & {
    text-decoration: underline;
    color: #0072bb;
  }
`;

const VerifiedIcon = styled.img`
  height: 18px;
  margin-left: 5px;
  margin-top: 1px;
`;

const Verified = ({ image, children }) => (
  <VerifiedIcon alt={children} src={image} />
);

const Name = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #657786;
  font-weight: 200;
  ${Section}:hover & {
    text-decoration: underline;
    color: #0072bb;
  }
`;

const AvatarSection = styled.div`
  margin-right: 10px;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

const Avatar = ({ image, children }) => (
  <AvatarImage alt={children} src={image} />
);

const Button = styled.button`
  background: #fff;
  padding: 6px 22px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #1da1f2;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    background: #e5f0f8;
  }
`;

const CloseButton = styled.button`
  margin-right: 17px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: none;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

const Search = styled.div`
  margin-top: 23px;
`;

const Icon = styled.img`
  margin-right: 6px;
`;

const follows = [
  {
    name: "AppleInsider ",
    user: "@appleinsider",
    image: "",
    avatar: aiAvatar
  },
  {
    name: "Creode ",
    user: "@Creode",
    image: verified,
    avatar: creodeAvatar
  },
  {
    name: "Epiphany Search ",
    user: "@Epiph...",
    image: "",
    avatar: epiphAvatar
  }
];

const ProfileSideBar = () => (
  <Wrappper>
    <Title active>Who to follow</Title>
    <Dot>&bull;</Dot>
    <LinkButton>Refresh</LinkButton>
    <Dot>&bull;</Dot>
    <Link>View all</Link>
    {follows.map((follow, index) => (
      <FollowWrap>
        <AvatarSection>
          <Avatar image={follow.avatar} />
        </AvatarSection>
        <SectionWrap>
          <Section>
            <User>{follow.name}</User>
            <Verified image={follow.image} />
            <Name>{follow.user}</Name>
          </Section>
          <Button>Follow</Button>
        </SectionWrap>
        <CloseButton />
      </FollowWrap>
    ))}
    <Search>
      <Icon src={peopleIcon} />
      <LinkButton>Find people you know</LinkButton>
    </Search>
  </Wrappper>
);

export default ProfileSideBar;
