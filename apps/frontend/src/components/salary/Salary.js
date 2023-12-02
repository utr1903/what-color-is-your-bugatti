import React, { Fragment, useState } from "react";
import SalaryForm from "./SalaryForm";
import SalaryLineChart from "./SalaryLineChart";

import "./Salary.css";

const Salary = (props) => {
  const BUGATTI_VEYRON_COST = props.BUGATTI_VEYRON_COST;

  // Is form submitted?
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Salary
  const [salaries, setSalaries] = useState();

  const calculateSalaries = (salary) => {
    const tax = 0.4;
    const savingRatio = 0.3;

    const salaryNet = Number(salary * (1.0-tax));
    const salarySavings = Number(salaryNet * savingRatio);

    let yearArray = [];

    let salaryTotalBrutto = 0.0;
    let salaryArrayBrutto = [];

    let salaryTotalNet = 0.0;
    let salaryArrayNet = [];

    let salaryTotalSavings = 0.0;
    let salaryArraySavings = [];

    const yearsToBuyBugatti = BUGATTI_VEYRON_COST / salarySavings;
    for (let year = 0; year < yearsToBuyBugatti; year++) {
      yearArray.push(Number(year));

      salaryTotalBrutto = salaryTotalBrutto + Number(salary);
      salaryArrayBrutto.push(salaryTotalBrutto);

      salaryTotalNet = salaryTotalNet + salaryNet;
      salaryArrayNet.push(salaryTotalNet);

      salaryTotalSavings = salaryTotalSavings + salarySavings;
      salaryArraySavings.push(salaryTotalSavings);
    }

    const salaries = {
      yearArray,
      salaryArrayBrutto,
      salaryArrayNet,
      salaryArraySavings,
    };

    setIsFormSubmitted(true);
    setSalaries(salaries);

    props.handleIsFormSubmitted(true);
    props.handleSalaries(salaries);
  };

  return (
    <Fragment>
      <SalaryForm getSalary={calculateSalaries} />
      {isFormSubmitted && <SalaryLineChart salaries={salaries} />}
    </Fragment>
  );
};

export default Salary;
