import LoginForm from "@/components/LoginForm";
import AdminContext from "@/context/admins/AdminContext";
import React, { useContext } from "react";
import styles from "../components/style.module.css";
export default function AdminLogin() {
  const context = useContext(AdminContext);
  const { verifyAdmin } = context;
  return (
    <div>
      <div className={`container  mx-auto mt-10 ${styles.loginpage}`}>
        <h1 style={{ marginTop: "10px", fontSize: "2rem" }}>LOGiN</h1>
        <p>
          For test Enter email : ankit4@gmail.com
        </p>
         <p> password: 20GG10062</p>

        <LoginForm
          texti="Enter your password"
          loginfor="admin"
          handleVerify={verifyAdmin}
        />
      </div>
    </div>
  );
}
