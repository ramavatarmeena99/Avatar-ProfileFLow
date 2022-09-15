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
          <tr
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IgnDetailth>Game</IgnDetailth>
            <IgnDetailth>IGN</IgnDetailth>
            <IgnDetailth>PLAYER IGN</IgnDetailth>
          </tr>
          {teamData.map((item, index) => {
            return (
              <tr
                key={index}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  borderBottom:
                    index + 1 === teamData.length ? "none" : "1px solid red",
                }}
              >
                <IGNDetailsTd>{item.game}</IGNDetailsTd>
                <IGNDetailsTd>{item.teamName}</IGNDetailsTd>
                <IGNDetailsTd>
                  {item.playerIGN.map((e, ind) => {
                    return (
                      <div
                        key={ind}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <PlayerIGNNAme>{e.nameA}</PlayerIGNNAme>
                      </div>
                    );
                  })}
                </IGNDetailsTd>
              </tr>
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
const IGNDetailsTd = styled.td`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  padding: 10px 0px;
  // border-bottom:1px solid red;
`;
const IgnDetailth = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  text-align: left;
  background-color: #272727;
`;
const TeamDetailsTitle = styled.h1`
  padding: 10px 10px;
`;

const PlayerIGNNAme = styled.p`
  text-align: center;
`;
