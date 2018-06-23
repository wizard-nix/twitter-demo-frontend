import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Name = styled.span`
  line-height: 18px;
  font-size: 13px;
  font-weight: 400;
  color: #718290;
  margin-right: 7px;
`;

const StyledLink = styled(Link)`
  margin-right: 7px;
  text-decoration: none;
  line-height: 18px;
  font-size: 13px;
  letter-spacing: -0.4px;
  font-weight: 400;
  color: #718290;
  &:hover {
    color: #0072bb;
    text-decoration: underline;
  }
`;

const Li = styled.li`
  list-style-type: none;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
`;

const Navigation = styled.nav`
  margin-top: 23px;
`;

const routes = [
  {
    path: "/about",
    to: "/about",
    main: "About"
  },
  {
    path: "/help",
    to: "/help-center",
    main: "Help Center"
  },
  {
    path: "/terms",
    to: "/terms",
    main: "Terms"
  },
  {
    path: "/privacy",
    to: "/privacy",
    main: "Privacy policy"
  },
  {
    path: "/cookies",
    to: "/cookies",
    main: "Cookies"
  },
  {
    path: "/ads-info",
    to: "/ads-info",
    main: "Ads info"
  }
];

const CopyrightSideBar = () => (
  <Router>
    <Navigation>
      <Ul>
        <Li>
          <Name>&copy; {new Date().getFullYear()} Twitter</Name>
        </Li>
        {routes.map((route, index) => (
          <Li>
            <StyledLink key={index} to={route.to}>
              {route.main}
            </StyledLink>
          </Li>
        ))}
      </Ul>
      {routes.map((route, index) => <Route key={index} path={route.path} />)}
    </Navigation>
  </Router>
);

export default CopyrightSideBar;
