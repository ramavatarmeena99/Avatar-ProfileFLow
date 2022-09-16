import React from "react";
import ClanDetail from "./ClanDetail";
import Youtube from "../../Images/youtube.png";
import Instagram from "../../Images/instagram.png";
import Facebook from "../../Images/facebook.png";
import Discord from "../../Images/discord.png";
import Joined from "../../Images/JOINED.png";
import Hosted from "../../Images/Hosted.png";
import Earnings from "../../Images/Earnings.png";
import { useNavigate } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import styled from "styled-components";
export default function ProfileDetails() {
  const Navigate = useNavigate();
  const followers = () => {
    Navigate("/followersorfollowing/followers", {
      state: {
        id: 0,
      },
    });
  };
  const following = () => {
    Navigate("/followersorfollowing/following");
  };
  return (
    <ForProfileDetails>
      <ForUserProfile>
        <ForUserProfileImage>
          <UserProfileImage></UserProfileImage>
        </ForUserProfileImage>
        <ForUserNameOrDetails>
          <ForUserName>
            <p>Siireya</p>
          </ForUserName>
          <ForFollowingOrFollowers>
            <TotalFollowersOrFollowings onClick={followers}> 01 Followers</TotalFollowersOrFollowings>
            <TotalFollowersOrFollowings onClick={following}>22 Following</TotalFollowersOrFollowings>
          </ForFollowingOrFollowers>
        </ForUserNameOrDetails>
      </ForUserProfile>
      <p>Design Enthusiast, gamer, nft, crypto, stock, web3</p>
      <ForSocialMediaIcons>
        <div>
          <AllSocialMediaIcons
            src={Youtube}
            alt="youtube "
          ></AllSocialMediaIcons>
        </div>
        <div>
          <AllSocialMediaIcons
            src={Instagram}
            alt="instagram "
          ></AllSocialMediaIcons>
        </div>
        <div>
          <AllSocialMediaIcons
            src={Discord}
            alt="facebook "
          ></AllSocialMediaIcons>
        </div>
        <div>
          <AllSocialMediaIcons
            src={Facebook}
            alt="discord "
          ></AllSocialMediaIcons>
        </div>
      </ForSocialMediaIcons>
      <ForWin>
        <Join>
          <JoinHostOrEarningIcons src={Joined} alt="Joined "></JoinHostOrEarningIcons>
          <TotalJoin>100 Joined</TotalJoin>
        </Join>
        <Host>
          <JoinHostOrEarningIcons src={Hosted} alt="Hosted "></JoinHostOrEarningIcons>
          <TotalHosted>100 Hosted</TotalHosted>
        </Host>
        <Earning>
          <JoinHostOrEarningIcons src={Earnings} alt="earnings "></JoinHostOrEarningIcons>
          <TotalEarning>₹ 100 Earning</TotalEarning>
        </Earning>

        <ShareIcon>
          <BiShareAlt />
        </ShareIcon>
      </ForWin>
      <ClanDetail />
    </ForProfileDetails>
  );
}

const ForProfileDetails = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 10px;
`;

const ForUserProfile = styled.div`
  width: 100%;
  height: 20vh;
  // background-color: red;
  // background-color: transparent;
  display: flex;
  flex-direction: row;
`;
const ForUserProfileImage = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;
const UserProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: green;
`;
const ForUserNameOrDetails = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ForUserName = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-weight: 500;
font-size: 18px;
line-height: 21px;
  padding-left: 10px;
`;
const ForFollowingOrFollowers = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ForSocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -13px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Join = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Host = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Earning = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ForWin = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ShareIcon = styled.div`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #3389e9;
`;
const TotalEarning = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
  padding-top: 10px;
`;
const TotalHosted = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
  padding-top: 10px;
`;
const TotalJoin = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
  padding-top: 10px;
`;
const AllSocialMediaIcons = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 13px;
`;

const TotalFollowersOrFollowings = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
padding-left: 10px;
`;

const JoinHostOrEarningIcons = styled.img`
  width: 30px;
  height: 30px;

`;