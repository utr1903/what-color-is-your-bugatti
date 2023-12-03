import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

import "./SalaryLineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalaryLineChart = (props) => {
  const yearArray = props.salaries.yearArray;
  const salaryArrayBrutto = props.salaries.salaryArrayBrutto;
  const salaryArrayNet = props.salaries.salaryArrayNet;
  const salaryArraySavings = props.salaries.salaryArraySavings;

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
  );
};

export default SalaryLineChart;
