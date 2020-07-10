import React from "react"
import Chart from "react-apexcharts"
import CountUp from "react-countup"
import { ExpensesSeries } from "../../../data"

const ExpensesEvolution: React.FC<{ expenses: ExpensesSeries }> = ({ expenses }) => {
  const newData = expenses
    .map((chart) =>
      chart.data.map((day) => ({
        x: day.x,
        y: +day.y.reduce((acc, shops) => (acc += +shops[1]), 0).toFixed(2),
      }))
    )
    .flat()

  const expensesData = [
    {
      name: "Expenses",
      data: newData,
    },
  ]

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
    colors: ["#f08700"],
    title: {
      align: "left",
      style: {
        color: "#fff",
      },
    },
    markers: {
      size: 4,
    },
    grid: {
      row: {
        colors: ["#111", "transparent"],
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
  }

  return (
    <>
      <h4
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "15px",
        }}
      >
        Expenses
        <span style={{ marginLeft: "1rem", color: "var(--orange)" }}>
          <CountUp
            duration={2.5}
            decimals={2}
            start={+newData.reduce((acc, value) => (acc += value.y), 0) / 1.3}
            end={+newData.reduce((acc, value) => (acc += value.y), 0).toFixed(2)}
            prefix="$"
          />
        </span>
      </h4>
      <Chart type="line" options={options} series={expensesData} />
    </>
  )
}

export default ExpensesEvolution
