import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BiX } from "react-icons/bi";
import AxiosAuth from "../../apis/AxiosAuth";
import { YoutubeContext } from "../../apis/YoutubeContext";

const LoginModal = () => {
  let { show, setShow, setShowSignup, setIsLoggedIn } =
    useContext(YoutubeContext);
  let [aemail, setaEmail] = useState("");
  let [apassword, setaPassword] = useState("");
  let [state, setState] = useState(null);
  useEffect(() => {
    let fetchUsers = async () => {
      try {
        let { data } = await AxiosAuth.get("/users");
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  if (!show) {
    return null;
  }
  let handleSubmit = e => {
    e.preventDefault();
    state.filter(user => {
      let { email, password } = user;
      if (email === aemail && password === apassword) {
        setIsLoggedIn(true);
        setShow(false);
      } else {
        alert("Incorrect email or passwod");
      }
    });
  };

  return ReactDOM.createPortal(
    <div
      className="modalLayout w-full h-[91vh] flex items-center justify-center flex-col  gap-4 ] fixed inset-0"
      onClick={() => {
        setShow(false);
      }}
    >
      <div
        className="modalContainer border   w-[30%] h-3/6 bg-white flex flex-col justify-center items-center gap-5 rounded-md"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader flex w-[100%] justify-between ">
          <div className="heading text-right w-[40%]">
            <h1 className="text-2xl font-bold ">Login</h1>
          </div>
          <div className="btn pr-3  w-[20%] text-right">
            <button
              onClick={() => {
                setShow(false);
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
              <legend>Email</legend>
              <input
                type="email"
                name="aemail"
                id="aemail"
                placeholder="abc@example.com"
                className=" border  p-2  rounded-md"
                value={aemail}
                onChange={e => {
                  setaEmail(e.target.value);
                }}
              />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <input
                type="password"
                name="apassword"
                id="password"
                placeholder="Password"
                className=" border  p-2  rounded-md"
                value={apassword}
                onChange={e => {
                  setaPassword(e.target.value);
                }}
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
        <div className="modalFooter flex w-[100%]  justify-end pr-4">
          <a
            onClick={() => {
              setShowSignup(true);
              setShow(false);
            }}
            className=" p-2 hover:bg-blue-100 text-blue-500 cursor-pointer rounded-md"
          >
            Signup
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("childRoot")
  );
};

export default LoginModal;
