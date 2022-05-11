import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import CircleGraphBox from '../../components/CircleGraphBox/CircleGraphBox';
import DataCard from '../../components/DataCard/DataCard';
import {
  container,
  dataCard,
  icon,
  dataBox,
  enrolledStudents,
  circleGraph,
  graphBox,
  percent,
} from './style';

export const HomePage = () => {
  return (
    <div className={container()}>
      <div className="infoBox">
        <div className={enrolledStudents()}>
          <p>Estudantes matriculados hoje</p>
          <h1>16.431,430</h1>
        </div>
      </div>

      <div className={dataBox()}>
        <DataCard background="#8676FF" title="Média Ideb" data="xxx,xxx" />
        <DataCard
          background="#66C8FF"
          title="Distorção idade série"
          data="500,65"
        />
        <DataCard
          background="#FF9066"
          title="Complexidade gestão escolar"
          data="48,430,039"
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: 21,
          flexDirection: 'row',
          padding: '95px 0px 0px 0px',
        }}
      >
        <CircleGraphBox
          value={27}
          maxValue={100}
          fillColor={'#023AFF'}
          circleText={'27%'}
          title={'Esforço docente'}
          numericalData={92.98}
        />

        <CircleGraphBox
          value={67}
          maxValue={100}
          fillColor={'#00B929'}
          circleText={'67%'}
          title={'Regularidade docente'}
          numericalData={22.652}
        />
      </div>
    </div>
  );
};
