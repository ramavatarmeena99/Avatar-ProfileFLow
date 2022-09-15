import React from "react";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
import ProfileDetails from "./ProfileDetail/ProfileDetails";
import ProfileTab from "./TabComponents/ProfileTab";
export default function Profile() {
  return (
    <ProfileH>
      <ProfileHeader />
      <ProfileDetails />
      <ProfileTab />
    </ProfileH>
  );
}

const ProfileH = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  // padding: 0px 10px;
  background-color: #000000;
  margin-bottom: 20px;
`;
