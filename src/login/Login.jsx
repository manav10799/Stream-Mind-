import React from "react";
import LoginPageImageTransition from "./LoginPageImageTransition";
import LoginForm from "./LoginForm";
import LoginIllustartion from "./loginIllustartion";

const Login = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute z-15 md:px-20 py-10 flex justify-between w-full max-sm:flex-col lg:flex-row max-sm:px-8">
        <div>
          <p className="text-4xl text-white font-bold xl:w-150 lg:w-100 md:w-60 text-center md:text-wrap max-sm:truncate">
            Login or subscribe to enjoy unlimited movies, shows & live sports
          </p>
        </div>
        <div className="bg-gradient-to-t from-[#0d0d0d] to-[rgba(255,255,255,0.1)] rounded-lg md:mr-40">
          <LoginForm />
          <LoginIllustartion />
        </div>
      </div>
      <LoginPageImageTransition />
    </div>
  );
};

export default Login;
