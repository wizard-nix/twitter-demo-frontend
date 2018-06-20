import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  padding-left: 16px;
`;

const Link = styled.a`
  line-height: 1;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  margin-right: 35px;
  color: ${props => (props.active ? '#14171a' : '#1da1f2')};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
`;

const NavProfile = () => {
  return (
    <Wrapper>
      <Link active>Tweets</Link>
      <Link>Tweets & replies</Link>
      <Link>Media</Link>
    </Wrapper>
  );
};

export default NavProfile;
