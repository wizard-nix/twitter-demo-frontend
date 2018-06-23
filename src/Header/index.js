import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Search from "../Search";
import Logo from "../Logo";

const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <HeaderWrapper>
    <div className="container">
      <Wrap>
        <Nav />
        <Logo />
        <Search />
      </Wrap>
    </div>
  </HeaderWrapper>
);

export default Header;
