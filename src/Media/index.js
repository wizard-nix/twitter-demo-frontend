import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import media from "./media.svg";

const file1 = `${process.env.PUBLIC_URL}/media/1.png`;
const file2 = `${process.env.PUBLIC_URL}/media/2.png`;
const file3 = `${process.env.PUBLIC_URL}/media/3.png`;
const file4 = `${process.env.PUBLIC_URL}/media/4.png`;
const file5 = `${process.env.PUBLIC_URL}/media/5.png`;
const file6 = `${process.env.PUBLIC_URL}/media/6.png`;

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

const File = styled.img`
  width: 83px;
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

const Files = ({ image, children }) => <File alt={children} src={image} />;

const routes = [
  {
    path: "/",
    to: "/",
    main: "",
    image: file1
  },
  {
    path: "/",
    to: "/",
    main: "",
    image: file2
  },
  {
    path: "/",
    to: "/",
    main: "",
    image: file3
  },
  {
    path: "/",
    to: "/",
    main: "",
    image: file4
  },
  {
    path: "/",
    to: "/",
    main: "",
    image: file5
  },
  {
    path: "/",
    to: "/",
    main: "",
    image: file6
  }
];

const Media = () => (
  <Router>
    <Wrapper>
      <Title>
        <Icon src={media} />
        <LinkButton active>522 Photos and videos</LinkButton>
      </Title>
      <Section>
        {routes.map((route, index) => (
          <StyledLink key={index} to={route.to}>
            <Files image={route.image} />
          </StyledLink>
        ))}
      </Section>
      {routes.map((route, index) => <Route key={index} path={route.path} />)}
    </Wrapper>
  </Router>
);

export default Media;
