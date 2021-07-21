import React from "react";
import { Doughnut } from "react-chartjs-2";
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
    title: {
      display: true,
      text: "Marketing Budget",
    },
  },
};

const DoughnutChart = () => {
  return (
    <>
      <h1 className="title">Doughnut Chart</h1>
      <StyledDoughnut>
        <Doughnut data={data} options={options} />
      </StyledDoughnut>
    </>
  );
};

const StyledDoughnut = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;

  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

export default DoughnutChart;
