import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Ad from "./components/ads/Ad";
import Intro from "./components/intro/Intro";
import Salary from "./components/salary/Salary";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const BUGATTI_VEYRON_COST = 2000000;

  // Salary
  const [salary, setSalary] = useState(70000);
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };

  const [yearArray, setYearArray] = useState("");
  const [salaryArrayBrutto, setSalaryArrayBrutto] = useState("");
  const [salaryArrayNet, setSalaryArrayNet] = useState("");
  const [salaryArraySavings, setSalaryArraySavings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

    setYearArray(yearArray);
    setSalaryArrayBrutto(salaryArrayBrutto);
    setSalaryArrayNet(salaryArrayNet);
    setSalaryArraySavings(salaryArraySavings);
  };

  // Line points
  const pointRadius = 1.5;
  const colorLineBrutto = "rgb(219, 114, 0)";
  const colorLineNet = "rgb(219, 150, 0)";
  const colorLineSaving = "rgb(219, 200, 0)";

  // x ticks
  const xTicks = {
    ticks: {
      color: "black",
    },
  };

  // Visualization
  const salaryOptions = {
    responsive: true,
    scales: {
      x: xTicks,
      y: {
        ticks: {
          color: "black",
        },
        position: "left",
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black",
        },
      },
      title: {
        display: true,
        text: "Your worth ($)",
        color: "black",
        font: {
          size: 20,
        },
      },
    },
  };

  const salaryData = {
    labels: yearArray,
    datasets: [
      {
        label: "Brutto",
        data: salaryArrayBrutto,
        borderColor: colorLineBrutto,
        backgroundColor: colorLineBrutto,
        pointRadius: pointRadius,
      },
      {
        label: "Net",
        data: salaryArrayNet,
        borderColor: colorLineNet,
        backgroundColor: colorLineNet,
        pointRadius: pointRadius,
      },
      {
        label: "Savings",
        data: salaryArraySavings,
        borderColor: colorLineSaving,
        backgroundColor: colorLineSaving,
        pointRadius: pointRadius,
      },
    ],
  };

  return (
    <Fragment>
      <Header />
      <div className="main-container">
        <div className="main-container-child">
          <Ad />
        </div>
        <div className="main-container-center">
          <Intro />
          <Salary />

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
