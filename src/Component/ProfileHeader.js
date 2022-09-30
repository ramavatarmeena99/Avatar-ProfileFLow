import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import HeaderForProps from "./HeaderForProps";
// import { myUserId } from "../utils/helper";

export default function ProfileHeader() {

  const { id } = useParams();

  const Navigate = useNavigate();
  const backButton = () => {
    Navigate(`/profile/${id}`);
  };

  return (
    <ProfileTab>

      <HeaderForProps
        Back_Button={<BiArrowBack onClick={backButton} />}
        HeaderTitle="Profile"
        Dot_Icon={
        <BiDotsVerticalRounded />

        }
      />


      {/* <SimpleMenu /> */}
    </ProfileTab>
  );
}

const ProfileTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0px 0px;
  background-color: #272727;
`;


// export function SimpleMenu() {

//   console.log(myUserId)

//   const { id } = useParams();
//   console.log(+id)

//   const Navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   // const [show, setShow] = useState(false);



//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleRedirect = () => {
//     Navigate(`/editprofile/${id}`);
//     handleClose();

//   };

//   return (
//     <>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         style={{ width: "auto", backgroundColor: "rgba(0,0,0,0.7)" }}
//       >
//        {/* {<MenuItem onClick={handleRedirect}>Edit Profile</MenuItem>  : <MenuItem>asds</MenuItem> }  
//          <MenuItem onClick={handleClose}>Share Profile</MenuItem>
//       </Menu>
//     </>
//   );
// }
