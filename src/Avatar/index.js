import React from "react";
import styled from "styled-components";

const avatar = `${process.env.PUBLIC_URL}/avatar.png`;

const Img = styled.img`
  height: 26px;
  margin: 0 5px;
  cursor: pointer;
`;

const Avatar = props => <Img src={avatar} alt="Avatar" />;

export default Avatar;
