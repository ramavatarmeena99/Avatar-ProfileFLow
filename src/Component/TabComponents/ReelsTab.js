import React, { useEffect, useState } from "react";
import YamahaBike from "../../Images/YamahaBike.jpeg";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";

import { Menu, MenuItem } from "@material-ui/core";
import { api2 } from "../../utils/handler";
import { useParams } from "react-router-dom";
export default function ReelsTab() {
  const [reels, setReels] = useState([]);

  const { id } = useParams();

  const getReels = async () => {
    let endpoint = `api/v1/esport/content/contentByUser?user_id=${id}`;
    const res = await api2("get", {}, endpoint);

    console.log(res.data);

    if (res.data.success) {
      setReels(res.data.results.content);
    }
  };

  useEffect(() => {
    getReels();
  }, []);
  return (
    <Reels>
      {reels?.length > 0 &&
        reels.map((item, index) => {
          return (
            <>
              <ReelsVideo>
                <ReelsVideoThumbnail
                  src={item.thumbnail}
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
      <TotalViews>
        <BsFillPlayFill />
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
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  bottom: 0px;
  left: 0px;
`;

const ReelsEdit = styled.div`
  color: black;
  font-size: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
`;
