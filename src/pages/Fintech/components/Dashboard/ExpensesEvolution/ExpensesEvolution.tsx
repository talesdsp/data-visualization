import React from "react"
import Chart from "react-apexcharts"
import CountUp from "react-countup"
import { ExpensesSeries } from "../../../data"

const ExpensesEvolution: React.FC<{ expenses: ExpensesSeries }> = ({ expenses }) => {
  const newData = expenses
    .map((chart) =>
      chart.data.map((day) => -day.y.reduce((acc, shops) => (acc += +shops[1]), 0).toFixed(2))
    )
    .flat()

  const expensesData = [
    {
      name: "Expenses",
      data: newData,
    },
  ]

  const days = expenses.map((chart) => chart.data.map((day) => day.x.toISOString())).flat()

  const options = {
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
    colors: ["red"],
    chart: {
      offsetY: 10,
      toolbar: {
        show: true,
        tools: {
          download: 0,
          selection: 1,
          zoom: 1,
          zoomin: 1,
          zoomout: 1,
          pan: 1,
        },
        autoSelected: "zoom",
      },
    },
    grid: {
      show: 0,
    },
    xaxis: {
      type: "datetime",
      categories: days,
      position: "top",
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
      <Chart
        height={window.innerWidth * 0.17}
        type="area"
        options={options}
        series={expensesData}
      />
      <h4
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          margin: "0 15px",
        }}
      >
        <span
          style={{
            fontSize: "21px",
            color: "white",
            borderRadius: "5%",
            backgroundColor: "var(--red)",
            padding: "5px",
          }}
        >
          <CountUp
            duration={2.5}
            decimals={2}
            start={+newData.reduce((acc, value) => (acc += value), 0) / 1.3}
            end={+newData.reduce((acc, value) => (acc += value), 0).toFixed(2)}
            prefix="$"
          />
        </span>
        Expenses
      </h4>
    </>
  )
}

export default ExpensesEvolution
