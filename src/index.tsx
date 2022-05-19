import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MapContextProvider } from './contexts/MapContext';
import { SearchContextProvider } from './contexts/SearchContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MapContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </MapContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
