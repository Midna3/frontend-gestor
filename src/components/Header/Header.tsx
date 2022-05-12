import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Flex } from '../Flex/Flex';
import AsyncSelect from 'react-select/async';
import { Option, schoolOptions } from '../../mocks/ReactSelect';

import dashboardIcon from '../../assets/icons/dashboard.png';

export const Header = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(
    null
  );

  const filterColors = (inputValue: string) => {
    return schoolOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: Option[]) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
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
        defaultOptions
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
