import React from 'react';
import { dataCard, dataBox, icon } from './style';

interface IProps {
  background: string;
  title: string;
  data: string;
}

export default (props: IProps) => {
  const { background, title, data } = props;

  return (
    <div className={dataCard()}>
      <div className={icon()} style={{ backgroundColor: `${background}` }} />
      <div>
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <p>{data}</p>
      </div>
    </div>
  );
};
