import React from "react";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";
import { brandAssessment } from "../data";

const data = {
  labels: [
    "Price",
    "Diversity",
    "Appearance",
    "Durability",
    "Quality",
    "Post-Sales Support",
    "Marketing",
  ],
  datasets: brandAssessment.map((brand) => {
    return {
      label: brand.name,
      data: [
        brand.price,
        brand.diversity,
        brand.appearance,
        brand.durability,
        brand.quality,
        brand.postSalesSupport,
        brand.marketing,
      ],
      backgroundColor: brand.backgroundColor,
      borderColor: brand.borderColor,
      borderWidth: 1,
    };
  }),
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Brand Assessment",
    },
  },
};

const RadarChart = () => {
  return (
    <>
      <h1 className="title">Radar Chart</h1>
      <StyledRadar>
        {brandAssessment && <Radar data={data} options={options} />}
      </StyledRadar>
    </>
  );
};

const StyledRadar = styled.div`
  width: 550px;
  height: 550px;
  margin: auto;

  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

export default RadarChart;
