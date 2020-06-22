import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    height: 350,
    type: "area",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  legend: {
    labels: {
      colors: "#fff",
    },
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
    style: {
      color: "#fff",
    },
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    opposite: true,
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};

const ExpensesEvolution = ({ series }) => {
  return <Chart options={options} series={series} />;
};

export default ExpensesEvolution;
