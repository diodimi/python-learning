import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { IoBookSharp } from "react-icons/io5";

export default function Credentials() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function signUpHandler(state) {
    setSignUp(state);
  }

  function loginHandler(state) {
    setIsLoggedIn(state);
  }

  return (
    <div>

        
      <div className="credentials-container">
        {!isLoggedIn && !signUp && (
          <Login onSignUp={signUpHandler} onLogin={loginHandler} />
        )}
        {signUp && <SignUp onSignUp={signUpHandler} onLogin={loginHandler} />}
        {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
      </div>
    </div>
  );
}
