import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ data, currency }) => {
  let delayed;
  return (
    <Line
      data={data}
      options={{
        radius: 5,
        hoverRadius: 12,
        hitRadius: 15,
        tension: 0.1,
        responsive: true,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 10 + context.datasetIndex * 5;
            }
            return delay;
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) =>
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency || "USD",
                }).format(value),
            },
          },
          x: {
            ticks: {
              callback: (value) => `${data.labels[value].substring(0, 5)}`,
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
