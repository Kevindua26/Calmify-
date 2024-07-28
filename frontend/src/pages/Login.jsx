import React from "react";
import login from "../assets/login.png";
import { FaRegSnowflake } from "react-icons/fa";
import "./styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login pt-4  montserrat">
      <div className="container flex mx-auto items-center ">
        
        <div className="container-img ">
          <img src={login} alt="login" />
        </div>
        <div className="login-info bg-slate-200 rounded-3xl text-center px-10 w-2/4 flex flex-col gap-4 py-4">
          <div className="icon flex items-center justify-center ">
            <FaRegSnowflake className="text-3xl"/>
          </div>
          <div className="greet">
            <h1 className="text-center font-semibold text-3xl mb-2 montserrat">
              Welcome back!
            </h1>
            <p>Please enter your details</p>
          </div>
          <div>
            <div className="login-form flex flex-col gap-4 mt-1">
              <input
                type="email"
                id="Email"
                placeholder="Email"
                className="w-2/4 mx-auto block"
              />
              <input
                type="password"
                id="Password"
                placeholder="Password"
                className="w-2/4 mx-auto block"
              />
            </div>
            <div className="forgot-pass flex  text-[11px] mx-auto max-w-[50%] justify-between mt-2 items-center">
              <div className="forgot-pass-checkBoxInput flex items-center gap-1">
                <input type="checkbox" id="remember" />
                <label for="remember">Remember for 30 days</label>
              </div>
              <div className="flex items-center">
                <a href="#" id="forgot-pass" className="hover:underline">
                  Forgot password ?
                </a>
              </div>
            </div>
          </div>
          <div className="buttons mt-3 flex flex-col mx-auto w-[50%] gap-4">
            <button id="login-button" className="py-3">Log In</button>
            <button id="google-login-button" className="py-3">
              {/* <i className="fa-brands fa-google"></i> */}
              {/* <!-- <img src="/assets/google icon.png" alt=""> --> */}
              Log In with Google
            </button>
          </div>
          <div className="haveAccount h-[10vh] flex items-end justify-center">
            <p className="text-sm">
              Don't have an account? <Link to={"/signup"} className="hover:underline">Sign Up </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
