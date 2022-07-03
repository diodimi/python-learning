import React, { useState } from "react";
import classes from "./SignUp.module.css";
import Card from "../../UI/Card/Card";
import { Button } from "react-bootstrap";
import Alert from 'react-popup-alert'



import Axios from "axios";

const SignUp = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredSecondPassword, setEnteredSecondPassword] = useState("");
  const [nameIsValid, setNameIsValid] = useState();
  const [secondPasswordIsValid, setSecondPasswordIsValid] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })
  const emailChangeHandler = (event) => {
    
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") &&
        enteredSecondPassword.trim().length > 6 &&
        enteredPassword === enteredSecondPassword &&
        enteredPassword.trim().length > 6 &&
        enteredName.trim().length > 6
    );
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") &&
        enteredSecondPassword.trim().length > 6 &&
        enteredPassword === enteredSecondPassword &&
        enteredPassword.trim().length > 6 &&
        event.target.value.trim().length > 6
    );
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") &&
        event.target.value.trim().length > 6 &&
        event.target.value === enteredSecondPassword &&
        enteredPassword.trim().length > 6 &&
        enteredName.trim().length > 6
    );
  };

  const secondPasswordChangeHandler = (event) => {
    setEnteredSecondPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") &&
        event.target.value.trim().length > 6 &&
        enteredPassword === event.target.value &&
        enteredPassword.trim().length > 6 &&
        enteredName.trim().length > 6
    );
    console.log(formIsValid);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 6);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateSecondPasswordHandler = () => {
    setSecondPasswordIsValid(
      enteredSecondPassword.trim().length > 6 &&
        enteredSecondPassword === enteredPassword
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    Axios.get("http://localhost:3001/emails/get").then((response) => {
      // Check if email exists
      const found = response.data.some((el) => el.email === enteredEmail);
      if (!found) {

        Axios.post("http://localhost:3001/users/insert", {
          fullName: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        });
        Axios.post("http://localhost:3001/visits/post", {
          
          email: enteredEmail,
         
        });
        backHandler()
      }else{
        console.log("vrethike")
        onShowAlert('warning')
      }
    });
  };

  const backHandler = (event) => {
    props.onSignUp(false);
  };

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'Demo alert',
      show: true
    })
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
              nameIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={validateNameHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">Email</label>
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
          <div
            className={`${classes.control} ${
              secondPasswordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label>Repeat Password</label>
            <input
              type="password"
              id="password2"
              value={enteredSecondPassword}
              onChange={secondPasswordChangeHandler}
              onBlur={validateSecondPasswordHandler}
            />
          </div>
          <div className={classes.btnAlign}>

            <Button className={classes.btn} size="sm" onClick={backHandler}>
              Back
            </Button>
            <Button
              type="submit"
              className={`${classes.btn} ${classes.action}`}
              size="sm"
              disabled={!formIsValid}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
