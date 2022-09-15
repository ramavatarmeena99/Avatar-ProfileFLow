import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader() {
  const Navigate = useNavigate()
  const backButton = ()=>{
   Navigate("/") 
  }

  return (
    <ProfileTab>
      <BackButton>
        <BiArrowBack onClick={backButton} />
      </BackButton>
      <p>Profile</p>
      <BackButton>
      <SimpleMenu/>

      </BackButton>
    
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
const BackButton = styled.div`
  font-size: 20px;
`;





export  function SimpleMenu() {
 const Navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    Navigate("/editprofile")

    setAnchorEl(null);

  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <BiDotsVerticalRounded/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
        <MenuItem onClick={handleClose}>Share Profile</MenuItem>
        <MenuItem onClick={handleClose}>Blocked Users</MenuItem>
      </Menu>
    </div>
  );
}
