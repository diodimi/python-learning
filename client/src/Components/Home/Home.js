import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "./Container/Container";
import Beginner from "./Beginner/Begginer";
import Advanced from "./Advanced/Advanced";
import Intermediate from "./iNTERMEDIATE/Intermediate";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import axios from "axios";

export default function Home() {
  const [home, setHome] = useState(true);
  const [beginner_passed, setBeginner] = useState();
  const [interm_passed, setInterm] = useState();
  const [advanced_passed, setAdvanced] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setBeginner(read_cookie("beginner_passed"))
    setInterm(read_cookie('interm_passed'))
    setAdvanced(read_cookie('advanced_passed'))

  }, []);

function beginnerHandler(){
  axios.patch("http://localhost:3001/visits/update",{
    email:read_cookie('email'),
    visit:"beggginer_visits"
  })
}

function intermHandler(){
  axios.patch("http://localhost:3001/visits/update",{
    email:read_cookie('email'),
    visit:"interm_visits"
  })
}
function advancedHandler(){
  axios.patch("http://localhost:3001/visits/update",{
    email:read_cookie('email'),
    visit:"advanced_visits"
  })
}

  return (
    <div className="home">
      <Navbar />
      {home && (
        <div className="container-1">
          <Link to='/beginner' className="container-2" onClick={beginnerHandler}>Basics</Link>
          {beginner_passed===1 ? <Link to='/intermediate' onClick={intermHandler} className="container-2">Intermediate</Link> :
          <div className="invalid-2" >Intermediate</div>
          }
          {interm_passed===1 ? <Link to='/advanced' onClick={advancedHandler} className="container-2">Advanced</Link>:
          <div className="invalid-2" >Advanced</div>
          } 
          {advanced_passed===1 ? <Link to='/sumup'  className="container-2">Sum up</Link>:
          <div className="invalid-2" >Sum up</div>
          } 
          {/* <Link to='/sumup'  className="container-2">Sum up</Link> */}
          {/* <div className="container-2" onClick={beginnerHandler}>
            Basics
          </div>
          <div className="container-2" onClick={intermHandler}>Intermediate</div>
          <div className="container-2" onClick={advancedHandler}>Advanced</div> */}
        </div>
      )}

    </div>
  );
}
