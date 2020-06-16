import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { chartFill, colors } from "../../chart-utils";

const PieChart = ({ data }) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ left: -70, top: 55, bottom: 55 }}
      innerRadius={0.1}
      padAngle={2}
      cornerRadius={0}
      colors={colors}
      enableRadialLabels={false}
      slicesLabelsTextColor="#000"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 16,
        },
      ]}
      fill={chartFill}
      legends={[
        {
          anchor: "right",
          direction: "column",
          itemWidth: 80,
          itemHeight: 21,
          itemTextColor: "#333",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
