import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import styled from "styled-components";
import { api2 } from "../../../utils/handler";
import { useParams } from "react-router-dom";
import { getGameName } from "../../../utils/helper";
export default function IGNDetails() {
  const [allIgnDetails, setAllIgnDetails] = useState([]);
  const [ignName, setIgnName] = useState("");
  const [gameMasterId, setGameMasterId] = useState("");
  const [alertMessege, setAlertMessege] = useState(null);


  const { id } = useParams();
  const getIgnDetails = async () => {
    const endpoint = `api/v1/esport/esport_game_contest/getIgnDetails?id=${id}`;
    const res = await api2("get", {}, endpoint);

    // console.log(res.data.results);

    if (res.data.results) {
      setAllIgnDetails(res.data.results);
    }
  };

  const updateIgnDetails = async () => {
    if(!ignName){
      setAlertMessege(true);
      setTimeout(() => {
        setAlertMessege(false);
      }, 2000);
      return () => {
        clearTimeout(setAlertMessege);
      };

    }
    const requestBody = {
      ign_name: ignName,
    };
    const endpoint = `api/v1/esport/esport_game_contest/updateUserIgn?game_master_id=${gameMasterId}`;
    const res = await api2("post", requestBody, endpoint);
    if (res?.data?.success) {
      setOpen(false);
      getIgnDetails();
    }
  };

  const [open, setOpen] = useState(false);
  const editIGNDetails = (_item) => {
    setOpen(true);
    setIgnName(_item.ign_name);
    setGameMasterId(_item.game_master_id);
  };
  const editIGNDetailsClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getIgnDetails();
  }, []);
  return (
    <>
      <TeamIGnDetailTitle>IGN Details</TeamIGnDetailTitle>
      <IGN>
        <IGNDetailsTable>
          <tbody>
            <IgnDetailsInTr>
              <GameIgnDetailsInTh>Game</GameIgnDetailsInTh>
              <IgnDetailsInTh>IGN</IgnDetailsInTh>
              <EmptyIgnDetailsInTh></EmptyIgnDetailsInTh>
            </IgnDetailsInTr>

            {allIgnDetails.map((item, index) => {
              return (
                <IgnDetailsInTr
                  key={index}
                  style={{
                    borderBottom:
                      index + 1 === allIgnDetails.length
                        ? "none"
                        : "1px solid #353535",
                  }}
                >
                  <IGNDetailsForTd>
                    {getGameName(item?.game_master_id)}
                  </IGNDetailsForTd>
                  <IGNDetailsForTd>
                  {item?.ign_name?.length > 10
          ? item?.ign_name?.slice(0, 10) + "..."
          : item?.ign_name}
                  </IGNDetailsForTd>
                  <IGNDetailsEditForTd
                   
                  >
                    <p
                     onClick={() => {
                      editIGNDetails(item);
                    }}
                    >
                    Edit

                    </p>
                  </IGNDetailsEditForTd>
                </IgnDetailsInTr>
              );
            })}
            {open && (
              <UpdateIgnDetails>
                <UpdateIgnDetailMainDiv>
                  <UpdateIgnDetailClose>
                    <p
                      style={{
                        fontSize: "17px",
                        lineHeight: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Update IGN Details
                    </p>

                    <AiOutlineClose
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                      onClick={editIGNDetailsClose}
                    />
                  </UpdateIgnDetailClose>

                  <IgnName>IGN Name</IgnName>

                  <UpdateIgnName
                    value={ignName}
                    onChange={(e) => setIgnName(e.target.value)}
                    type="text"
                    placeholder="Enter IGN Name"
                  ></UpdateIgnName>
                  {alertMessege ? <IgnNameAlertMessege>*Ign Name Required*</IgnNameAlertMessege> : null}

                  <UpdateButtonDiv>

                    <UpdateButton onClick={updateIgnDetails}>
                      UPDATE
                    </UpdateButton>

                  </UpdateButtonDiv>
                </UpdateIgnDetailMainDiv>
              </UpdateIgnDetails>
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
  border-radius: 10px;
  background-color: #161616;
  border-collapse: collapse;

`;
const IGNDetailsForTd = styled.td`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding:5px 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #fbfbfb;
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
  color: #e1012d;
  text-align: left;
  padding:0px 20px;
  
`;
const IgnDetailsInTh = styled.th`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  padding:0px 20px;
  color: #959595;
  text-align: left;
  background-color: #272727;

`;
const GameIgnDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  line-height: 17px;
  padding: 0px 20px;
  color: #959595;
  background-color: #272727;
  border-top-left-radius: 5px;

  `;


const EmptyIgnDetailsInTh = styled.th`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-around;
  font-size: 14px;
  text-align: left;
  font-weight: 400;
  line-height: 17px;
  padding: 0px 20px;
  color: #959595;
  background-color: #272727;
  border-top-right-radius: 5px;

`;


const IgnDetailsInTr = styled.tr`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  

`;
const TeamIGnDetailTitle = styled.h1`
  padding: 10px 10px;
  font-size: 16px;
  line-height: 19px;
`;

const UpdateIgnDetails = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UpdateIgnDetailMainDiv = styled.div`
  width: 312px;
  height: auto;
  background-color: #161616;
  border-radius: 4px;
  padding: 10px 10px;
`;
const UpdateIgnDetailClose = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #272727;
`;
const IgnName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 0px;
  color: #cbcaca;
`;

const UpdateIgnName = styled.input`
  width: 100%;
  height: 35px;
  background-color: #353535;
  color: #969595;
  padding: 0px 5px;
  border: none;
  outline: none;
  border-radius: 2px;
`;

const UpdateButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const UpdateButton = styled.button`
  width: 116px;
  height: 30px;
  background-color: #e1012d;
  border: none;
  outline: none;
`;

const IgnNameAlertMessege = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 0px;
  color: red;
`;