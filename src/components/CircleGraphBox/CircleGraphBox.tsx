import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { circleGraph, graphBox, percent } from './style';

export type DataProp = {
  value: number;
  maxValue: number;
  fillColor: string;
  circleText: string;
  title: string;
  numericalData: number | null;
};

export const CircleGraphBox = (props: DataProp) => {
  const { value, maxValue, fillColor, circleText, title, numericalData } =
    props;

  return (
    <div className={graphBox()}>
      <div className={circleGraph()}>
        <CircularProgressbarWithChildren
          value={value}
          maxValue={maxValue}
          strokeWidth={5}
          styles={{
            text: {
              fontFamily: 'sans-serif',
              fill: `${fillColor}`,
              fontWeight: 500,
            },
            trail: { stroke: '#DBDFF1' },
            path: {
              stroke: `${fillColor}`,
            },
          }}
        >
          <div className={percent()}>
            <span>{circleText}</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <span>{numericalData ? numericalData : '--'}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};
