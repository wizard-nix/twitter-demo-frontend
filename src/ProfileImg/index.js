import React from "react";
import styled from "styled-components";

const Img = `${process.env.PUBLIC_URL}/profile.jpg`;
const Avatar = `${process.env.PUBLIC_URL}/avatar.png`;

const Wrapper = styled.div`
  max-width: 1170px;
  position: relative;
  height: 100%;
  margin: 0 auto;
`;

const ProfileBg = styled.div`
  height: 380px;
  width: 100%;
  background: url(${Img}) no-repeat;
  background-size: cover;
`;

const ProfileAvatar = styled.img`
  cursor: pointer;
  bottom: -87px;
  left: 10px;
  position: absolute;
  transition: bottom 0.3s;
  z-index: 3;
`;

const ProfileImg = () => (
  <div>
    <ProfileBg src={Img}>
      <Wrapper>
        <ProfileAvatar src={Avatar} />
      </Wrapper>
    </ProfileBg>
  </div>
);

export default ProfileImg;
