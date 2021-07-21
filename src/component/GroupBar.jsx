import { Bar } from "react-chartjs-2";

const data = {
  labels: ["John", "James", "Alice", "David", "Kevin", "Ivy"],
  datasets: [
    {
      label: "Sales in 2019",
      data: [1000, 2000, 500, 3000, 2500, 1500],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Sales in 2020",
      data: [2000, 3000, 2500, 4000, 2000, 2000],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ],
};

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Monthly Sales by Manager",
    },
  },
};

const GroupBar = () => {
  return (
    <>
      <h1 className="title">Group Bar Chart</h1>
      <Bar data={data} options={options} />
    </>
  );
};

export default GroupBar;
