import { globalStyles } from './stitches.config';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';
import { SchoolPage } from './pages/SchoolPage/SchoolPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  globalStyles();

  return (
    <>
      <Header />
      <HomePage />
      <SchoolPage />
      <Map />
    </>
  );
}

export default App;
