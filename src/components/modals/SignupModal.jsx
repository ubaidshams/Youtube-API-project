import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { YoutubeContext } from "../../apis/YoutubeContext";
import { BiX } from "react-icons/bi";
import AxiosAuth from "../../apis/AxiosAuth";

const SignupModal = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoggedIn, setIsLogged] = useState(false);
  let { showSignup, setShowSignup, setShow } = useContext(YoutubeContext);
  let passwordRef = useRef();
  let emailRef = useRef();
  if (!showSignup) {
    return null;
  }
  let handleSubmit = async e => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter your email");
      passwordRef.current.focus();
    }
    if (password === "") {
      alert("Please enter your password");
      emailRef.current.focus();
    }
    try {
      let payload = { fname, lname, email, password, isLoggedIn };
      await AxiosAuth.post("/users", payload);
    } catch (error) {
      console.log(error);
    }
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setShowSignup(false);
    setShow(true);
  };
  return ReactDOM.createPortal(
    <div
      className="modalLayout w-full h-[91vh] flex items-center justify-center flex-col  gap-4 ] fixed inset-0"
      onClick={() => {
        setShowSignup(false);
      }}
    >
      <div
        className="modalContainer border   w-[30%] h-[70%] bg-white flex flex-col justify-center items-center gap-5 rounded-md"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader flex w-[100%] justify-between ">
          <div className="heading text-right w-[40%]">
            <h1 className="text-2xl font-bold ">Signup</h1>
          </div>
          <div className="btn pr-3  w-[20%] text-right">
            <button
              onClick={() => {
                setShowSignup(false);
              }}
              className="p-2 bg-slate-100  text-xl rounded-full "
            >
              <BiX />
            </button>
          </div>
        </div>
        <div className="modalBody ">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>First name</legend>
              <input
                type="text"
                name="fname"
                placeholder="John"
                className=" border  p-2  rounded-md"
                value={fname}
                onChange={e => {
                  setFname(e.target.value);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>Last name</legend>
              <input
                type="text"
                name="lname"
                placeholder="Wick"
                className=" border  p-2  rounded-md"
                value={lname}
                onChange={e => {
                  setLname(e.target.value);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="abc@example.com"
                className=" border  p-2  rounded-md"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                required
              />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className=" border  p-2  rounded-md"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                required
              />
            </fieldset>
            <div className="form-control text-center mt-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-[#1b66ca] text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div
          onClick={() => {
            setShowSignup(false);
            setShow(true);
          }}
          className="modalFooter flex w-[100%]  justify-end pr-4"
        >
          <a className=" p-2 hover:bg-blue-100 text-blue-500 cursor-pointer rounded-md">
            Login
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("childRoot")
  );
};

export default SignupModal;
