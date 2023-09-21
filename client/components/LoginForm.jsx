import AdminContext from "@/context/admins/AdminContext";
import StudentContext from "@/context/students/StudentContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
export default function LoginForm(props) {
  const context = useContext(StudentContext);
  const { isUserStudent, fetchStudents, studentToken } = context;
  const Context = useContext(AdminContext);
  const { isUserAdmin ,adminToken} = Context;
  const date = new Date();
  const currentYear = date.getFullYear();
  const [formPara, setFormPara] = useState({
    Username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormPara({ ...formPara, [name]: value });
  };
  const handleClick = (e) => {
    props.handleVerify(formPara.Username, formPara.password, props.loginfor);
    e.preventDefault();
  };
  if (props.loginfor === "student") {
    return (
      <div className="w-full max-w-xs">
        {!isUserStudent ? (
          <form className="bg-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white-700 text-lg font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                name="Username"
                placeholder="Username"
                value={formPara.Username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white-700 text-lg font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                value={formPara.password}
                onChange={handleChange}
              />
              <p className="text-white-500 text-xs italic">{props.texti}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleClick}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-white-500 hover:text-gray-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        ) : (
          <Link href={"/StudentHome"}>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ margin: "50px" }}
              onClick={()=>fetchStudents(studentToken)}
            >
              Enter Now As Students
            </button>
          </Link>
        )}
        <p className="text-center text-white-500 text-xs">
          &copy; {currentYear} Shaukat Ali . All rights reserved.
        </p>
      </div>
    );
  }else{
    return (<div className="w-full max-w-xs">
    {!isUserAdmin ? (
      <form className="bg-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-white-700 text-lg font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            name="Username"
            placeholder="Username"
            value={formPara.Username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white-700 text-lg font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            value={formPara.password}
            onChange={handleChange}
          />
          <p className="text-white-500 text-xs italic">{props.texti}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleClick}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-white-500 hover:text-gray-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    ) : (
      <Link href={"/AdminHome"}>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          style={{ margin: "50px" }}
          onClick={()=>fetchStudents(adminToken)}
        >
          Enter Now As Admin
        </button>
      </Link>
    )}
    <p className="text-center text-white-500 text-xs">
      &copy; {currentYear} Shaukat Ali . All rights reserved.
    </p>
  </div>
)
  }
}
