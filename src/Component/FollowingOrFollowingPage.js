import React from "react";
import styled from "styled-components";

export default function FollowersOrFollowingPage() {
    return (
      <div
     
      
  
  
      >
          {Array(20).fill(null).map((i,index)=>{
              return(
  
                  <div 
                  style={{color:"red",
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"flex-start",
                  marginTop:"10px",
                  marginLeft:"10px",
  
              }}
                  >
  <div style={{
      width:"40px",
      height:"40px",
      borderRadius:"50%",
      backgroundColor:"red"
  }}></div>
  
                  <p style={{color:"red", paddingLeft:"10px"}}>RAMAVATAR MEENA</p>
                  </div>
              )
          })}
      </div>
  
    )
  }