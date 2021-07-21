import { Bar } from "react-chartjs-2";
import { popularTech } from "../data";

const data = {
  labels: popularTech.map((lang) => lang.name),
  datasets: [
    {
      label: "ranking",
      data: popularTech.map((lang) => lang.percentage),
      backgroundColor: ["rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "The popularity of Programming Language (Github) Ranking 2021",
    },
  },
};

const HorizontalBar = () => {
  return (
    <>
      <h1 className="title">Horizontal Bar Chart</h1>
      <Bar data={data} options={options} />
    </>
  );
};

export default HorizontalBar;
