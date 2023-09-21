import AdminContext from "@/context/admins/AdminContext";
import Image from "next/image";
import router from "next/router";
import React, { useContext } from "react";
import styles from "./style.module.css";
export default function AdminProfilePage() {
  const context = useContext(AdminContext)
  const {adminData} = context
  // console.log(adminData)
  return (
    <div>
      <button
        onClick={() => router.back()}
        className={styles.button}
      >
        Back
      </button>
      <div className="justify-center items-center flex inset-0 z-50 ">
        <div className={styles.modalBody}>
          <div className="relative p-6 ">
            <div className={styles.modalContent}>
              <Image
                src={`/Ellipse.png`}
                alt="hi"
                width={100}
                height={100}
                style={{ margin: "10px" }}
              />
              <h1>{adminData.name}</h1>
              <h2 style={{ fontSize: "1.5rem" }}>
                Contact: <span style={{ fontWeight: "bold" }}>{adminData.contactNo}</span>
              </h2>
             
              <h2 style={{ fontSize: "1.3rem" }}>
                Email Id:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {adminData.email}
                </span>
              </h2>
              <h2 style={{ fontSize: "2rem" }}>
                Position: <span style={{ fontWeight: "bold" }}>Warden</span>
              </h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
