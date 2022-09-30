import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api2 } from "../utils/handler";
import Style from "./index.module.css";

export default function FollowersOrFollowingPage() {
  const [allUserFollowersOrFollowing, setAllUserFollowersOrFollowing] =
    useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, type } = useParams();

  const getAllUsersForFollowers = async () => {
    let endpoint = `api/v1/esport/followers?user_id=${id}&flag=${type}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data);
   
    if (res.data.success) {
    setIsLoading(false)
      
      if (type === "followers") {
        setAllUserFollowersOrFollowing(res.data.results.followers.docs);
     
      } else {
        setAllUserFollowersOrFollowing(res.data.results.following.docs);
      }
    }
  };

  useEffect(() => {
    getAllUsersForFollowers();
  }, []);

  return (
    <div
    style={{
      color: "green",
    }}
    >
      {isLoading ? (
               <div
               style={{
                 width: "100%",
                 height: "auto",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 paddingTop: "100px",
                 fontSize: "20px",
                 fontWeight: "700",
                 lineHeight: "17px",
                 color: "green",
               }}
             >
              <div
className={Style.loading}
              
              >

              </div>
             </div>
      ):(
        <>
        {allUserFollowersOrFollowing?.length !== 0 ?(
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
          })
                ):(
                  <div
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: "30px",
                    fontSize: "25px",
                    fontWeight: "700",
                    lineHeight: "17px",
                    color: "#FE4949",
                  }}
                >
                  NO DATA FOUND
                </div>
                )
                  }     
        </>
   

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
const Loading = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid #3498db;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
`
;
