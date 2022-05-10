import React from 'react';
/* import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto' */
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

export type DataProp = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

 type ChartDataProp = {
  Data: DataProp;
}

export default function LineChart(props: ChartDataProp) {
  return (
    <div>
      <Line data={props.Data} />
    </div>
  );
}