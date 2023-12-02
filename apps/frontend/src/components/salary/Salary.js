import React, { Fragment, useState } from "react";
import SalaryForm from "./SalaryForm";
import SalaryLineChart from "./SalaryLineChart";

import "./Salary.css";

const Salary = () => {
  const BUGATTI_VEYRON_COST = 2000000;

  // Salary
  const [salaries, setSalaries] = useState(70000);

  const calculateSalaries = (salary) => {
    const tax = 0.4;
    const savingRatio = 0.3;

    const salaryNet = Number(salary * tax);
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

    setSalaries({
      yearArray,
      salaryArrayBrutto,
      salaryArrayNet,
      salaryArraySavings,
    });
  };

  return (
    <Fragment>
      <SalaryForm getSalary={calculateSalaries} />
      <SalaryLineChart salaries={salaries} />
    </Fragment>
  );
};

export default Salary;
