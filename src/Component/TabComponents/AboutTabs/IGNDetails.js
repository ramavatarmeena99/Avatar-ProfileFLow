import React from 'react'
import { ignData } from './AboutTabData'
import styled from 'styled-components'
export default function IGNDetails() {
  return (
    <>
        <h1>IGN Details</h1>
        <IGN>

<IGNDetailsTable >
  <tr
style={{
    width:"100%",
    height:"40px",
    display:"flex",
  flexDirection: "row",

}}
>
    <IgnDetailth>Game</IgnDetailth>
    <IgnDetailth>IGN</IgnDetailth>
    <IgnDetailth></IgnDetailth>
  </tr>
  {ignData.map((item, index)=>{
    return (
        <tr
        style={{
            width:"100%",
            height:"40px",
            display:"flex",
          flexDirection: "row",
        
        }}
        >
        <IGNDetailsTd>{item.game}</IGNDetailsTd>
        <IGNDetailsTd>{item.ignName}</IGNDetailsTd>
        <IGNDetailsTd>Edit</IGNDetailsTd>
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
  margin-bottom:30px;
`;
const IGNDetailsTable = styled.table`


//   display: flex;
//   flex-direction: column;
//   align-items:center;
//   justify-content:center;
//   color: white;
  background-color:#1E1E1E;

  border:none;
`;
const IGNDetailsTd = styled.td`
flex:1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  color: white;
text-align:left;
border-bottom:1px solid red;

`;
const IgnDetailth = styled.th`
flex:1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  color: white;
text-align:left;
background-color:#161616;

// border-top-left-radius:5px;
// border-top-right-radius:5px;



`;