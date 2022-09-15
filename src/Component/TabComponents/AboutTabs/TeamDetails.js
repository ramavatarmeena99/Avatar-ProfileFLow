import React from 'react'
import styled from 'styled-components';
import { teamData } from './AboutTabData';

export default function TeamDetails() {
  return (
<>
<h1>TeamDetails</h1>
<IGN>
      <IGNDetailsTable >
  <tr
style={{
    width:"100%",
    height:"40px",
    display:"flex",
  flexDirection: "row",
  backgroundColor:"#161616",
  // borderTopLeftRadius:"5px",
  // borderTopRightRadius:"5px",
}}
>
    <IgnDetailth>Game</IgnDetailth>
    <IgnDetailth>IGN</IgnDetailth>
    <IgnDetailth>PLAYER IGN</IgnDetailth>
  </tr>
  {teamData.map((item, index)=>{
    return (
        <tr
        style={{
            width:"100%",
            height:"auto",
            display:"flex",
          flexDirection: "row",
         
        }}
        >
        <IGNDetailsTd>{item.game}</IGNDetailsTd>
        <IGNDetailsTd>{item.teamName}</IGNDetailsTd>
        <IGNDetailsTd>
          {item.playerIGN.map((e, index)=>{
            return (
              <div
              style={{
                width:"100%",
                height:"auto",
                display:"flex",
                flexDirection:"column",
              

              }}
              >
<p>{e.nameA}</p>

              </div>
            )
          })}
        </IGNDetailsTd>

      </tr>
    )
 
  })}


</IGNDetailsTable>
    </IGN>
</>

  )
}

const IGN = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: white;
  padding:0px 10px;
`;
const IGNDetailsTable = styled.table`
background-color:#1E1E1E;
`;
const IGNDetailsTd = styled.td`
width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-around;
  color: white;
padding:10px 0px;
border-bottom:1px solid red;
`;
const IgnDetailth = styled.th`
flex:1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  color: white;
text-align:left;




`;