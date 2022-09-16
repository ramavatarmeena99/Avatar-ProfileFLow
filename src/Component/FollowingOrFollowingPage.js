import React from "react";
import styled from "styled-components";

export default function FollowersOrFollowingPage() {

  return (
    <div>
      {Array(20)
        .fill(null)
        .map(() => {
          return (
            <ForFollowersOrFollowing
             
            >
              <ForFollowersOrFollowingImage
               
              ></ForFollowersOrFollowingImage>

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
display:flex;
flex-direction: row;
align-items:center;
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