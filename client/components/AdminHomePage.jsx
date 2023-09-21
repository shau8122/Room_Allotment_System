import Image from "next/image";
import StudentContext from "@/context/students/StudentContext";
import router from "next/router";
import React, { Key, useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import AdminContext from "@/context/admins/AdminContext";
import Spinner from "./loader";

export default  function AdminHomePage() {
  const [showModal, setShowModal] = useState(false);
  const context  = useContext(StudentContext);
  const {students} = context;
  const adminContext = useContext(AdminContext);
  const {fetchEmptyRooms,fetchNotAlloted}= adminContext;
  const [foundStudent, setFoundStudent] = useState({
    name:"",
    contactNo:"",
    rollNo:"",
    roomNo:"",
    email:"",
  });
  const [loading, setLoading] = useState(false);
  const handleClick1 = (id) => {
    const foundItem = students.find(
      (student) => student._id === id
    );
    setFoundStudent({
      name:foundItem.name,
      contactNo:foundItem.contactNo,
      rollNo:foundItem.rollNo,
      roomNo:foundItem.roomNo,
      email:foundItem.email,
    })
    setShowModal(true);
  };
  const handleClick=()=>{
    setLoading(true);
    fetchEmptyRooms();
    fetchNotAlloted();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    const handleEvent=()=>{
      router.push('/AllotRoom')
    }
    setTimeout(handleEvent, 3000);
    
  }

  return (
    <div>
      <div className={styles.studentTop}>
        <button onClick={() => router.back()} className={styles.button}>
          Back
        </button>
        <button 
        onClick={handleClick} 
        className={styles.button}>
          Allot Rooms
        </button>
        <button className={styles.button} onClick={() => router.push("/AdminProfile")}>My Profile</button>
      </div>
      <div className={styles.borders}></div>
      {loading ? <Spinner/>:
      <div className="grid grid-cols-3 my-6 gap-4">
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className={styles.modalBody}>
                <div className="relative p-7 ">
                  <div className={styles.modalContent}>
                    <Image
                      src={`/Ellipse.png`}
                      alt="hi"
                      width={100}
                      height={100}
                      style={{ margin: "10px" }}
                    />
                    <h1 style={{ fontSize: "1.5rem" }}>{foundStudent.name}</h1>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Contact:{" "}
                      <span style={{ fontWeight: "bold" }}>{foundStudent.contactNo}</span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Room No: <span style={{ fontWeight: "bold" }}>{foundStudent.roomNo}</span>
                    </h2>
                    <h2 style={{ fontSize: "1.1rem" }}>
                      Email Id:{" "}
                      <span style={{ fontWeight: "bold" }}>
                      {foundStudent.email}
                      </span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Roll No:{" "}
                      <span style={{ fontWeight: "bold" }}>{foundStudent.rollNo}</span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Block: <span style={{ fontWeight: "bold" }}>E</span>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {students.map(function (student) {
          return (
            <div
              key={student._id}
              className={styles.nameCard}
              onClick={() => handleClick1(student._id)}
            >
              <h1>
                {student.name}{" "}
                <span style={{ fontWeight: "bold" }}>{student.roomNo}</span>
              </h1>
            </div>
          );
        })}
      </div>}
    </div>
  );
}
