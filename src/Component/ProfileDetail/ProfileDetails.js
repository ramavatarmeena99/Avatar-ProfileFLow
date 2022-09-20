import React, { useEffect, useState } from "react";
import ClanDetail from "./ClanDetail";
import Youtube from "../../Images/youtube.png";
import Instagram from "../../Images/instagram.png";
import Facebook from "../../Images/facebook.png";
import Discord from "../../Images/discord.png";
import Joined from "../../Images/JOINED.png";
import Hosted from "../../Images/Hosted.png";
import Earnings from "../../Images/Earnings.png";
import { useNavigate, useParams } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import styled from "styled-components";
import { api2 } from "../../utils/handler";
export default function ProfileDetails() {
  const [detail, setDetail] = useState();
  const [followFollowingCount, setFollowFollowingCount] = useState();

  const { id } = useParams();

  const Navigate = useNavigate();
  const followers = () => {
    Navigate(`/followersorfollowing/followers/${id}`, {
      state: {
        id: 0,
      },
    });
  };
  const following = () => {
    Navigate(`/followersorfollowing/following/${id}`);
  };

  const getProfileDetails = async () => {
    const endpoint = `api/v1/esport/esport_game_contest/userProfile?id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data);

    if (res.data.success) {
      setDetail(res.data.results);
    } 
  };

  const getFollowFollowingCount = async () => {
    const endpoint = `api/v1/esport/followers/count?user_id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data);

    if (res.data.success) {
      setFollowFollowingCount(res.data.results);
    } else {
      alert(res.data.error.message);
    }
  };

  useEffect(() => {
    getProfileDetails();
    getFollowFollowingCount();
  }, []);
  return (
    <ForProfileDetails>
      <ForUserProfile>
        <ForUserProfileImage>
          <UserProfileImage src={detail?.userDetails.mobile_profile_pic_url
}></UserProfileImage>
        </ForUserProfileImage>
        <ForUserNameOrDetails>
          <ForUserName>
            <p>{detail?.userDetails.platformusername}</p>
          </ForUserName>
          <ForFollowingOrFollowers>
            <TotalFollowersOrFollowings onClick={followers}>
              {followFollowingCount?.followersCount}
                Followers
            </TotalFollowersOrFollowings>
            <TotalFollowersOrFollowings onClick={following}>
              {followFollowingCount?.followingCount}
                Following
            </TotalFollowersOrFollowings>
          </ForFollowingOrFollowers>
        </ForUserNameOrDetails>
      </ForUserProfile>
      <p>{detail?.userDetails.description}</p>
      <ForSocialMediaIcons>
        <div>
          <a href={detail?.userDetails.youtube}>
            <AllSocialMediaIcons
              src={Youtube}
              alt="youtube "
            ></AllSocialMediaIcons>
          </a>
        </div>
        <div>
          <a href={detail?.userDetails.instagram}>
            <AllSocialMediaIcons
              src={Instagram}
              alt="instagram "
            ></AllSocialMediaIcons>
          </a>
        </div>
        <div>
          <a href={detail?.userDetails.discord}>
            <AllSocialMediaIcons
              src={Discord}
              alt="facebook "
            ></AllSocialMediaIcons>
          </a>
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
          <JoinHostOrEarningIcons
            src={Joined}
            alt="Joined "
          ></JoinHostOrEarningIcons>
          <TotalJoin>{detail?.total_tournament_played} Joined</TotalJoin>
        </Join>
        <Host>
          <JoinHostOrEarningIcons
            src={Hosted}
            alt="Hosted "
          ></JoinHostOrEarningIcons>
          <TotalHosted>{detail?.total_tournament_hosted} Hosted</TotalHosted>
        </Host>
        <Earning>
          <JoinHostOrEarningIcons
            src={Earnings}
            alt="earnings "
          ></JoinHostOrEarningIcons>
          <TotalEarning>
            ₹ {detail?.total_prize_money / 100} Earning
          </TotalEarning>
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
const UserProfileImage = styled.img`
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
