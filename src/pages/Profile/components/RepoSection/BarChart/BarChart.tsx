import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { chartFill, colors } from "../../chart-utils";

const BarChart = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["value"]}
    indexBy="id"
    margin={{ top: 55, right: 80, bottom: 55, left: 0 }}
    padding={0.3}
    colors={colors}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={chartFill}
    borderColor={"#eee"}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="#000"
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        textColor: "#000",
        direction: "column",
        itemTextColor: "#000",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default BarChart;
