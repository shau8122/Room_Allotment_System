import React from 'react'
import AdminContext from './AdminContext';

import  {  useState } from "react";

export default function  AdminState(props) {
  const host = "https://room-allotment-api.onrender.com";
  const [adminData, setAdminData] = useState({});
  const [adminToken, setAdminToken] = useState("");
  const [isUserAdmin, setIsUserAdmin] = useState(false)
  const [emptyRooms, setEmptyRooms] = useState({});
  const [notAlloted, setNotAlloted] = useState({});
  const verifyAdmin =async (email,password,loginPage)=>{
    const formData = {
      email: email,
      rollNo: password,
    };
    const url = `${host}/adminlogin`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
   
    if (user.authToken) {
      setIsUserAdmin(true);
      setAdminToken(user.authToken);
    }
  }
  const fetchAdminData = async () => {
    const url = `${host}/admindata`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": adminToken,
      },
    });
    const user = await response.json();
    setAdminData(user);
  };
  const fetchEmptyRooms = async()=>{
    const url = `${host}/emptyRoomList`;
    const response = await fetch(url,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": adminToken,
      },
    });
    const roomResponse = await response.json();
    setEmptyRooms(roomResponse);
  }
  const fetchNotAlloted = async()=>{
    const url = `${host}/notAllotedStudent`;
    const response = await fetch(url,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": adminToken,
      },
    });
    const studentResponse = await response.json();
    setNotAlloted(studentResponse);
  }
  const updateRooms=async(data)=>{
    const {name,roomNo}=data;
    const url = `${host}/updateRooms`;
    const response = await fetch(url,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": adminToken,
      },
      body:JSON.stringify({name,roomNo})
    });
    console.log(response);
  }
 
  return (
    <AdminContext.Provider value={{verifyAdmin,updateRooms,adminToken,isUserAdmin,adminData,fetchAdminData,emptyRooms,fetchEmptyRooms,fetchNotAlloted,notAlloted}}>
      {props.children}
    </AdminContext.Provider>
  )
}


