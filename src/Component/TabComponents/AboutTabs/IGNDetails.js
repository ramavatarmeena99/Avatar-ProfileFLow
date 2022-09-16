import React, { useState } from "react";
import { ignData } from "./AboutTabData";
import { AiOutlineClose } from "react-icons/ai";

import styled from "styled-components";
export default function IGNDetails() {
  const [open, setOpen] = useState(false);
const editIGNDetails =()=>{
  setOpen(true)
}
const editIGNDetailsClose=()=>{
  setOpen(false)
}
  return (
    <>
      <TeamIGnDetailTitle>IGN Details</TeamIGnDetailTitle>
      <IGN>
        <IGNDetailsTable>
          <tbody>
            <IgnDetailsInTr
           
            >
              <IgnDetailsInTh>Game</IgnDetailsInTh>
              <IgnDetailsInTh>IGN</IgnDetailsInTh>
              <IgnDetailsInTh></IgnDetailsInTh>
            </IgnDetailsInTr>

            {ignData.map((item, index) => {
              return (
                <IgnDetailsInTr
                  key={index}
                  style={{
                   
                    borderBottom:
                      index + 1 === ignData.length ? "none" : "1px solid red",
                  }}
                >
                  <IGNDetailsForTd>{item.game}</IGNDetailsForTd>
                  <IGNDetailsForTd>{item.ignName}</IGNDetailsForTd>
                  <IGNDetailsEditForTd onClick={editIGNDetails}>Edit</IGNDetailsEditForTd>
    
                </IgnDetailsInTr>
              );
            })}
                          {open && (

          <div
          style={{
            width:"100%",
            height:"100vh",
            position:"fixed",
            top:"0px",
            left:"0px",
            backgroundColor:"rgba(0,0,0,0.8)",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            
          }}
          >
            <div 
            style={{
              width:"312px",
              height:"190px",
              backgroundColor:"#161616",
              borderRadius:"4px",
      padding:" 0px 10px",

            }}
            >
<div
    style={{
      width:"100%",
      height:"7vh",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      borderBottom:"1px solid #272727",
    }}
>
<p
style={{
  fontSize:"17px",
  lineHeight:"20px",
  fontWeight:"500",
}}
>Update IGN Details</p>

<AiOutlineClose
            style={{
width:"24px",
height:"24px",
}}
                onClick={editIGNDetailsClose} />

</div>

       <p
       style={{
        fontSize:"14px",
        fontWeight:"500",
        lineHeight:"19px",
        padding:"10px 0px ",
        color:"#CBCACA",
       }}
       >
        IGN Name
        </p>      

<input style={{
  width:"100%",
  height:"35px",
  backgroundColor:"#353535",
  color:"#969595",
  padding:"0px 5px",
  border:"none",
  outline:"none",
  borderRadius:"2px",

}} type="text" placeholder="Enter IGN Name"></input>

<div 
style={{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  marginTop:"25px"
}}
>
<button
style={{
  width:"116px",
  height:"30px",
  backgroundColor:"#E1012D",
  border:"none",
  outline:"none",

}}
>UPDATE</button>
</div>
            </div>

        </div>
      )}
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
const IGNDetailsForTd = styled.td`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #FBFBFB;
  text-align: left;
`;

const IGNDetailsEditForTd = styled.td`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #E1012D;
  text-align: left;
`;
const IgnDetailsInTh = styled.th`
  flex: 1;
  height: 100%;
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

const IgnDetailsInTr = styled.tr`
width: 100%;
height:40px;
display: flex;
flex-direction:row;
`;
const TeamIGnDetailTitle = styled.h1`
  padding: 10px 10px;
  font-size: 16px;
  line-height: 19px;

`;
