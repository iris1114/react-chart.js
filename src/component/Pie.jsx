import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { marketingBudget } from "../data";

const data = {
  labels: marketingBudget.map((plan) => plan.name),
  datasets: [
    {
      label: "# of Votes",
      data: marketingBudget.map((plan) => plan.percentage),
      backgroundColor: marketingBudget.map((plan) => plan.backgroundColor),
      borderColor: marketingBudget.map((plan) => plan.borderColor),
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Marketing Budget",
    },
  },
};

const PieChart = () => {
  return (
    <>
      <h1 className="title">Pie Chart</h1>
      <StyledPie>
        <Pie data={data} options={options} />
      </StyledPie>
    </>
  );
};

const StyledPie = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;

  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

export default PieChart;
