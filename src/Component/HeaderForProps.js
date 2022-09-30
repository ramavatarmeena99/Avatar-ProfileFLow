import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { myUserId } from "../utils/helper";

export default function HeaderForProps({
  HeaderTitle,
  Back_Button,
  Dot_Icon,
  SaveButton,
}) {
  const { id } = useParams();

  const Navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () => {
    Navigate(`/editprofile/${id}`);

    handleClose();
  };

  return (
    <ProfileTab>
      <BackButton>{Back_Button}</BackButton>
      <ProfileFLowTitle>{HeaderTitle}</ProfileFLowTitle>

      {Dot_Icon && (
        <Button
          style={{
            color: "white",
            fontSize: "20px",
            paddingRight: "0px",
          }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {Dot_Icon}
        </Button>
      )}
      {SaveButton && (
        <div
          style={{
            backgroundColor: "transparent",
            color: "#50A3FF",
            fontSize: "16px",
            border: "none",
            paddingRight: "15px",
          }}
        >
          {SaveButton}
        </div>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "auto", backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        {+myUserId === +id && (
          <MenuItem onClick={handleRedirect}>Edit Profile</MenuItem>
        )}
        <MenuItem onClick={handleClose}>Share Profile</MenuItem>
        {+myUserId !== +id && (
          <MenuItem style={{color:"red"}} onClick={handleClose}>Blocked Users</MenuItem>
        )}
      </Menu>
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
  padding: 0px 0px;
  background-color: #272727;
`;
const BackButton = styled.p`
  font-size: 20px;
  padding-left: 15px;
`;
const ProfileFLowTitle = styled.p`
  font-size: 16px;
  font-weight: 400px;
  line-height: 19px;
  color: #fbfbfb;
`;
