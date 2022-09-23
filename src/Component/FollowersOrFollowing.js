import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import FollowersOrFollowingPage from "./FollowingOrFollowingPage";
import ProfileHeader from "./ProfileHeader";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    flex: "1",
    width: "100%",
    height: "auto",
    backgroundColor: "#000000",
    color: "white",
  },
});

export default function FollowersOrFollowing(props) {
  const { type, id } = useParams();
  let _default = 0;
  if (type === "followers") {
    _default = 0;
  } else {
    _default = 1;
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(_default);
  const Navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    Navigate(
      `/followersorfollowing/${newValue === 0 ? "followers" : "following"}/${id}`
    );
  };

  return (
    <Profiletab>
      <ProfileHeader />
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          centered
          style={{
            width: "100%",
            height: "5vh",
            backgroundColor: "#161616",
            color: "red",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          <Tab label="FOLLOWERS " />
          <Tab label="FOLLOWING " />
        </Tabs>

        {value === 0 && <FollowersOrFollowingPage type="followers" />}
        {value === 1 && <FollowersOrFollowingPage type="following" />}
      </Paper>
    </Profiletab>
  );
}

const Profiletab = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
