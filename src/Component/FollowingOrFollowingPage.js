import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api2 } from "../utils/handler";
import { set } from "../utils/helper";

export default function FollowersOrFollowingPage() {
  const [allUserFollowersOrFollowing, setAllUserFollowersOrFollowing] =
    useState([]);
  const [isShow, setIsShow] = useState(false);
  const { id, type } = useParams();

  const getAllUsersForFollowers = async () => {
    let endpoint = `api/v1/esport/followers?user_id=${id}&flag=${type}`;
    const res = await api2("get", {}, endpoint);

    console.log(res.data);

    if (res.data.success) {
      if (type === "followers") {
        setAllUserFollowersOrFollowing(res.data.results.followers.docs);
        
      } else {
        setAllUserFollowersOrFollowing(res.data.results.following.docs);
      }
    }
    if ("followers"?.length > 0) {
      setIsShow(true);
    }
  };

  useEffect(() => {
    getAllUsersForFollowers();
  }, []);

  return (

    <div>
      {allUserFollowersOrFollowing?.length > 0 &&
        allUserFollowersOrFollowing.map((item, index) => {
          const userDetails =
            type === "followers"
              ? item.followed_by_details
              : item.following_users_details;
          return (
            <ForFollowersOrFollowing key={index}>
              <ForFollowersOrFollowingImage
                src={userDetails.mobile_profile_pic_url}
              />

              <p style={{ color: "white", paddingLeft: "10px" }}>
                {userDetails.platformusername}
              </p>
            </ForFollowersOrFollowing>
          );
        })}
      {isShow && (
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "30px",
            fontSize:"25px",
            fontWeight:"700",
            lineHeight:"17px",
            color:"#FE4949"
          }}
        >
          NO DATA FOUND
        </div>
      )}
    </div>
  );
}

const ForFollowersOrFollowing = styled.div`
  color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  background-color: #000000;
`;

const ForFollowersOrFollowingImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
