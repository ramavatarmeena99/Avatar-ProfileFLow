import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { api2 } from "../utils/handler";
import { useNavigate, useParams } from "react-router-dom";
import HeaderForProps from "./HeaderForProps";
export default function EditProfilePage() {
  const [updateUserProfileImage, setUpdateUserProfileImage] = useState();
  const { id } = useParams();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [discord, setDiscord] = useState("");
  const [facebook, setFacebook] = useState("");
  const [alertMessege, setAlertMessege] = useState(null);




  const Navigate = useNavigate();
  const backButton = () => {
    Navigate(`/profile/${id}`);
  };



  const updateUserProfile = async () => {
    if(!userName){
      setAlertMessege(true);
      setTimeout(() => {
        setAlertMessege(false);
      }, 2000);
      return () => {
        clearTimeout(setAlertMessege);
      };
    }

    const data = {
      platformusername: userName,
      email,
      user_designation: null,
      user_looking_for: null,
      description:bio,
      instagram,
      facebook,
      // whatsapp,
      discord,
      youtube,
      declaration: true,

    };

    const endpoint = `api/v1/esport/esport_game_contest/updateUser?id=${id}`;
    const res = await api2("post", data, endpoint);
 

    if (res.data.success) {

      alert("Success ");
    Navigate(`/profile/${id}`);

    }
    
   
  };

  const getProfileDetails = async () => {
    const endpoint = `api/v1/esport/esport_game_contest/userProfile?id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data);

    if (res.data.success) {

      setUpdateUserProfileImage(res.data.results.userDetails.profile_pic_url)
      setEmail(res.data.results.userDetails.email);
      setUserName(res.data.results.userDetails.platformusername);
      setBio(res.data.results.userDetails.description);
      setYoutube(res.data.results.userDetails.youtube);
      setInstagram(res.data.results.userDetails.instagram);
      setDiscord(res.data.results.userDetails.discord);




    }
  };

  useEffect(() => {
    getProfileDetails();
    // updateUserProfile();
  }, []);

  return (
    <ForEditProfilePage>
      <HeaderForProps 
              Back_Button={<BiArrowBack onClick={backButton} />}

      HeaderTitle={userName}
      SaveButton={<button  
        style={{
        backgroundColor: "transparent",
        color: "#50A3FF",
        fontSize: "16px",
        border:"none"
      }}
       onClick={updateUserProfile}>SAVE</button>}
      />

      <ForEditProfileImage>
        <ForEditImage src={updateUserProfileImage}></ForEditImage>
        <ForEditProfileTitle>Upload Profile Picture</ForEditProfileTitle>
      </ForEditProfileImage>
      <ForUserDetailsEdit>
        <UserName>USERNAME</UserName>
        <UserNameInput
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text" placeholder="Enter UserName"></UserNameInput>
                          {alertMessege ? <UserNameAlertMessege>*User Name Required*</UserNameAlertMessege> : null}

      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Email Address</UserName>
        <UserNameInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="example@gmail.com"
        />
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Add Bio</UserName>
        <UserNameTextArea
         value={bio}
         onChange={(e) => setBio(e.target.value)}
          type="text"
          placeholder="Enter UserName"
        ></UserNameTextArea>
      </ForUserDetailsEdit>
      <ForUserDetailsEdit>
        <UserName>Add social media links</UserName>
        <SocialMediaLink>
          <ForUserDetailsEdit>
            <UserName>Youtube Link</UserName>
            <YoutubeLink
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              type="text"
              placeholder="Type / paste your youtube link here"
            ></YoutubeLink>
          </ForUserDetailsEdit>
          <ForUserDetailsEdit>
            <UserName>Instagram link</UserName>
            <YoutubeLink
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              type="text"
              placeholder="Your instagram profile link"
            ></YoutubeLink>
          </ForUserDetailsEdit>
          <ForUserDetailsEdit>
            <UserName>Discord link </UserName>
            <YoutubeLink
                         value={discord}
                         onChange={(e) => setDiscord(e.target.value)}
              type="text"
              placeholder="Discord server link"
            ></YoutubeLink>
          </ForUserDetailsEdit>

          <ForUserDetailsEdit>
            <UserName>Discord link </UserName>
            <YoutubeLink
                         value={facebook}
                         onChange={(e) => setFacebook(e.target.value)}
              type="text"
              placeholder="Facebook Profile link"
            ></YoutubeLink>
          </ForUserDetailsEdit>
        
        </SocialMediaLink>
      </ForUserDetailsEdit>
    </ForEditProfilePage>
  );
}

const ForEditProfilePage = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
`;

const UserName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #cbcaca;
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
  color: #fbfbfb;
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
  color: #fbfbfb;
  padding-left: 10px;
`;
const SocialMediaLink = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 5px;

  padding: 5px 08px;
  background-color: #161616;
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
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ForEditImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
`;
const ForEditProfileTitle = styled.p`
  color: #3389e9;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-top: 10px;
`;

const UserNameAlertMessege = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 0px;
  color: red;
`;