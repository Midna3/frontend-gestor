import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart } from '../../components/LineChart/LineChart';
import 'react-circular-progressbar/dist/styles.css';
import { api } from '../../services/api';

import { container, statistics, graph } from './style';

import { Data } from '../../mocks/Data';
import { SchoolCard } from '../../components/SchoolCard/SchoolCard';

type Infos = {
  data: {
    type: string;
    id: 1;
    attributes: {
      name: string;
      inep: number;
      address: string;
      ddd: string;
      phone: string;
      matriculas: number | null;
      docentes: number | null;
      year: number;
      adm: string;
      idebIniciais: {
        mean: number;
        projection: number;
      };
      idebFinais: {
        mean: number;
        projection: number;
      };
      ied: {
        meanCategory: string;
        mean: number;
      };
      icg: {
        meanCategory: string;
        mean: number;
      };
      afd: {
        meanCategory: string;
        mean: number;
      };
    };
  };
};

export const SchoolPage = () => {
  const params = useParams();

  const [infos, setInfos] = useState<Infos | null>(null);
  const [dataGraph, setDataGraph] = useState({
    labels: [2017, 2018, 2019],
    datasets: [
      {
        label: 'Matriculas',
        data: [0, 0, 0],
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
        data: [0, 0, 0],
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

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get(
          `panel/school/${params.schoolId}?year=2019`
        );
        const d2018 = await api.get(
          `panel/school/${params.schoolId}?year=2018`
        );
        const d2017 = await api.get(
          `panel/school/${params.schoolId}?year=2017`
        );

        const years = [2017, 2018, 2019];
        const matriculados = [
          d2017.data.data.attributes.matriculas || 0,
          d2018.data.data.attributes.matriculas || 0,
          data.data.attributes.matriculas || 0,
        ];

        const docentes = [
          d2017.data.data.attributes.docentes || 0,
          d2018.data.data.attributes.docentes || 0,
          data.data.attributes.docentes || 0,
        ];
        const newGraph = {
          labels: years,
          datasets: [
            {
              label: 'Matriculas',
              data: matriculados,
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
              data: docentes,
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
        };
        setDataGraph(newGraph);
        setInfos(data);
      } catch (error) {
        console.log('ERRO');
      }
    })();
    console.log(params.schoolId);
  }, [params.schoolId]);

  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <div>
        <SchoolCard
          name={infos?.data.attributes.name || '----'}
          compare
          inep={infos ? `#${infos?.data.attributes.inep}` : '----'}
          phone={
            infos
              ? `(${
                  infos?.data.attributes.ddd
                }) ${infos?.data.attributes.phone.slice(
                  0,
                  4
                )}-${infos?.data.attributes.phone.slice(4, 8)}`
              : '----'
          }
          adress={infos?.data.attributes.address || '----'}
          adm={infos?.data.attributes.adm || '----'}
          idebIniciais={{
            mean: infos?.data.attributes.idebIniciais.mean || 0,
            projection: infos?.data.attributes.idebIniciais.projection || 0,
          }}
          idebFinais={{
            mean: infos?.data.attributes.idebFinais.mean || 0,
            projection: infos?.data.attributes.idebFinais.projection || 0,
          }}
        />
      </div>
      <div className={statistics()}>
        <p>Estatisticas</p>
        <h1>Matriculas e Docentes</h1>
        <div className={graph()}>
          <div style={{ width: '80%' }}>
            <LineChart Data={dataGraph} />
          </div>
        </div>
      </div>
    </div>
  );
};
