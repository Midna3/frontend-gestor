import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import location from '../../assets/icons/location.png';

import {
  info,
  schoolInfo,
  schoolData,
  schoolDataDescription,
  circles,
  idebCircle,
  rating,
} from './style';

export type DataProp = {
  name: string;
  inep: string;
  phone: string;
  adress: string;
  adm: string;
  modality: string;
  idebIniciais: {
    mean: number;
    projection: number;
  };
  idebFinais: {
    mean: number;
    projection: number;
  };
};

export const SchoolCard = (props: DataProp) => {
  const { name, inep, phone, adress, adm, modality, idebIniciais, idebFinais } =
    props;

  return (
    <div className={info()}>
      <div className={schoolInfo()}>
        <p>{name}</p>
        <div className={schoolData()}>
          <div className={schoolDataDescription()}>
            <label>Código INEP</label>
            <input type="text" value={inep} disabled />
          </div>
          <div className={schoolDataDescription()}>
            <label>Contato</label>
            <input type="text" value={phone} disabled />
          </div>
          <div className={schoolDataDescription()}>
            <label>Endereço</label>
            <div>
              {adress}
              <img src={location} width={20} />
            </div>
          </div>
          <div className={schoolDataDescription()}>
            <label>Adm</label>
            <input type="text" value={adm} disabled />
          </div>
          <div className={schoolDataDescription()}>
            <label>Modalidade</label>
            <input type="text" value={modality} disabled />
          </div>
        </div>
      </div>
      <div className={schoolInfo({ variant: 'ideb' })}>
        <p>IDEB</p>
        <div className={circles()}>
          <div className={idebCircle()}>
            <CircularProgressbarWithChildren
              value={idebIniciais.mean}
              maxValue={10}
              strokeWidth={12}
              styles={{
                text: {
                  fontFamily: 'sans-serif',
                  fill: '#3A36DB',
                  fontWeight: 500,
                },
                trail: { stroke: '#fff' },
                path: {
                  stroke: '#3A36DB',
                },
              }}
            >
              <div className={rating()}>
                {idebIniciais.mean} <span>Meta {idebIniciais.projection}</span>
              </div>
            </CircularProgressbarWithChildren>
            <p
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#06152B',
                marginTop: 10,
              }}
            >
              Anos
              <br />
              Iniciais
            </p>
          </div>
          <div className={idebCircle()}>
            <CircularProgressbarWithChildren
              value={idebFinais.mean}
              maxValue={10}
              strokeWidth={12}
              styles={{
                text: {
                  fontFamily: 'sans-serif',
                  fill: '#3A36DB',
                  fontWeight: 500,
                },
                trail: { stroke: '#fff' },
                path: {
                  stroke: '#3A36DB',
                },
              }}
            >
              <div className={rating()}>
                {idebFinais.mean} <span>Meta {idebFinais.projection}</span>
              </div>
            </CircularProgressbarWithChildren>
            <p
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#06152B',
                marginTop: 10,
              }}
            >
              Anos
              <br />
              Finais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
