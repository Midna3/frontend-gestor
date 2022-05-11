import React from 'react';
import { dataCard, icon } from './style';

export type DataProp = {
  background: string;
  title: string;
  data: string;
};

export const DataCard = (props: DataProp) => {
  const { background, title, data } = props;

  return (
    <div className={dataCard()}>
      <div className={icon()} style={{ backgroundColor: `${background}` }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <p>{data}</p>
      </div>
    </div>
  );
};
