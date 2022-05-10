import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapContextProvider } from './contexts/MapContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <MapContextProvider>
      <App />
    </MapContextProvider>
  </React.StrictMode>
);
