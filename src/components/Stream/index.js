import React from 'react';
import NavProfile from './NavProfile';
import styled from 'styled-components';

const Wrappper = styled.div`
  max-width: 100%;
  background: #fff;
  margin-top: 9px;
`;

const TweetList = () => {
  return (
    <Wrappper>
      <NavProfile />
    </Wrappper>
  );
};

export default TweetList;
