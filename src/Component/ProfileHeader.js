import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader() {
  const Navigate = useNavigate();
  const backButton = () => {
    Navigate("/");
  };

  return (
    <ProfileTab>
      <BackButton>
        <BiArrowBack onClick={backButton} />
      </BackButton>
      <ProfileFLowTitle>Profile</ProfileFLowTitle>

      <SimpleMenu />
    </ProfileTab>
  );
}

const ProfileTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0px 10px;
  background-color: #272727;
`;
const BackButton = styled.p`
  font-size: 20px;
`;
const ProfileFLowTitle = styled.p`
  font-size: 16px;
  font-weight: 400px;
  line-height: 19px;
  color: #fbfbfb;
`;

export function SimpleMenu() {
  const Navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () => {
    Navigate("/editprofile/398478");

    handleClose();
  };

  return (
    <>
      <Button
        style={{
          color: "white",
          fontSize: "20px",
        }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "auto", backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <MenuItem onClick={handleRedirect}>Edit Profile</MenuItem>
        <MenuItem onClick={handleClose}>Share Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>Blocked Users</MenuItem> */}
      </Menu>
    </>
  );
}
