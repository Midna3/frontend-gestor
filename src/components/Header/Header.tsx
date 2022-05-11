import React from 'react';
import { Flex } from '../Flex/Flex';
import dashboardIcon from '../../assets/icons/dashboard.png';
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions } from '../../mocks/ReactSelect';

export const Header = () => {
  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: ColourOption[]) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    console.log(inputValue);
    return inputValue;
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
      <img src={dashboardIcon} alt="Ícone para HomePage" />
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={(option: ColourOption | null) =>
          handleInputChange(option?.value as string)
        }
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
