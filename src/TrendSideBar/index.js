import React from "react";
import styled from "styled-components";

const Wrappper = styled.div`
  max-width: 100%;
  background: #fff;
  margin-top: 10px;
  padding-top: 18px;
  padding-left: 11px;
  padding-bottom: 47px;
`;

const Title = styled.span`
  line-height: 1;
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.active ? "#14171a" : "#1da1f2")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  text-decoration: none;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.a`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #1da1f2;
  text-decoration: none;
  ${Section}:hover & {
    text-decoration: underline;
  }
`;

const Sub = styled.span`
  line-height: 17px;
  font-size: 12px;
  color: #657786;
  font-weight: 200;
  margin-top: 4px;
`;

const trends = [
  {
    htag: "#BringYourDogToWorkDay",
    name: "",
    text: "",
    tweets: ""
  },
  {
    htag: "#FridayFeeling",
    name: "",
    text: "",
    tweets: "12.1K Tweets"
  },
  {
    htag: "#BrexitAnniversary",
    name: "",
    text: "It’s one year since the UK voted to leave the European Union",
    tweets: ""
  },
  {
    htag: "",
    name: "HMS Queen Elizabeth",
    text: "1,036 Tweets",
    tweets: ""
  },
  {
    htag: "",
    name: "Joe Budden",
    text: "1,036 Tweets",
    tweets: ""
  },
  {
    htag: "",
    name: "Trident",
    text: "6,136 Tweets",
    tweets: ""
  }
];

const TrendSideBar = () => (
  <Wrappper>
    <Title active>United Kingdom Trends</Title>
    <Dot>&bull;</Dot>
    <LinkButton>Change</LinkButton>
    {trends.map((trend, index) => (
      <Section>
        <Name>{trend.name || trend.htag}</Name>
        <Sub>{trend.text || trend.tweets}</Sub>
      </Section>
    ))}
  </Wrappper>
);

export default TrendSideBar;
