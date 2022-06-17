import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";
import axios from "axios";
import './Login.scss'

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

 

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    // props.onLogin(enteredEmail, enteredPassword);
  };

  const signUpHandler=(event)=>{
    event.preventDefault();
    props.onSignUp(true);
  }

  return (

    <div className={classes.center}>
  <Card className={classes.logForm}>
      
    <div class="animation-container">
	<div class="lightning-container">
		<div class="lightning white"></div>
		<div class="lightning red"></div>
	</div>
	<div class="boom-container">
		<div class="shape circle big white"></div>
		<div class="shape circle white"></div>
		<div class="shape triangle big yellow"></div>
		<div class="shape disc white"></div>
		<div class="shape triangle blue"></div>
	</div>
	<div class="boom-container second">
		<div class="shape circle big white"></div>
		<div class="shape circle white"></div>
		<div class="shape disc white"></div>
		<div class="shape triangle blue"></div>
	</div>
  </div>

         <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>

          <div className={classes.btnAlign}>
            <Button className={classes.btn} size="sm" onClick={signUpHandler}>
              Sign up
            </Button>
            <Button
              type="submit"
              className={`${classes.btn} ${classes.action}`}
              size="sm"
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
  </div>



    // <div class={classes.center}>
    //   <Card>
    //     <form onSubmit={submitHandler}>
    //       <div
    //         className={`${classes.control} ${
    //           emailIsValid === false ? classes.invalid : ""
    //         }`}
    //       >
    //         <label htmlFor="email">E-Mail</label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={enteredEmail}
    //           onChange={emailChangeHandler}
    //           onBlur={validateEmailHandler}
    //         />
    //       </div>
    //       <div
    //         className={`${classes.control} ${
    //           passwordIsValid === false ? classes.invalid : ""
    //         }`}
    //       >
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           id="password"
    //           value={enteredPassword}
    //           onChange={passwordChangeHandler}
    //           onBlur={validatePasswordHandler}
    //         />
    //       </div>

    //       <div>
    //         <Button className={classes.btn} size="sm" onClick={signUpHandler}>
    //           Sign up
    //         </Button>
    //         <Button
    //           type="submit"
    //           className={`${classes.btn} ${classes.action}`}
    //           size="sm"
    //           disabled={!formIsValid}
    //         >
    //           Login
    //         </Button>
    //       </div>
    //     </form>
    //   </Card>
    // </div>
  );
};

export default Login;
