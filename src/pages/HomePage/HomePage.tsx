import { useEffect, useState } from 'react';
import { CircleGraphBox } from '../../components/CircleGraphBox/CircleGraphBox';
import { DataCard } from '../../components/DataCard/DataCard';
import { Flex } from '../../components/Flex/Flex';
import { Map } from '../../components/Map/Map';
import { info, enrolledStudents, map } from './style';
import { useContext } from 'react';
import MapContext from '../../contexts/MapContext';
import { api } from '../../services/api';

import graphIcon from '../../assets/icons/graph.png';

type Infos = {
  data: {
    type: string;
    id: number;
    attributes: {
      ied: {
        meanCategory: string;
        mean: number;
      };
      ird: {
        meanCategory: string;
        mean: number;
      };
      tdi: {
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
      idebIniciais: {
        mean: number;
        projection: number;
      };
      idebFinais: {
        mean: number;
        projection: number;
      };
      year: number;
      country?: string;
      region?: string;
    };
  };
};

export const HomePage = () => {
  const { regionState } = useContext(MapContext);
  const [infos, setInfos] = useState<Infos | null>(null);

  useEffect(() => {
    (async function () {
      let url =
        regionState === 'brazil'
          ? `home/country/${regionState}`
          : `home/region/${regionState}`;

      try {
        const { data } = await api.get(url);
        setInfos(data);
      } catch (error) {
        console.log('ERRO');
      }
    })();
  }, [regionState]);

  return (
    <Flex
      direction={'row'}
      style={{ backgroundColor: '#F1F4FA' }}
      align="center"
      justify="between"
    >
      <div className={info()}>
        <div className="infoBox">
          <div className={enrolledStudents()}>
            <p>Estudantes matriculados esse ano</p>
            <h1>16.431,430</h1>
          </div>
        </div>

        <div>
          <DataCard
            background="#8676FF"
            title="Ideb Anos Iniciais"
            imageUrl={graphIcon}
            data={
              infos ? String(infos?.data.attributes.idebIniciais.mean) : '--'
            }
          />
          <DataCard
            background="#8676FF"
            title="Ideb Anos Finais"
            imageUrl={graphIcon}
            data={infos ? String(infos?.data.attributes.idebFinais.mean) : '--'}
          />
          <DataCard
            background="#66C8FF"
            title="Distorção idade série"
            imageUrl={graphIcon}
            data={infos ? String(infos?.data.attributes.tdi.mean) : '--'}
          />
          <DataCard
            background="#FF9066"
            title="Complexidade gestão escolar"
            imageUrl={graphIcon}
            data={infos ? String(infos?.data.attributes.icg.mean) : '--'}
          />
        </div>

        <div
          style={{
            display: 'flex',
            gap: 21,
            flexDirection: 'row',
            padding: '30px 0px 0px 0px',
          }}
        >
          <CircleGraphBox
            value={infos ? Number(infos?.data.attributes.ied.mean) : 0}
            maxValue={6}
            fillColor={'#023AFF'}
            circleText={
              infos
                ? `${(
                    (Number(infos?.data.attributes.ied.mean) * 100) /
                    6
                  ).toFixed(1)}%`
                : '--'
            }
            title={'Esforço docente'}
            numericalData={Number(infos?.data.attributes.ied.mean)}
          />

          <CircleGraphBox
            value={infos ? Number(infos?.data.attributes.ird.mean) : 0}
            maxValue={4.5}
            fillColor={'#00B929'}
            circleText={
              infos
                ? `${(
                    (Number(infos?.data.attributes.ird.mean) * 100) /
                    4.5
                  ).toFixed(1)}%`
                : '--'
            }
            title={'Regularidade docente'}
            numericalData={Number(infos?.data.attributes.ird.mean)}
          />
        </div>
      </div>
      <div className={map()}>
        <Map />
      </div>
    </Flex>
  );
};
