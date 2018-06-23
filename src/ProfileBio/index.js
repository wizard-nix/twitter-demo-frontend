import React from "react";
import styled from "styled-components";
import joined from "./icon-joined.svg";
import location from "./icon-location.svg";
import link from "./icon-link.svg";
import verified from "./verified.png";

const Wrapper = styled.div`
  margin-top: 42px;
`;

const User = styled.span`
  line-height: 22px;
  font-size: 22px;
  color: #14171a;
  margin-bottom: 0;
`;

const VerifiedIcon = styled.img`
  height: 18px;
  margin-left: 5px;
  margin-top: 1px;
`;

const Name = styled.span`
  line-height: 21px;
  font-size: 14px;
  color: #697787;
`;

const Status = styled.span`
  line-height: 12px;
  font-size: 12px;
  margin-left: 7.5px;
  color: #697787;
`;

const Location = styled.div`
  display: flex;
`;

const Bio = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #14171a;
  margin-top: 13px;
  margin-bottom: 11px;
  max-width: 240px;
`;

const Icon = styled.img`
  margin-right: 13px;
`;

const Url = styled.a`
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0.0107692px;
  color: #0072bb;
`;

const Text = styled.span`
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0.0107692px;
  color: #657786;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;

const Section = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

const Button = styled.button`
  border-radius: 100px;
  width: 128px;
  height: 39px;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  font-weight: bold;
  background: ${props => (props.primary ? "#1DA1F2" : "white")};
  color: ${props => (props.primary ? "white" : "#1DA1F2")};
  border: 2px solid #1da1f2;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 0 2.5px;
`;

const IconMenu = ({ image, children }) => <Icon alt={children} src={image} />;

const Verified = ({ image, children }) => (
  <VerifiedIcon alt={children} src={image} />
);

const bio = {
  name: "Every Interaction",
  user: "@EveryInteract",
  verified: true,
  image: verified,
  follow: "Follows you",
  text:
    "UX Design studio focused problem solving creativity. Design to us is how can we make things *work* amazing.",
  icolocation: location,
  location: "London, UK",
  icosite: link,
  site: "everyinteraction.com",
  to: "https://www.everyinteraction.com",
  icojoined: joined,
  joined: "Joined May 2008"
};

const ProfileBio = props => (
  <Wrapper>
    <Section>
      <User>{bio.name}</User>
      <Verified image={bio.image} />
    </Section>
    <Section>
      <Name>{bio.user}</Name>
      <Status>{bio.follow}</Status>
    </Section>
    <Bio>{bio.text}</Bio>
    <Section>
      <IconMenu image={bio.icolocation} />
      <Location>{bio.location}</Location>
    </Section>
    <Section>
      <IconMenu image={bio.icosite} />
      <Url to={bio.to}>{bio.site}</Url>
    </Section>
    <IconMenu image={bio.icojoined} />
    <Text>{bio.joined}</Text>
    <ButtonWrapper>
      <Button primary>Tweet to</Button>
      <Button primary>Message</Button>
    </ButtonWrapper>
  </Wrapper>
);

export default ProfileBio;
