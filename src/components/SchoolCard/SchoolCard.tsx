import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import location from '../../assets/icons/location.png';
import { Flex } from '../Flex/Flex';

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
  compare?: boolean;
  inep: string;
  phone: string;
  adress: string;
  adm: string;
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
  const { name, compare, inep, phone, adress, adm, idebIniciais, idebFinais } =
    props;

  return (
    <div className={info()}>
      <div className={schoolInfo()}>
        <Flex
          justify={'between'}
          css={{
            padding: '0 19px',
            span: {
              color: '$purple',
              fontWeight: 'bold',
            },
          }}
        >
          <p>{name || '----'}</p>
          {compare && (
            <Link to="/school/comparison/:schoolId">
              <span>comparar</span>
            </Link>
          )}
        </Flex>
        <div className={schoolData()}>
          <div className={schoolDataDescription()}>
            <label>Código INEP</label>
            <input type="text" value={inep || '----'} disabled />
          </div>
          <div className={schoolDataDescription()}>
            <label>Contato</label>
            <input type="text" value={phone || '----'} disabled />
          </div>
          <div className={schoolDataDescription()}>
            <label>Endereço</label>
            <div>
              {adress || '----'}
              <img src={location} alt="Location icon" width={20} />
            </div>
          </div>
          <div className={schoolDataDescription()}>
            <label>Adm</label>
            <input
              style={{ width: '516px' }}
              type="text"
              value={adm || '----'}
              disabled
            />
          </div>
        </div>
      </div>
      <div className={schoolInfo({ variant: 'ideb' })}>
        <p style={{ marginLeft: '1.3rem' }}>IDEB</p>
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
                {idebIniciais.mean
                  ? Number(idebIniciais.mean).toFixed(1)
                  : '--'}{' '}
                <span>
                  Meta{' '}
                  {idebIniciais.projection
                    ? Number(idebIniciais.projection).toFixed(1)
                    : '--'}
                </span>
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
                {idebFinais.mean ? Number(idebFinais.mean).toFixed(1) : '--'}{' '}
                <span>
                  Meta{' '}
                  {idebFinais.projection
                    ? Number(idebFinais.projection).toFixed(1)
                    : '--'}
                </span>
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
