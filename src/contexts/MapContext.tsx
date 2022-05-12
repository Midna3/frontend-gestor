import { createContext, ReactNode, useState } from 'react';

type MapContextData = {
  regionState: string;
  changeMap: (region: string) => void;
};

type MapContextProviderProps = {
  children: ReactNode;
};

const MapContext = createContext({} as MapContextData);

export const MapContextProvider = ({ children }: MapContextProviderProps) => {
  const [regionState, setRegionState] = useState('BR');

  function changeMap(region: string) {
    if (region === regionState) {
      setRegionState('BR');
      console.log('Requisita para BR');
      return;
    }

    setRegionState(region);
    console.log(`Requisita para ${region}`);
  }

  return (
    <MapContext.Provider value={{ regionState, changeMap }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;
