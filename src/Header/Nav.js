import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import home from "./home.svg";
import moments from "./moments.svg";
import messages from "./messages.svg";
import notifications from "./notifications.svg";

const Icon = styled.img`
  margin-right: 4px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.1px;
  color: #667580;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  height: 45px;
  &:hover {
    border-bottom: 1px solid #1da1f2;
    color: #1da1f2;
  }
  &.active {
    border-bottom: 1px solid #1da1f2;
    color: #1da1f2;
  }
`;

const Li = styled.li`
  list-style-type: none;
  margin-right: 14px;
  justify-content: space-between;
  &:hover {
    color: #1da1f2;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

const Navigation = styled.nav``;

const IconMenu = ({ image, children }) => <Icon alt={children} src={image} />;

const routes = [
  {
    path: "/",
    exact: true,
    to: "/everyinteract",
    main: "Home",
    image: home
  },
  {
    path: "/moments",
    to: "/moments",
    main: "Moments",
    image: moments
  },
  {
    path: "/notifications",
    to: "/notifications",
    main: "Notifications",
    image: messages
  },
  {
    path: "/messages",
    to: "/messages",
    main: "Messages",
    image: notifications
  }
];

const Nav = () => (
  <Router>
    <Navigation>
      <Ul>
        {routes.map((route, index) => (
          <Li>
            <StyledLink key={index} to={route.to}>
              <IconMenu image={route.image} />
              {route.main}
            </StyledLink>
          </Li>
        ))}
      </Ul>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} />
      ))}
    </Navigation>
  </Router>
);

export default Nav;
