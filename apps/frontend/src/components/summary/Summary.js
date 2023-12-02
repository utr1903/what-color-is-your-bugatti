import React, { Fragment } from "react";
import "./Summary.css";

const Summary = (props) => {
  const BUGATTI_VEYRON_COST = props.BUGATTI_VEYRON_COST;

  const yearsWithSavings = props.salaries.salaryArraySavings.length - 1;
  let yearsWithNet = 0;
  let yearsWithBrutto = 0;

  for (let year = 0; year < yearsWithSavings; year++) {
    const salaryNet = props.salaries.salaryArrayNet[year];
    const salaryBrutto = props.salaries.salaryArrayBrutto[year];

    if (
      yearsWithNet < Number.EPSILON &&
      salaryNet > props.BUGATTI_VEYRON_COST
    ) {
      yearsWithNet = year;
    }
    if (
      yearsWithBrutto < Number.EPSILON &&
      salaryBrutto > props.BUGATTI_VEYRON_COST
    ) {
      yearsWithBrutto = year;
    }
  }

  return (
    <div className="summary">
      <p>{yearsWithSavings}</p>
      <p>{yearsWithNet}</p>
      <p>{yearsWithBrutto}</p>
    </div>
  );
};

export default Summary;
