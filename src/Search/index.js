import React from "react";
import styled from "styled-components";
import magnifier from "./magnifier.svg";
import Avatar from "../Avatar";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  background: #f5f8fa;
  background: url(${magnifier}) no-repeat;
  background-position: 193px 6px;
  border: 1px solid #e6ecf0;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: #687b8a;
  width: 220px;
  padding: 8px 0 8px 11px;
`;

const Search = props => (
  <Wrapper>
    <Input placeholder="Search Twitter" />
    <Avatar />
    <Button>Tweet</Button>
  </Wrapper>
);

export default Search;
