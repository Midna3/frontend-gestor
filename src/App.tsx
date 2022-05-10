import { globalStyles } from './stitches.config';
import { Header } from './components/Header/Header';
import { SchoolPage } from './pages/SchoolPage/SchoolPage';

function App() {
  globalStyles();

  return (
    <>
      <Header />
      <SchoolPage />
    </>
  );
}

export default App;
