import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
export default function LoginPage() {
  return (
    <div>
      <div className={`container  mx-auto  ${styles.loginpage}`}>
        <h1 style={{ marginTop: "10px", fontSize: "2rem" }}>LOGiN</h1>

        <div>
          <Link href={"/StudentLogin"}>
            <div
              // href="/StudentHome"
              style={{
                marginTop: "5rem",
                fontSize: "2rem",
                background: "#5795d8",
                borderRadius: "15px",
                padding: "0 10px",
                // width: "60%",
              }}
            >
              <button>STUDENT</button>
            </div>
          </Link>
          <Link href={"/AdminLogin"}>
            <div
              //
              style={{
                marginTop: "0.5rem",
                fontSize: "2rem",
                background: "#5795d8",
                borderRadius: "15px",
                // width: "60%",
              }}
            >
              <button >ADMIN</button>
            </div>
          </Link>
        </div>

      
      </div>
    </div>
  );
}
