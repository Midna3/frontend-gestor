import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import SearchContext from '../../contexts/SearchContext';
import { Line } from 'react-chartjs-2';

import { api } from '../../services/api';

import { GraphInfo } from '../../types/GraphInfo';

import { SchoolCard } from '../../components/SchoolCard/SchoolCard';
import 'react-circular-progressbar/dist/styles.css';
import { container, statistics, graph } from './style';
import { Flex } from '../../components/Flex/Flex';
ChartJS.register(...registerables);

export const SchoolPage = () => {
  const params = useParams();

  const { setSearchSecondSchool } = useContext(SearchContext);

  const [infos, setInfos] = useState<GraphInfo | null>(null);
  const [graphicsData, setGraphicsData] = useState<number[][]>([[0, 0, 0]]);
  const [graphicsLabels, setGraphicsLabels] = useState<string[]>([
    'Aguardando carregamento...',
  ]);
  const [dataFrom2019, setDataFrom2019] = useState<GraphInfo | null>(null);

  useEffect(() => {
    setSearchSecondSchool(false);
    (async function () {
      try {
        const { data } = await api.get(
          `panel/school/${params.schoolId}?year=2020`
        );
        setInfos(data);

        const dataFrom2019 = await api.get(
          `panel/school/${params.schoolId}?year=2019`
        );
        setDataFrom2019(dataFrom2019.data);

        const dataFrom2018 = await api.get(
          `panel/school/${params.schoolId}?year=2018`
        );

        const dataFrom2017 = await api.get(
          `panel/school/${params.schoolId}?year=2017`
        );

        const ied = [
          dataFrom2017.data.data.attributes.ied.mean,
          dataFrom2018.data.data.attributes.ied.mean,
          dataFrom2019.data.data.attributes.ied.mean,
          data.data.attributes.ied.mean,
        ];

        const icg = [
          dataFrom2017.data.data.attributes.icg.mean,
          dataFrom2018.data.data.attributes.icg.mean,
          dataFrom2019.data.data.attributes.icg.mean,
          data.data.attributes.icg.mean,
        ];

        const afd = [
          dataFrom2017.data.data.attributes.afd.mean,
          dataFrom2018.data.data.attributes.afd.mean,
          dataFrom2019.data.data.attributes.afd.mean,
          data.data.attributes.afd.mean,
        ];

        const graphicsData = [ied, icg, afd];
        const graphicsLabels = [
          'Índice de Esforço Docente',
          'Complexidade de Gestão Escolar',
          'Indicador de Adequação da Formação Docente',
        ];

        setGraphicsData(graphicsData);
        setGraphicsLabels(graphicsLabels);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.schoolId, setSearchSecondSchool]);

  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <div>
        <SchoolCard
          name={infos?.data.attributes.name || '----'}
          compare
          inep={infos ? `${infos?.data.attributes.inep}` : '----'}
          phone={
            infos?.data.attributes.phone
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
            mean: dataFrom2019?.data.attributes.idebIniciais.mean || 0,
            projection:
              dataFrom2019?.data.attributes.idebIniciais.projection || 0,
          }}
          idebFinais={{
            mean: dataFrom2019?.data.attributes.idebFinais.mean || 0,
            projection:
              dataFrom2019?.data.attributes.idebFinais.projection || 0,
          }}
        />
      </div>
      <div className={statistics()}>
        <h2 style={{ marginTop: '1rem' }}>Estatísticas</h2>
        <div className={graph()}>
          <div style={{ width: '70%' }}>
            {graphicsData.map((data, index) => (
              <Flex
                key={index}
                direction={'column'}
                gap={3}
                css={{ marginTop: '2rem' }}
              >
                <h2>{graphicsLabels[index]}</h2>
                <Line
                  data={{
                    labels: [2017, 2018, 2019, 2020],
                    datasets: [
                      {
                        label: '',
                        data: data,
                        backgroundColor: '#2D2FF0',
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
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
