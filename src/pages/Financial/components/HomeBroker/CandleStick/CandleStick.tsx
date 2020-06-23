import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "candlestick",
  },
  title: {
    text: "ABCDE-4",
    align: "left",
    style: {
      color: "#fff",
    },
  },
  stroke: {
    width: [1, 3, 3, 3, 3, 3, 3],
  },
  legend: {
    labels: {
      colors: "#fff",
    },
  },

  tooltip: {
    theme: "dark",
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
    tooltip: { enabled: true },
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};

const CandleStick = ({ chart }) => {
  return <Chart options={options} series={chart} />;
};

export default CandleStick;
