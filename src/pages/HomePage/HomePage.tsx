import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
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
        <div className={graphBox()}>
          <div className={circleGraph()}>
            <CircularProgressbarWithChildren
              value={27}
              maxValue={100}
              strokeWidth={5}
              styles={{
                text: {
                  fontFamily: 'sans-serif',
                  fill: '#023AFF',
                  fontWeight: 500,
                },
                trail: { stroke: '#DBDFF1' },
                path: {
                  stroke: '#023AFF',
                },
              }}
            >
              <div className={percent()}>
                <span>27%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div>
            <span>92,980</span>
            <p>Esforço docente</p>
          </div>
        </div>

        <div className={graphBox()}>
          <div className={circleGraph()}>
            <CircularProgressbarWithChildren
              value={67}
              maxValue={100}
              strokeWidth={5}
              styles={{
                text: {
                  fontFamily: 'sans-serif',
                  fill: '#00B929',
                  fontWeight: 500,
                },
                trail: { stroke: '#DBDFF1' },
                path: {
                  stroke: '#00B929',
                },
              }}
            >
              <div className={percent()}>
                <span>67%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div>
            <span>22,652</span>
            <p>Regularidade docente</p>
          </div>
        </div>
      </div>
    </div>
  );
};
