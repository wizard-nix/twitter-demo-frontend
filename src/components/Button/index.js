import React from 'react';
import styled from 'styled-components';

const TwButton = styled.button`
  font-size: 14px;
  color: #fff;
  background: #1da1f2;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  border-radius:100px;
width:72px;
height: 32px;
color: #fff;
font-style: Bold;
`;

const Button = props => <TwButton>Tweet</TwButton>;

export default Button;
