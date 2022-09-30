import React, { useEffect, useState } from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api2 } from "../../utils/handler";
import { myUserId } from "../../utils/helper";
export default function ClanDetail() {
  const [clanData, setClanData] = useState();
  const { id } = useParams();

  const getClanDetails = async () => {
    const endpoint = `api/v1/esport/clan/myclan?user_id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data);

    if (res.data.success) {
      setClanData(res.data.results[0]);
    } else {
      alert(res.data.error.message);
    }
  };

  useEffect(() => {
    getClanDetails();
  }, []);
  return (
    <>
      <ClanDetailTitle>Clan</ClanDetailTitle>

      <ForClan>
        <ForClanImg>
          <ClanImage src={clanData?.clan_image}></ClanImage>
        </ForClanImg>
        <ClanTitleDiv>
          <ClanTitle>{clanData?.title}</ClanTitle>
          <ClanSubTitle>{clanData?.description}</ClanSubTitle>
        </ClanTitleDiv>
        <ForShareOrGroupIcons>
          <ShareIconForClan>
          <ShareButton>

          {+myUserId === +id && (
              <BiShareAlt />
        )}
            </ShareButton>
        
            {+myUserId !== +id && (
              <ShareButton>
            <MdGroups />
            {clanData?.memberCount}
            </ShareButton>
        )}
            
          </ShareIconForClan>
          {+myUserId === +id && (
  <Group>

  <MdGroups />
  {clanData?.memberCount}

</Group>
        )}
       
          {+myUserId !== +id && (
  <Group>

<div
 style={{
  fontWeight: " 400",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#FBFBFB",
  width: "80px",
  height: "30px",
  border:"none",
  outline:"none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#E1012D",
  transform: "skew(-6deg)",

}}
>
  <p
      style={{
        transform: "skew(6deg)",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "19px",
      }}
  >JOIN</p>
</div>


</Group>
        )}
        
   
        </ForShareOrGroupIcons>
      </ForClan>
    </>
  );
}

const ForClan = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #161616;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const ForClanImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;
const ClanImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: green;
  margin-right: 10px;
`;
const ClanTitleDiv = styled.div`
  flex: 1;
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
  padding-top: 5px;
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
  color: #3389e9;
`;
const ShareButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Group = styled.div`
  width: 100%;
  height: 50%;
  font-size: 20px;
  position: relative;
`;

const ClanDetailTitle = styled.h1`
  padding-left: 5px;
  padding-top: 10px;
  font-size: 16px;
  line-height: 19px;
`;
