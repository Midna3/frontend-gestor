import React from 'react';
import { Flex } from '../Flex/Flex';
import dashboardIcon from '../../assets/icons/dashboard.png';

export const Header = () => {
  return (
    <Flex
      align={'center'}
      css={{
        margin: '0 3rem',
        height: 60,
        '@sm': {
          margin: '0 1rem',
        },
      }}
    >
      <img src={dashboardIcon} alt="Ícone para HomePage" />
    </Flex>
  );
};
