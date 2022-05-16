import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const loadOptions = async (inputValue: string) => {
    const response: Response = await api.get(`/home/schools/${inputValue}`);
    return response.data.data;
  };

  const handleInputChange = (inputValue: string) => {
    navigate(`/school/${inputValue}`);
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
        placeholder="Pesquisar por escola..."
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
