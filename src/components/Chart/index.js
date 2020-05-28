import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import API from "../../services/api";
import styles from "./index.module.css";

export default function Chart({ data, country }) {
  const [dailyData, updateData] = useState();

  useEffect(() => {
    API.getDailyCases()
      .then(({ data }) => {
        updateData(data);
      })
      .catch();
  }, []);

  return (
    <div className={styles.container}>
      {country ? <BarChart country={country} data={data} /> : <LineChart dailyData={dailyData} />}
    </div>
  );
}

const LineChart = ({ dailyData }) => {
  if (!dailyData) {
    return null;
  }
  return dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
};
const BarChart = ({ data: { confirmed, deaths, recovered }, country }) => (
  <Bar
    data={{
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          data: [confirmed.value, deaths.value, recovered.value],
          label: "People",
          backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
          fill: true,
        },
      ],
    }}
    options={{
      legend: { display: false },
      title: { display: true, text: "Current state in " + country },
    }}
  />
);
