import React from "react";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
export default function EditProfilePage() {
  return (
    <ForEditProfilePage>
      <ProfileHeader />
      <ForEditProfileImage
       
      >
        <ForEditImage
      
        ></ForEditImage>
        <ForEditProfileTitle
         
        >
          Upload Profile Picture
        </ForEditProfileTitle>
      </ForEditProfileImage>
      <ForUserDetailsEdit>
        <UserName>USERNAME</UserName>
        <UserNameInput type="text" placeholder="Enter UserName"></UserNameInput>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Email Address</UserName>
        <UserNameInput
          type="text"
          placeholder="example@gmail.com"
        ></UserNameInput>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Add Bio</UserName>
        <UserNameTextArea
          type="text"
          placeholder="Enter UserName"
        ></UserNameTextArea>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
      <UserName>
      Add social media links

      </UserName>
      <SocialMediaLink>
      <ForUserDetailsEdit>
        <UserName>Youtube Link</UserName>
        <YoutubeLink
          type="text"
          placeholder="Type / paste your youtube link here"
        ></YoutubeLink>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Instagram link</UserName>
        <YoutubeLink
          type="text"
          placeholder="Your instagram profile link"
        ></YoutubeLink>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Discord link </UserName>
        <YoutubeLink
          type="text"
          placeholder="Discord server link"
        ></YoutubeLink>
      </ForUserDetailsEdit>
      </SocialMediaLink>
      </ForUserDetailsEdit>
  

    </ForEditProfilePage>
  );
}

const ForEditProfilePage = styled.p`
width: 100%;
height: auto;
padding-bottom:20px;
`;

const UserName = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #CBCACA;
  padding: 5px 0px;
`;
const ForUserDetailsEdit = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  padding: 0px 20px;
`;
const UserNameInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #161616;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #FBFBFB;
  padding-left: 10px;
`;
const UserNameTextArea = styled.textarea`
  width: 100%;
  height: 70px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #161616;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #FBFBFB;
  padding-left: 10px;
`;
const SocialMediaLink = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
border-radius:5px;

  padding: 5px 08px;
  background-color:#161616;
`;
const YoutubeLink = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #353535;
  outline: none;
  background-color: #161616;
  color: white;
  font-size: 15px;
  padding-left: 10px;
`;
const ForEditProfileImage = styled.div`
width:100%;
height:20vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ForEditImage = styled.div`
width:100px;
height:100px;
border-radius: 50%;
background-color:red;
`;
const ForEditProfileTitle = styled.p`
color: #3389E9;
font-weight: 400;
font-size: 14px;
line-height: 17px;
padding-top:10px;
`;