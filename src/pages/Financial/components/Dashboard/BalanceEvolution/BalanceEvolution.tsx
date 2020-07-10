import React from "react"
import Chart from "react-apexcharts"
import CountUp from "react-countup"

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
}

const series = [
  {
    name: "Balance",
    data: [9801, 9923, 9708, 9800, 10000, 10318, 10111, 10400, 10760, 11202, 11202],
  },
]

const BalanceEvolution = () => {
  return (
    <>
      <h4 style={{ display: "flex", justifyContent: "start", marginLeft: "15px" }}>
        Bank Account
        <span style={{ marginLeft: "1rem", color: "var(--mint)" }}>
          <CountUp
            duration={2.5}
            decimals={2}
            start={series[0].data.slice(-1)[0] / 1.3}
            end={series[0].data.slice(-1)[0]}
            prefix="$"
          />
        </span>
      </h4>
      <Chart type="area" options={options} series={series} />
    </>
  )
}

export default BalanceEvolution
