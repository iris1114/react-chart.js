import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "taipei",
      data: [50000, 30000, 25000, 15000, 20000],
      fill: false,
      backgroundColor: "rgba(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "malaysia",
      data: [10000, 40000, 15000, 5000, 30000],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Different Country Monthly Sales",
    },
  },
};

const LineChart = () => {
  return (
    <>
      <h1 className="title">Line Chart</h1>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
