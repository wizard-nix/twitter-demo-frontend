import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const Img = styled.img`
  cursor: pointer;
`;

const Logo = () => <Img src={logo} alt="Logo Twitter" />;

export default Logo;
