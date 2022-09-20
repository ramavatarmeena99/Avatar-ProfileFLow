import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AboutTab from "./AboutTabs/AboutTab";
import ReelsTab from "./ReelsTab";
import styled from "styled-components";
import MarketPlaceTab from "./MarketPlaceTab";


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      flex:"1",
width:"100%",
backgroundColor:"#161616",
color:"white"

    },
  });

export default function ProfileTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<Profiletab>
<Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        centered
      >
        <Tab label="ABOUT " />
        <Tab label="REELS " />
        <Tab label="MARKETPLACE " />
      </Tabs>
      {value=== 0 && <AboutTab/>}
      {value=== 1 && <ReelsTab/>}
      {value=== 2 && <MarketPlaceTab/>}

    </Paper>
</Profiletab>
  );
}

const Profiletab = styled.div`
    width:100%;
    height:auto;
  display: flex;
  flex-direction:column ;
  align-items:center;
  justify-content:space-between;
color:white;
    background-color:none;
    margin-top:20px;
  
`
