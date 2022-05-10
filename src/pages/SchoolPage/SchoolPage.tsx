import React, { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { LineChart } from '../../components/LineChart/LineChart';
import 'react-circular-progressbar/dist/styles.css';

import {
  container,
  statistics,
  graph,
  info,
  schoolInfo,
  schoolData,
  schoolDataDescription,
  circles,
  idebCircle,
  rating,
} from './style';

import { Data } from '../../mocks/Data';

export const SchoolPage = () => {
  const [data, setData] = useState({
    labels: Data.matriculados.map((matriculado) => matriculado.year),
    datasets: [
      {
        label: 'Matriculas',
        data: Data.matriculados.map((matriculado) => matriculado.amount),
        backgroundColor: '#2D2FF0',
        lineTension: 0.5,
        borderColor: '#2D2FF0',
        pointBorderColor: '#2D2FF0',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#2D2FF0',
        pointHoverBorderColor: '#2D2FF0',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'Docentes',
        data: Data.docentes.map((docente) => docente.amount),
        backgroundColor: '#E80054',
        lineTension: 0.5,
        borderColor: '#E80054',
        pointBorderColor: '#E80054',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#E80054',
        pointHoverBorderColor: '#E80054',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  });

  const [valueStart, setValueStart] = useState(0);
  const [valueFinish, setValueFinish] = useState(0);
  const max = 10;

  useEffect(() => {
    setValueStart(5.9);
    setValueFinish(10);
  }, []);

  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <div className={info()}>
        <div className={schoolInfo()}>
          <p>Escola Manoel Limão</p>
          <div className={schoolData()}>
            <div className={schoolDataDescription()}>
              <label>Código INEP</label>
              <input type="text" value="#876370" disabled />
            </div>
            <div className={schoolDataDescription()}>
              <label>Contato</label>
              <input type="text" value="(81) 91628-1728" disabled />
            </div>
            <div className={schoolDataDescription()}>
              <label>Endereço</label>
              <div>
                Esquina com a Rua do Vazio
                <img src="/Location.png" width={20} />
              </div>
            </div>
            <div className={schoolDataDescription()}>
              <label>Adm</label>
              <input type="text" value="Estadual" disabled />
            </div>
            <div className={schoolDataDescription()}>
              <label>Modalidade</label>
              <input type="text" value="Integral" disabled />
            </div>
          </div>
        </div>
        <div className={schoolInfo({ variant: 'ideb' })}>
          <p>IDEB</p>
          <div className={circles()}>
            <div className={idebCircle()}>
              <CircularProgressbarWithChildren
                value={valueStart}
                maxValue={max}
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
                  5,9 <span>Meta 5,5</span>
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
                value={valueFinish}
                maxValue={max}
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
                  10 <span>Meta 8,5</span>
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
      <div className={statistics()}>
        <p>Estatisticas</p>
        <h1>Matriculas e Docentes</h1>
        <div className={graph()}>
          <div style={{ width: '80%' }}>
            <LineChart Data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
