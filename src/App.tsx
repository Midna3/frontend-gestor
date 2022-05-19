import { Routes, Route } from 'react-router-dom';
import { globalStyles } from './stitches.config';
import { Header } from './components/Header/Header';
import { SchoolPage } from './pages/SchoolPage/SchoolPage';
import { HomePage } from './pages/HomePage/HomePage';
import { SchoolComparison } from './pages/SchoolComparison/SchoolComparison';

function App() {
  globalStyles();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school/:schoolId" element={<SchoolPage />} />
        <Route
          path="/school/comparison/:schoolId"
          element={<SchoolComparison />}
        />
      </Routes>
    </div>
  );
}

export default App;
