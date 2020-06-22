import React from "react";
import Chart from "react-apexcharts";

const options = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "stepline",
  },

  title: {
    align: "left",
    style: {
      color: "#fff",
    },
  },
  markers: { size: 0 },
  legend: {
    horizontalAlign: "left",
    labels: {
      colors: "#fff",
    },
  },
  grid: {
    row: {
      colors: ["#111", "transparent"],
      opacity: 0.5,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
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

const series = [
  {
    name: "Balance",
    data: [9801, 9923, 9708, 9800, 10000, 10318, 10111, 10400, 10760, 11202, 11202],
  },
];

const BalanceEvolution = () => {
  return (
    <>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Bank Account <span style={{ color: "var(--mint)" }}>${series[0].data.slice(-1)[0]}</span>
      </h4>
      <Chart type="area" options={options} series={series} />
    </>
  );
};

export default BalanceEvolution;
