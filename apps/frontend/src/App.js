import React, { Fragment, useState } from "react";
import Header from "./components/header/Header";
import Ad from "./components/ads/Ad";

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

import gif from "./tate.gif";
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

    let yearArray = [];

    let salaryTotalBrutto = 0.0;
    let salaryArrayBrutto = [];

    let salaryTotalNet = 0.0;
    let salaryArrayNet = [];

    let salaryTotalSavings = 0.0;
    let salaryArraySavings = [];

    const yearsToBuyBugatti = BUGATTI_VEYRON_COST / salary;
    for (let year = 0; year < yearsToBuyBugatti; year++) {
      yearArray.push(Number(year));

      salaryTotalBrutto = salaryTotalBrutto + Number(salary);
      salaryArrayBrutto.push(salaryTotalBrutto);

      salaryTotalNet = salaryTotalNet + Number(salary) * 0.4;
      salaryArrayNet.push(salaryTotalNet);

      salaryTotalSavings = salaryTotalSavings + Number(salary) * 0.4 * 0.3;
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
          <div>
            <p>
              Are you a doctor? Or an engineer? Maybe a lawyer? You have
              well-educated parents, you went to the greatest universities, had
              the best GPAs?
            </p>
            <p>
              Seems like you've achieved everything you were told since you're a
              kid! You should be proudly prosper the rest of your life, but that
              ain't the case, init?
            </p>
            <p>
              You're willing to live in a big city in a huge apartment. You want
              your separete rooms for whatever hobbies you have, a huge balcony
              or maybe a terasse where you can grill.
            </p>

            <div className="form-container" onSubmit={handleSubmit}>
              <form className="form-salary">
                <span>Your brutto salary ($/year):</span>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={salary}
                  min="100"
                  onChange={handleSalary}
                />
                <button type="submit">Find out!</button>
              </form>
            </div>

            <Line
              className="chart"
              options={salaryOptions}
              data={salaryData}
              // plugins={
              //   [
              //     // {
              //     //   afterDatasetsDraw: drawSollzinsbindungLimit,
              //     // },
              //   ]
              // }
            />

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
        </div>
        <div className="child">
          <Ad />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
