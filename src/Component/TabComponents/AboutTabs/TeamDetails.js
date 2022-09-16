import React from "react";
import styled from "styled-components";
import { teamData } from "./AboutTabData";

export default function TeamDetails() {
  return (
    <>
      <TeamDetailsTitle>TeamDetails</TeamDetailsTitle>
      <IGN>
        <IGNDetailsTable>
          <tbody />
          <TeamPlayDetailsInTr
           
          >
            <TeamDetailsInTh>Game</TeamDetailsInTh>
            <TeamDetailsInTh>IGN</TeamDetailsInTh>
            <TeamDetailsInTh>PLAYER IGN</TeamDetailsInTh>
          </TeamPlayDetailsInTr>
          {teamData.map((item, index) => {
            return (
              <TeamDetailsInTr
                key={index}
                style={{
                  borderBottom:
                    index + 1 === teamData.length ? "none" : "1px solid red",
                }}
              >
                <TeamDetailsForTd>{item.game}</TeamDetailsForTd>
                <TeamDetailsForTd>{item.teamName}</TeamDetailsForTd>
                <TeamDetailsForTd>
                  {item.playerIGN.map((e, ind) => {
                    return (
                      <TeamDetailsForUserName
                        key={ind}
                       
                      >
                        <PlayerIGNNAme>{e.nameA}</PlayerIGNNAme>
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
`;
const TeamDetailsForTd = styled.td`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #FBFBFB;
  text-align: left;
  padding:5px 0px;
`;
const TeamDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #959595;
  text-align: left;
  background-color: #272727;
`;

const TeamDetailsInTr = styled.tr`
width: 100%;
height:auto;
display: flex;
flex-direction:row;
`;
const TeamPlayDetailsInTr = styled.tr`
width: 100%;
height:40px;
display: flex;
flex-direction:row;
`;
const TeamDetailsTitle = styled.h1`
font-size: 16px;
line-height: 19px;
  padding: 10px 10px;
`;

const PlayerIGNNAme = styled.p`
  text-align: center;
  padding:2px;
`;

const TeamDetailsForUserName = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction:column;
`;