import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getData } from "../api";

const VerticalBar = () => {
  const [chart, setChart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let salaries = [];
    let names = [];
    setIsLoading(true);
    getData()
      .then((result) => {
        console.log(result);
        for (const person of result) {
          salaries.push(parseInt(person.employee_salary, 10));
          names.push(person.employee_name);
        }

        setChart({
          labels: names,
          datasets: [
            {
              label: "Employee Salaries",
              data: salaries,
              backgroundColor: "rgba(75, 192, 192, 0.2)",

              borderColor: ["rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
      title: {
        display: true,
        text: "Employee Salaries",
      },
    },
  };

  return (
    <div className="bar">
      <h1 className="title">Vertical Bar Chart by pulling data from the API</h1>

      {isLoading ? (
        <div className="text-center">loading...</div>
      ) : error ? (
        <div className="text-center">
          <p>{error} </p>
          <p>Too many requests. Please refresh again.</p>
        </div>
      ) : (
        <Bar data={chart} options={options} />
      )}
    </div>
  );
};

export default VerticalBar;

// "rgba(255, 99, 132, 0.2)",
// "rgba(54, 162, 235, 0.2)",
// "rgba(255, 206, 86, 0.2)",
// "rgba(75, 192, 192, 0.2)",
// "rgba(153, 102, 255, 0.2)",
// "rgba(255, 159, 64, 0.2)",
