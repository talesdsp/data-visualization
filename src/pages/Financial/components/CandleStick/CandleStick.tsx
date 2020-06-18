import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "line",
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
    style: {
      color: "#fff",
    },
  },
  stroke: {
    width: [1, 3, 3],
  },
  legend: {
    labels: {
      colors: "#fff",
    },
  },

  tooltip: {
    shared: true,
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
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};

const CandleLineChart = ({ chart }) => {
  return <Chart options={options} series={chart} />;
};

export default CandleLineChart;
