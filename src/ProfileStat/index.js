import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import more from "./icon-more.svg";

const Wrapper = styled.main`
  background: #fff;
  box-shadow: 0px 2px 2px #b0b8be;
  height: 59px;
`;

const Navigation = styled.span`
  padding-left: 25;
`;
const Info = ({ active, amount }) => <Value active={active}>{amount}</Value>;

const StyledLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 11.3px;
  padding-bottom: 3.3px;
  line-height: 21px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-bottom: ${props =>
    props.active ? "2px solid #1da1f2" : "2px solid #fff"};
  &:hover {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
  &.active {
    color: #1da1f2;
    border-bottom: 2px solid #1da1f2;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0;
  margin-top: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

const Button = styled.button`
  border-radius: 100px;
  width: 99px;
  height: 36px;
  color: #fff;
  font-style: Bold;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  font-weight: bold;
  margin-top: ${props => (props.primary ? "6px" : "12px")};
  background: ${props => (props.primary ? "#1DA1F2" : "white")};
  color: ${props => (props.primary ? "white" : "#1DA1F2")};
  border: 2px solid #1da1f2;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const More = styled.img`
  margin-left: 18px;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Label = styled.span`
  display: block;
  color: #657786;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.02em;
`;

const Value = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.active ? "#1da1f2" : "#66757f")};
  &:hover,
  &.active & {
    color: #1da1f2;
  }
`;

const routes = [
  {
    path: "/",
    exact: true,
    to: "/everyinteract",
    active: true,
    name: "Tweets",
    amount: "8058"
  },
  {
    path: "/",
    to: "/everyinteract/following",
    name: "Following",
    active: false,
    amount: "721"
  },
  {
    path: "/",
    to: "/everyinteract/followers",
    name: "Followers",
    amount: "1,815"
  },
  {
    path: "/",
    to: "/everyinteract/likes",
    name: "Likes",
    amount: "460"
  },
  {
    path: "/",
    to: "/everyinteract/lists",
    name: "Lists",
    amount: "2"
  }
];

const ProfileNav = () => (
  <Router>
    <div>
      <Wrapper>
        <div className="container">
          <div class="row center">
            <div class="col-xs-3" />
            <div class="col-xs-4">
              <Navigation>
                <Ul>
                  {routes.map((route, index) => (
                    <Li>
                      <StyledLink
                        key={index}
                        to={route.to}
                        active={route.active}
                      >
                        <Label>{route.name}</Label>
                        <Info active={route.active} amount={route.amount} />
                      </StyledLink>
                    </Li>
                  ))}
                </Ul>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} />
                ))}
              </Navigation>
            </div>
            <div class="col-xs-5 end-xs">
              <Button>Follow</Button>
              <More src={more} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  </Router>
);

export default ProfileNav;
