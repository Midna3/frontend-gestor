import { globalStyles } from './stitches.config';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';
import { SchoolPage } from './pages/SchoolPage/SchoolPage';

function App() {
  globalStyles();

  return (
    <>
      <Header />
      <SchoolPage />
      <Map />
    </>
  );
}

export default App;
