import React from 'react';
import { dataCard, icon } from './style';

export type DataProp = {
  background: string;
  title: string;
  imageUrl: string;
  data: string;
};

export const DataCard = (props: DataProp) => {
  const { background, title, imageUrl, data } = props;

  return (
    <div className={dataCard()}>
      <div className={icon()} style={{ backgroundColor: `${background}` }}>
        <img src={imageUrl} alt="Icon" />
      </div>
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
