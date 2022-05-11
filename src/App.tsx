import { globalStyles } from './stitches.config';
import { Header } from './components/Header/Header';
import { SchoolPage } from './pages/SchoolPage/SchoolPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  globalStyles();

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
