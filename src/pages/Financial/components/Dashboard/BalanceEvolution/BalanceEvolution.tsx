import React from "react"
import Chart from "react-apexcharts"
import CountUp from "react-countup"

const options = {
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  title: {
    align: "left",
    style: {
      color: "#fff",
    },
  },
  markers: {
    size: 4,
  },
  legend: {
    horizontalAlign: "left",
    labels: {
      colors: "#fff",
    },
  },
  colors: ["springgreen"],
  grid: {
    show: 0,
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
  chart: {
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
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
      <h4 style={{ display: "flex", justifyContent: "space-between", margin: "0 15px" }}>
        <span
          style={{
            color: "white",
            backgroundColor: "#03B550",
            borderRadius: "5%",
            padding: "5px",
            fontSize: "21px",
          }}
        >
          <CountUp
            duration={2.5}
            decimals={2}
            start={series[0].data.slice(-1)[0] / 1.3}
            end={series[0].data.slice(-1)[0]}
            prefix="$"
          />
        </span>
        Balance
      </h4>
      <Chart height={window.innerWidth * 0.17} type="area" options={options} series={series} />
    </>
  )
}

export default BalanceEvolution
