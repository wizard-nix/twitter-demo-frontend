import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  padding-left: 16px;
`;

const Link = styled(NavLink)`
  line-height: 1;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  margin-right: 35px;
  color: ${props => (props.active ? "#14171a" : "#1da1f2")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  text-decoration: none;
`;

const NavProfile = () => {
  return (
    <Wrapper>
      <Link to="/" active>
        Tweets
      </Link>
      <Link to="/everyinteract/replies">Tweets & replies</Link>
      <Link to="/everyinteract/media">Media</Link>
    </Wrapper>
  );
};

export default NavProfile;
