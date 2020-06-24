import React from "react";
import Chart from "react-apexcharts";

const CandleStick = ({ chart }) => {
  const options = {
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
      onItemClick: {
        toggleDataSeries: false,
      },
    },

    tooltip: {
      theme: "dark",
    },

    labels: chart.days,
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

  return <Chart options={options} series={chart.series} />;
};

export default CandleStick;
