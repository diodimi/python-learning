import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import './Login.scss'

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

 

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

  const loginHandler=()=>{
      axios.post("http://localhost:3001/accounts/get", {
          
          email: enteredEmail,
          password: enteredPassword,
        }).then((response)=>{
        
        const found = response.data.some((el) => el.email === enteredEmail);
        
        if(found){
          axios.post("http://localhost:3001/passed/get",{
          email: enteredEmail,
            pass:"beginner_passed"
          }).then((res)=>{
            bake_cookie("beginner_passed",res.data[0].beginner_passed)
          })
          axios.post("http://localhost:3001/passed/get",{
          email: enteredEmail,
            pass:"intetm_passed"
          }).then((res)=>{
            
            bake_cookie("interm_passed",res.data[0].intetm_passed)
          })
          axios.post("http://localhost:3001/passed/get",{
          email: enteredEmail,
            pass:"advanced_passed"
          }).then((res)=>{
            
            bake_cookie("advanced_passed",res.data[0].advanced_passed)
          })

          console.log('found')
          props.onLogin(true)
          bake_cookie('email', enteredEmail);

          navigate('/Home');
        }else{
          console.log("No logged in")

        }
        })
  }

  return (

    <div className="sass-bg">
    <div className={classes.center}>
  <Card className={classes.logForm}>
      
    <div className="animation-container">
	<div className="lightning-container">
		<div className="lightning white"></div>
		<div className="lightning red"></div>
	</div>
	<div className="boom-container">
		<div className="shape circle big white"></div>
		<div className="shape circle white"></div>
		<div className="shape triangle big yellow"></div>
		<div className="shape disc white"></div>
		<div className="shape triangle blue"></div>
	</div>
	<div className="boom-container second">
		<div className="shape circle big white"></div>
		<div className="shape circle white"></div>
		<div className="shape disc white"></div>
		<div className="shape triangle blue"></div>
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
              onClick={loginHandler}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
  </div>

  </div>

    // <div className={classes.center}>
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
