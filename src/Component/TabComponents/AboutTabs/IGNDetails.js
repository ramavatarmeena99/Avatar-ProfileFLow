import React from "react";
import { ignData } from "./AboutTabData";
import styled from "styled-components";
export default function IGNDetails() {
  return (
    <>
      <TeamIGnDetailTitle>IGN Details</TeamIGnDetailTitle>
      <IGN>
        <IGNDetailsTable>
          <tbody>
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
              <IgnDetailth></IgnDetailth>
            </tr>

            {ignData.map((item, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    width: "100%",
                    height: "40px",
                    display: "flex",
                    flexDirection: "row",
                    borderBottom:
                      index + 1 === ignData.length ? "none" : "1px solid red",
                  }}
                >
                  <IGNDetailsTd>{item.game}</IGNDetailsTd>
                  <IGNDetailsTd>{item.ignName}</IGNDetailsTd>
                  <IGNDetailsTd>Edit</IGNDetailsTd>
                </tr>
              );
            })}
          </tbody>
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
  margin-bottom: 10px;
`;
const IGNDetailsTable = styled.table`
  //   display: flex;
  //   flex-direction: column;
  //   align-items:center;
  //   justify-content:center;
  //   color: white;
  border-radius: 5px;
  background-color: #161616;
  border: none;
`;
const IGNDetailsTd = styled.td`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  text-align: left;
`;
const IgnDetailth = styled.th`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  text-align: left;
  background-color: #272727;
`;
const TeamIGnDetailTitle = styled.h1`
  padding: 10px 10px;
`;
