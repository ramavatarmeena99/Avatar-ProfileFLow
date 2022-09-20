import React from "react";
import YamahaBike from "../../Images/YamahaBike.jpeg";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

import { Menu, MenuItem } from "@material-ui/core";
export default function MarketPlaceTab() {
  return (
    <Reels>
      {Array(21)
        .fill(null)
        .map(() => {
          return (
            <>
              <ReelsVideo>
                <ReelsVideoThumbnail
                  
                  src={YamahaBike}
                  alt="Reels"
                ></ReelsVideoThumbnail>
                <ReelsMenu />
              </ReelsVideo>
            </>
          );
        })}
    </Reels>
  );
}

const Reels = styled.div`
  width: 100%;
  height: auto;
  color: red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 20px;
  background-color: #000000;
`;

const ReelsVideo = styled.div`
  flex: 1;
  flex-basis: 120px;
  height: 168px;
  margin: 1px 1px;
  position: relative;
`;
const ReelsVideoThumbnail = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


export function ReelsMenu() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () => {
    handleClose();
  };

  return (
    <>
      <ReelsEdit
     
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded />
      </ReelsEdit>
      <TotalViews 
    
      >
        <BsFillPlayFill/>
        100
      </TotalViews>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleRedirect}>Edit </MenuItem>
        <MenuItem onClick={handleClose}>Share Reel</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
}

const TotalViews = styled.div`
color: black;
position:absolute;
display:flex;
flex-direction:row;
align-items:center;
font-size:15px;
bottom: 0px;
left: 0px;
`;

const ReelsEdit = styled.div`
color: black;
font-size: 20px;
position: absolute;
top: 0px;
right:0px;
`;