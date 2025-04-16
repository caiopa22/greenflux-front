import React from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  Title,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const getRandomData = (numPoints = 10) => {
  return Array.from({ length: numPoints }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    r: Math.floor(Math.random() * 20) + 5,
  }));
};

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: 'Random Bubble Data',
        data: getRandomData(),
        backgroundColor: 'rgba(5, 96, 58, 0.5)',
        borderColor: 'rgb(11, 189, 118)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sample Bubble Chart with Random Data',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.4)', // change grid line color
          lineWidth: 1, // line thickness
          drawBorder: true,
          borderColor: 'rgba(100, 100, 100, 0.4)', // axis line color
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
          lineWidth: 1,
          drawBorder: true,
          borderColor: 'rgba(100, 100, 100, 0.4)',
        },
      },
    },
  };

  return <Bubble data={data} options={options} />;
};

export default BubbleChart;
