import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "candlestick",
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
    shared: false,
    theme: "dark",
    y: {
      title: "",
      formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        return `o: ${series[0][0]}\n
        h:${series[0][1]}\n
        l:${series[0][2]}\n
        c:${series[0][3]}
        `;
      },
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
