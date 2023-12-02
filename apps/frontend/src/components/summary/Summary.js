import React, { Fragment, useState } from "react";

import "./Summary.css";

import gif from "./goggins.gif";

const Summary = (props) => {
  const BUGATTI_VEYRON_COST = props.BUGATTI_VEYRON_COST;

  const yearsWithSavings = props.salaries.salaryArraySavings.length - 1;
  let yearsWithNet = 0;
  let yearsWithBrutto = 0;

  for (let year = 0; year < yearsWithSavings; year++) {
    const salaryNet = props.salaries.salaryArrayNet[year];
    const salaryBrutto = props.salaries.salaryArrayBrutto[year];

    if (yearsWithNet < Number.EPSILON && salaryNet > BUGATTI_VEYRON_COST) {
      yearsWithNet = year;
    }
    if (
      yearsWithBrutto < Number.EPSILON &&
      salaryBrutto > BUGATTI_VEYRON_COST
    ) {
      yearsWithBrutto = year;
    }
  }

  const [doTheyKnowYou, setDoTheyKnowYou] = useState(false);
  const theyDontKnowMeSonButtonClicked = () => {
    setDoTheyKnowYou(true);
  };

  return (
    <div className="summary">
      <p>
        Your yearly brutto salary is {props.salaries.salaryArrayBrutto[0]} $.
        You probably need to pay 30-40% income tax. Let's assume the max,
        meaning you're net yearly salary is {props.salaries.salaryArrayNet[0]}{" "}
        $. Well, you gotta pay the bills and eat to survive. Let's say, you save
        30% of your net salary, meaning that you save{" "}
        {props.salaries.salaryArraySavings[0]} $ per year!
      </p>
      <p>
        Mate... You gonna own a Bugatti in <span>{yearsWithSavings}</span>{" "}
        years! If you don't pay any bills and eat nothing, you gonna need{" "}
        <span>{yearsWithNet}</span>! If you say "Fuck the IRS! I ain't paying no
        taxes!" You still have <span>{yearsWithBrutto}</span> years to go,
        pal...
      </p>
      <p>
        You ain't late for anything! Life ain't easy, and now you're aware that
        you ain't getting anywhere with the way you go!
      </p>
      <p>
        <span>Time to fucking change, son!</span>
      </p>
      {!doTheyKnowYou && (
        <button type="submit" onClick={theyDontKnowMeSonButtonClicked}>
          DO THEY FUCKING KNOW YOU?!
        </button>
      )}
      {doTheyKnowYou && <img src={gif} alt="" />}
    </div>
  );
};

export default Summary;
