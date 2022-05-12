import 'react-circular-progressbar/dist/styles.css';

import { container } from './style';

import { SchoolCard } from '../../components/SchoolCard/SchoolCard';

export const SchoolComparison = () => {
  return (
    <div className={container()} style={{ backgroundColor: '#F1F4FA' }}>
      <SchoolCard
        schoolName={'Escola Leal de Barros'}
        inepID={'#86686962'}
        contact={'(81) 3342-7412'}
        adress={'Rua da casa de carai - Engenho do Meio'}
        adm={'Estadual'}
        modality={'Regular'}
        idebFirstYear={7.2}
        idebLastYear={5.6}
      />

      <SchoolCard
        schoolName={'Escola Barros Carvalho'}
        inepID={'#666'}
        contact={'(81) 3229-6512'}
        adress={'Esquina com a casa de Satanás - Inferno'}
        adm={'Estadual'}
        modality={'Ruim'}
        idebFirstYear={3.1}
        idebLastYear={2.8}
      />
    </div>
  );
};
