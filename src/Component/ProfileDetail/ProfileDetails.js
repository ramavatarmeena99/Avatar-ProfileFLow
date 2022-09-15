import React from "react";
import ClanDetail from "./ClanDetail";
import Youtube from "../../Images/youtube.png"
import Instagram from "../../Images/instagram.png"
import Facebook from "../../Images/facebook.png"
import Discord from "../../Images/discord.png"
import Joined from "../../Images/JOINED.png"
import Hosted from "../../Images/Hosted.png"
import Earnings from "../../Images/Earnings.png"
import Style from "./index.module.css"
import { useNavigate } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
export default function ProfileDetails() {
  const Navigate = useNavigate()
  const followers = ()=>{
    Navigate("/followersorfollowing")
  }
  return (
    <div className={Style.profileDetails}>
      <div className={Style.UserProfile}>
        <div className={Style.left}>
            <div className={Style.divforImage}></div>
        </div>
        <div className={Style.right}>
          <div className={Style.rightTop}>
            <p>Siireya</p>
          </div>
          <div className={Style.rightBottom}>
            <h1 onClick={followers}> 01 Followers</h1>
            <h1>22 Following</h1>

          </div>
        </div>

     
      </div>
      <p>Design Enthusiast, gamer, nft, crypto, stock, web3</p>
<div className={Style.forIcons}>
<div><img src={Youtube} alt="youtube " ></img></div>
<div><img src={Instagram} alt="instagram " ></img></div>
<div><img src={Discord} alt="facebook " ></img></div>
<div><img src={Facebook} alt="discord " ></img></div>

</div>
      <div className={Style.forWin}>
          <div className={Style.join}>
          <img src={Joined} alt="Joined " ></img>
          <h2>100 Joined</h2>
          </div>
          <div className={Style.hosted}>
          <img src={Hosted} alt="Hosted " ></img>
          <h2>100 Hosted</h2>

          </div>
          <div className={Style.earning}>
          <img src={Earnings} alt="earnings " ></img>
          <h2>₹ 100 Earning</h2>

          </div>

    <div className={Style.shareIcon}>
      <BiShareAlt/>
    </div>
        </div>
        <ClanDetail/>
    </div>
  );
}
