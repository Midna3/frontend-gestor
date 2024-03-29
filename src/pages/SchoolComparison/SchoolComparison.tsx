import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import SearchContext from '../../contexts/SearchContext';

import { GraphInfo } from '../../types/GraphInfo';
import { LineChart } from '../../components/LineChart/LineChart';

import { SchoolCard } from '../../components/SchoolCard/SchoolCard';
import { container, graph, statistics } from './style';
import 'react-circular-progressbar/dist/styles.css';
import { Flex } from '../../components/Flex/Flex';
import { Line } from 'react-chartjs-2';

export const SchoolComparison = () => {
  const params = useParams();
  const {
    setSearchSecondSchool,
    secondSchool,
    setSecondSchool,
    secondSchoolGraphicsData,
    setSecondSchoolGraphicsData,
    secondSchoolDataFrom2019,
  } = useContext(SearchContext);

  const [infos, setInfos] = useState<GraphInfo | null>(null);
  const [graphicsData, setGraphicsData] = useState<number[][]>([[0, 0, 0]]);
  const [graphicsLabels, setGraphicsLabels] = useState<string[]>([
    'Aguardando carregamento...',
  ]);
  const [dataFrom2019, setDataFrom2019] = useState<GraphInfo | null>(null);

  useEffect(() => {
    setSearchSecondSchool(true);
    setSecondSchool(null);
    setSecondSchoolGraphicsData([[0, 0, 0]]);

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
  }, [
    params.schoolId,
    setSearchSecondSchool,
    setSecondSchool,
    setSecondSchoolGraphicsData,
  ]);

  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <div>
        <SchoolCard
          name={infos?.data.attributes.name || '----'}
          inep={infos ? `${infos?.data.attributes.inep}` : '----'}
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
        <div className={statistics()}>
          <p>Estatistícas</p>
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

      <div>
        <SchoolCard
          name={secondSchool?.data.attributes.name || '----'}
          inep={secondSchool ? `${secondSchool?.data.attributes.inep}` : '----'}
          phone={
            secondSchool
              ? `(${
                  secondSchool?.data.attributes.ddd
                }) ${secondSchool?.data.attributes.phone.slice(
                  0,
                  4
                )}-${secondSchool?.data.attributes.phone.slice(4, 8)}`
              : '----'
          }
          adress={secondSchool?.data.attributes.address || '----'}
          adm={secondSchool?.data.attributes.adm || '----'}
          idebIniciais={{
            mean:
              secondSchoolDataFrom2019?.data.attributes.idebIniciais.mean || 0,
            projection:
              secondSchoolDataFrom2019?.data.attributes.idebIniciais
                .projection || 0,
          }}
          idebFinais={{
            mean:
              secondSchoolDataFrom2019?.data.attributes.idebFinais.mean || 0,
            projection:
              secondSchoolDataFrom2019?.data.attributes.idebFinais.projection ||
              0,
          }}
        />
        <div className={statistics()}>
          <p>Estatistícas</p>
          {secondSchoolGraphicsData.map((data, index) => (
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
  );
};
