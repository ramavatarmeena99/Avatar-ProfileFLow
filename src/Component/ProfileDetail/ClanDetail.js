import React from 'react'
import { BiShareAlt } from 'react-icons/bi'
import { MdGroups } from 'react-icons/md'
import styled from 'styled-components'
export default function ClanDetail() {
  return (
    <ForClan>
    <ForClanImg>
    <ClanImage></ClanImage>

    </ForClanImg>
    <ClanTitleDiv >
      <ClanTitle>ATTACK ON TITAN</ClanTitle>
      <ClanSubTitle>All pubg players one co...</ClanSubTitle>
    </ClanTitleDiv>
    <ForShareOrGroupIcons>
    <ShareIconForClan >
<ShareButton>
<BiShareAlt/>

</ShareButton>


    </ShareIconForClan>
    <Group >
    
    <MdGroups/>
450
    </Group>
    </ForShareOrGroupIcons>


  </ForClan>
  )
}

const ForClan = styled.div`
width: 100%;
height: 15vh;
background-color: #161616;
border-radius: 5px;
display: flex;
flex-direction: row;
margin-top: 20px;
`;
const ForClanImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 10px;
`;
const ClanImage = styled.div`
width: 90px;
height: 90px;
border-radius: 50%;
background-color: green;
margin-right: 10px;
`;
const ClanTitleDiv = styled.div`
flex:1;
    height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding-left: 10px;
`;

const ClanTitle = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 19px;
`;


const ClanSubTitle = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 15px;
padding-top:5px;
`;
const ForShareOrGroupIcons = styled.div`
width: 25%;
height: 100%;
`;
const ShareIconForClan = styled.div`
width: 100%;
height: 50%;
font-size: 20px;
position: relative;
color:#3389E9;
`;
const ShareButton = styled.div`
position: absolute;
top: 10px;
right:10px ;   
`;

const Group = styled.div`
width: 100%;
height: 50%;
font-size: 20px;
position: relative;  
`;
