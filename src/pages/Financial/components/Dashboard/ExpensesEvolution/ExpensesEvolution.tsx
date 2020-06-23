import React from "react";
import Chart from "react-apexcharts";
import { ExpensesSeries } from "../../../data";

const ExpensesEvolution: React.FC<{ expenses: ExpensesSeries }> = ({ expenses }) => {
  const newData = expenses
    .map((chart) =>
      chart.data.map((day) => ({
        x: day.x,
        y: +day.y.reduce((acc, shops) => (acc += +shops[1]), 0).toFixed(2),
      }))
    )
    .flat();

  const expensesData = [
    {
      name: "Expenses",
      data: newData,
    },
  ];

  const options = {
    chart: {
      height: 350,
    },
    tooltip: { theme: "dark" },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      labels: {
        colors: "#fff",
      },
    },
    title: {
      align: "left",
      style: {
        color: "#fff",
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

  return (
    <>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Expenses
        <span style={{ marginLeft: "1rem", color: "var(--red)" }}>
          ${+newData.reduce((acc, value) => (acc += value.y), 0).toFixed(2)}
        </span>
      </h4>
      <Chart type="line" options={options} series={expensesData} />
    </>
  );
};

export default ExpensesEvolution;
