import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchContext from '../../contexts/SearchContext';
import { api } from '../../services/api';

import { Flex } from '../Flex/Flex';
import AsyncSelect from 'react-select/async';

import dashboardIcon from '../../assets/icons/dashboard.png';

type Option = {
  readonly value: string;
  readonly label: string;
};

type Response = {
  readonly data: {
    readonly data: Option[];
  };
};

export const Header = () => {
  const navigate = useNavigate();
  const { searchSecondSchool, setSecondSchool, setSecondSchoolGraphicsData } =
    useContext(SearchContext);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const loadOptions = async (inputValue: string) => {
    const response: Response = await api.get(`/home/schools/${inputValue}`);
    console.log(response.data.data);
    return response.data.data;
  };

  const handleInputChange = async (inputValue: string) => {
    if (!searchSecondSchool) {
      navigate(`/school/${inputValue}`);
    } else {
      const { data } = await api.get(`panel/school/${inputValue}?year=2020`);
      setSecondSchool(data);

      const dataFrom2019 = await api.get(
        `panel/school/${inputValue}?year=2019`
      );

      const dataFrom2018 = await api.get(
        `panel/school/${inputValue}?year=2018`
      );

      const dataFrom2017 = await api.get(
        `panel/school/${inputValue}?year=2017`
      );

      const ied = [
        dataFrom2017.data.data.attributes.ied.mean,
        dataFrom2018.data.data.attributes.ied.mean,
        dataFrom2019.data.data.attributes.ied.mean,
        data.data.attributes.ied.mean,
      ];

      const icg = [
        dataFrom2017.data.data.attributes.icg.mean,
        dataFrom2018.data.data.attributes.icg.mean,
        dataFrom2019.data.data.attributes.icg.mean,
        data.data.attributes.icg.mean,
      ];

      const afd = [
        dataFrom2017.data.data.attributes.afd.mean,
        dataFrom2018.data.data.attributes.afd.mean,
        dataFrom2019.data.data.attributes.afd.mean,
        data.data.attributes.afd.mean,
      ];

      const graphicsData = [ied, icg, afd];

      setSecondSchoolGraphicsData(graphicsData);
    }
  };

  return (
    <Flex
      align={'center'}
      css={{
        margin: '0 3rem',
        height: 60,
        img: {
          marginRight: '2rem',
        },
        '@sm': {
          margin: '0 1rem',
        },
      }}
    >
      <Link to="/">
        <img src={dashboardIcon} alt="Ícone para HomePage" />
      </Link>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        value={selectedOption}
        onChange={(option: Option | null) => {
          handleInputChange(option?.value as string);
          setSelectedOption(null);
        }}
        placeholder={
          searchSecondSchool
            ? 'Pesquisar por segunda escola...'
            : 'Pesquisar por escola...'
        }
        noOptionsMessage={() => 'Nenhum resultado encontrado'}
        loadingMessage={() => 'Pesquisando...'}
        styles={{
          control: (css) => ({
            ...css,
            width: '20rem',
          }),
        }}
      />
    </Flex>
  );
};
