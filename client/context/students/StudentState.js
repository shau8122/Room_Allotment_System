import React from "react";
import StudentContext from "./StudentContext";
import  {  useState,useContext } from "react";
import AdminContext from "../admins/AdminContext";
export default function StudentState(props) {
  const context = useContext(AdminContext)
  const {fetchAdminData} = context;
  const [isUserStudent, setIsUser] = useState(false);
  const [studentToken, setStudentToken] = useState("");
  const [students, setStudents] = useState([]);
  const [studentData, setStudentData] = useState({})
  const host = "https://room-allotment-api.onrender.com";
  const verifyStudent = async (email, rollNo, loginPage) => {
    const formData = {
      email: email,
      rollNo: rollNo,
    };
    const url = `${host}/studentlogin`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
    if (user.authToken) {
      setIsUser(true);
      setStudentToken(user.authToken);
    }
  };

  const fetchStudents = async (token) => {
    const url = `${host}/studentlist`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const user = await response.json();
    setStudents(user);
    {isUserStudent?fetchStudentData():fetchAdminData()}
  };
  const fetchStudentData = async () => {
    const url = `${host}/studentdata`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": studentToken,
      },
    });
    const user = await response.json();
    setStudentData(user);
    
  };
  return (
    <StudentContext.Provider value={{ isUserStudent ,studentToken, students, verifyStudent , fetchStudents,studentData} }>
      {props.children}
    </StudentContext.Provider>
  );
}
