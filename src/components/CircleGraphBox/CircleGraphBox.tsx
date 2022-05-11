import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { circleGraph, graphBox, percent } from './style';

interface IProps {
  value: number;
  maxValue: number;
  fillColor: string;
  circleText: string;
  title: string;
  numericalData: number;
}

export default (props: IProps) => {
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
      <div>
        <span>{numericalData}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};
