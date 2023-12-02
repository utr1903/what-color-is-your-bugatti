import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Ad from "./components/ads/Ad";
import Intro from "./components/intro/Intro";
import Salary from "./components/salary/Salary";
import Summary from "./components/summary/Summary";

import "./App.css";

const BUGATTI_VEYRON_COST = 2000000;

function App() {
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
          <Salary
            BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
            handleIsFormSubmitted={handleIsFormSubmitted}
            handleSalaries={handleSalaries}
          />
          {isFormSubmitted && (
            <Summary
              BUGATTI_VEYRON_COST={BUGATTI_VEYRON_COST}
              salaries={salaries}
            />
          )}

          {/* <ul>
              <li>
                <img src={gif} alt="" />
              </li>
              <li>
                <img src={gif} alt="" />
              </li>
              <li>
                <img src={gif} alt="" />
              </li>
              <li>
                <img src={gif} alt="" />
              </li>
            </ul> */}
        </div>
        <div className="main-container-child">
          <Ad />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
