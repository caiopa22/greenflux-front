import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const generateRandomRadarData = (labels) => {
  return labels.map(() => Math.floor(Math.random() * 100));
};

const RadarChart = () => {
  const labels = ['Speed', 'Agility', 'Strength', 'Endurance', 'Flexibility', 'Balance'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Athlete A',
        data: generateRandomRadarData(labels),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Radar Chart Example',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(100, 100, 100, 0.3)', // spokes
          lineWidth: 1,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // circular grid lines
          lineWidth: 1,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: {
          font: {
            size: 14,
          },
          color: 'gray',
        },
        ticks: {
          backdropColor: 'transparent',
          color: 'gray',
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
};

export default RadarChart;
