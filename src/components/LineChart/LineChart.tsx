import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'react-circular-progressbar/dist/styles.css';
ChartJS.register(...registerables);

export type DataProp = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
  }[];
};

type ChartDataProp = {
  Data: DataProp;
};

export const LineChart = (props: ChartDataProp) => {
  return (
    <div>
      <Line data={props.Data} />
    </div>
  );
};
