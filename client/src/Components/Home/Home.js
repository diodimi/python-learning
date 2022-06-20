import React, { useEffect, useState } from "react";

import Container from "./Container/Container";
import Beginner from "./Beginner/Begginer";
import Advanced from "./Advanced/Advanced";
import Intermediate from "./iNTERMEDIATE/Intermediate";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [home, setHome] = useState(true);
  const [beginner, setBeginner] = useState(false);
  const [interm, setInterm] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHome(!beginner && !advanced && !interm);
  }, [beginner, interm, advanced]);

  function beginnerHandler(state) {
    setBeginner(true);
  }

  function intermHandler(state) {
    setInterm(true);
  }

  function advancedHandler(state) {
    setAdvanced(true);
  }

  return (
    <div className="home">
      <Navbar />
      {home && (
        <div className="container-1">
          <div className="container-2" onClick={beginnerHandler}>
            Basics
          </div>
          <div className="container-2" onClick={intermHandler}>Intermediate</div>
          <div className="container-2" onClick={advancedHandler}>Advanced</div>
        </div>
      )}

      {beginner && <Beginner />}
      {interm && <Intermediate />}
      {advanced && <Advanced />}
    </div>
  );
}
