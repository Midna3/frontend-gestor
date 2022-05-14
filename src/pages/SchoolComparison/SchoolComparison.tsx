import 'react-circular-progressbar/dist/styles.css';

import { container } from './style';

import { SchoolCard } from '../../components/SchoolCard/SchoolCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

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
    };
  };
};

export const SchoolComparison = () => {
  const params = useParams();
  const [infos, setInfos] = useState<Infos | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get(
          `panel/school/${params.schoolId}?year=2019`
        );
        setInfos(data);
      } catch (error) {
        console.log('ERRO');
      }
    })();
    console.log(params.schoolId);
  }, [params.schoolId]);
  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <SchoolCard
        name={infos?.data.attributes.name || '----'}
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
        modality={'Regular'}
        idebFirstYear={infos?.data.attributes.idebIniciais.mean || 0}
        idebLastYear={infos?.data.attributes.idebFinais.mean || 0}
      />

      <SchoolCard
        name={'Escola Barros Carvalho'}
        inep={'#666'}
        phone={'(81) 3229-6512'}
        adress={'Esquina com a casa de Satanás - Inferno'}
        adm={'Estadual'}
        modality={'Ruim'}
        idebFirstYear={3.1}
        idebLastYear={2.8}
      />
    </div>
  );
};
