import { styled } from '@stitches/react';

export const SvgMap = styled('svg', {
  width: '100%',
  height: '100%',

  path: {
    fill: '#BFD9FF',
    stroke: '#FFF',
    strokeWidth: 500,

    '&:hover': {
      fill: '#78ADFE',
      transition: '.5s',
      cursor: 'pointer',
    },
  },
});
