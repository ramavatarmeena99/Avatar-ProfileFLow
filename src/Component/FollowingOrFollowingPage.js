import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api2 } from "../utils/handler";

export default function FollowersOrFollowingPage() {
const [allUserFollowers, setAllUserFollowers] = useState()
  const {id, type } = useParams();

  const getAllUsersForFollowers = async () => {
    let endpoint = `api/v1/esport/followers?user_id=${id}&flag=${type}`;
    const res = await api2("get", {}, endpoint);

    console.log(res.data);

    if (res.data.success) {
      setAllUserFollowers(res.data.results);
    }
  };

  useEffect(() => {
    getAllUsersForFollowers();

  }, []);

  return (
    <div>
      {Array(20)
        .fill(null)
        .map(() => {
          return (
            <ForFollowersOrFollowing>
              <ForFollowersOrFollowingImage></ForFollowersOrFollowingImage>

              <p style={{ color: "white", paddingLeft: "10px" }}>
                RAMAVATAR MEENA
              </p>
            </ForFollowersOrFollowing>
          );
        })}
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
`;

const ForFollowersOrFollowingImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
`;
