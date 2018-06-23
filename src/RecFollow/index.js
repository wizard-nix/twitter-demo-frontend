import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import followers from "./followers.svg";

const avatar1 = `${process.env.PUBLIC_URL}/follow/1.png`;
const avatar2 = `${process.env.PUBLIC_URL}/follow/2.png`;
const avatar3 = `${process.env.PUBLIC_URL}/follow/3.png`;
const avatar4 = `${process.env.PUBLIC_URL}/follow/4.png`;
const avatar5 = `${process.env.PUBLIC_URL}/follow/5.png`;
const avatar6 = `${process.env.PUBLIC_URL}/follow/6.png`;

const Icon = styled.img`
  margin-right: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const StyledLink = styled(Link)`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Avatar = styled.img`
  width: 48px;
`;

const Wrapper = styled.div`
  margin-top: 18px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2px;
  margin-top: 8px;
  justify-content: space-between;
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

const Avatars = ({ image, children }) => <Avatar alt={children} src={image} />;

const routes = [
  {
    path: "/",
    to: "/",
    image: avatar1
  },
  {
    path: "/",
    to: "/",
    image: avatar2
  },
  {
    path: "/",
    to: "/",
    image: avatar3
  },
  {
    path: "/",
    to: "/",
    image: avatar4
  },
  {
    path: "/",
    to: "/",
    image: avatar5
  },
  {
    path: "/",
    to: "/",
    image: avatar6
  }
];

const CopyrightSideBar = () => (
  <Router>
    <Wrapper>
      <Title>
        <Icon src={followers} />
        <LinkButton active>6 Followers you know</LinkButton>
      </Title>
      <Section>
        {routes.map((route, index) => (
          <StyledLink key={index} to={route.to}>
            <Avatars image={route.image} />
          </StyledLink>
        ))}
      </Section>
      {routes.map((route, index) => <Route key={index} path={route.path} />)}
    </Wrapper>
  </Router>
);

export default CopyrightSideBar;
