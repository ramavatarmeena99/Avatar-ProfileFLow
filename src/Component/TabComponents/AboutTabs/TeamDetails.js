import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { api2 } from "../../../utils/handler";
import { getGameName } from "../../../utils/helper";

export default function TeamDetails() {
  const [allTeamDetails, setAllTeamDetails] = useState([]);

  const { id } = useParams();
  const getTeamDetails = async () => {
    const endpoint = `api/v1/esport/esport_team/teamsByUser?id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data.results.teams);

    if (res.data.results.teams) {
      setAllTeamDetails(res.data.results.teams);
    }
  };
  useEffect(() => {
    getTeamDetails();
  }, []);
  return (
    <>
      <TeamDetailsTitle>TeamDetails</TeamDetailsTitle>
      <IGN>
        <IGNDetailsTable>
          <tbody />
          <TeamPlayDetailsInTr>
            <GameDetailsInTh>Game</GameDetailsInTh>
            <IgnDetailsInTh>IGN</IgnDetailsInTh>
            <PlayerIgnDetailsInTh>PLAYER IGN</PlayerIgnDetailsInTh>
          </TeamPlayDetailsInTr>
          {allTeamDetails.map((item, index) => {
            return (
              <TeamDetailsInTr
                key={index}
                style={{
                  borderBottom:
                    index + 1 === allTeamDetails.length
                      ? "none"
                      : "1px solid #353535",
                }}
              >
                <TeamDetailsForTd>
                  {getGameName(item.game_master_id)}
                </TeamDetailsForTd>
                <TeamDetailsForTd>{item.name}</TeamDetailsForTd>
                <TeamDetailsForTd>
                  {item.other_members.map((e, ind) => {
                    return (
                      <TeamDetailsForUserName key={ind}>
                        <PlayerIGNNAme>{e.username}</PlayerIGNNAme>
                      </TeamDetailsForUserName>
                    );
                  })}
                </TeamDetailsForTd>
              </TeamDetailsInTr>
            );
          })}
          <tbody />
        </IGNDetailsTable>
      </IGN>
    </>
  );
}

const IGN = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0px 10px;
`;
const IGNDetailsTable = styled.table`
  background-color: #161616;
  border-radius: 5px;
  border: none;
  border-collapse: collapse;
`;
const TeamDetailsForTd = styled.td`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #fbfbfb;
  text-align: left;
  padding: 5px 20px;
`;
const GameDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  line-height: 17px;
  padding: 0px 20px;
  color: #959595;
  background-color: #272727;
  border-top-left-radius: 5px;

`;
const IgnDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  line-height: 17px;
  padding: 0px 20px;
  color: #959595;
  background-color: #272727;
`;

const PlayerIgnDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  line-height: 17px;
  padding: 0px 20px;
  color: #959595;
  background-color: #272727;
  border-top-right-radius: 5px;

`;

const TeamDetailsInTr = styled.tr`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;
const TeamPlayDetailsInTr = styled.tr`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;
const TeamDetailsTitle = styled.h1`
  font-size: 16px;
  line-height: 19px;
  padding: 10px 10px;
`;

const PlayerIGNNAme = styled.p`
  text-align: left;
  padding: 2px;
`;

const TeamDetailsForUserName = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
