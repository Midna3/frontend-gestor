import { createContext, ReactNode, useState } from 'react';
import { GraphInfo } from '../types/GraphInfo';

type SearchContextData = {
  secondSchool: GraphInfo | null;
  setSecondSchool: (info: GraphInfo | null) => void;
  searchSecondSchool: boolean;
  setSearchSecondSchool: (search: boolean) => void;
  secondSchoolGraphicsData: number[][];
  setSecondSchoolGraphicsData: (data: number[][]) => void;
  secondSchoolDataFrom2019: GraphInfo | null;
  setSecondSchoolDataFrom2019: (info: GraphInfo | null) => void;
};

type SearchContextProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext({} as SearchContextData);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [searchSecondSchool, setSearchSecondSchool] = useState<boolean>(false);
  const [secondSchool, setSecondSchool] = useState<GraphInfo | null>(null);
  const [secondSchoolGraphicsData, setSecondSchoolGraphicsData] = useState<
    number[][]
  >([[0, 0, 0]]);
  const [secondSchoolDataFrom2019, setSecondSchoolDataFrom2019] =
    useState<GraphInfo | null>(null);

  return (
    <SearchContext.Provider
      value={{
        secondSchool,
        setSecondSchool,
        searchSecondSchool,
        setSearchSecondSchool,
        secondSchoolGraphicsData,
        setSecondSchoolGraphicsData,
        secondSchoolDataFrom2019,
        setSecondSchoolDataFrom2019,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
