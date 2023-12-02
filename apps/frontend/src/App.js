import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Ad from "./components/ads/Ad";
import Intro from "./components/intro/Intro";
import Salary from "./components/salary/Salary";
import Answer from "./components/answer/Answer";
import Summary from "./components/summary/Summary";

import "./App.css";

const BUGATTI_VEYRON_COST = 2000000;

function App() {
  // Has shut up?
  const [hasShutUp, setHandleHasShutUp] = useState(false);
  const handleHasShutUp = () => {
    setHandleHasShutUp(true);
  };

  // Is form submitted?
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleIsFormSubmitted = () => {
    setIsFormSubmitted(true);
  };

  // Salary
  const [salaries, setSalaries] = useState("");
  const handleSalaries = (salaries) => {
    setSalaries(salaries);
  };

  return (
    <Fragment>
      <Header />
      <div className="main-container">
        <div className="main-container-child">
          <Ad />
        </div>
        <div className="main-container-center">
          <Intro BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST} />
          <Answer handleHasShutUp={handleHasShutUp} />
          {hasShutUp && (
            <Salary
              BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
              handleIsFormSubmitted={handleIsFormSubmitted}
              handleSalaries={handleSalaries}
            />
          )}
          {isFormSubmitted && (
            <Summary
              BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
              salaries={salaries}
            />
          )}
        </div>
        <div className="main-container-child">
          <Ad />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
