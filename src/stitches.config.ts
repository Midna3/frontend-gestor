import { globalCss, createStitches } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    scrollBehavior: 'smooth',
    fontFamily: 'DM Sans',
  },
  a: {
    textDecoration: 'none',
    padding: 0,
    margin: 0,
  },
  'a:visited': {
    textDecoration: 'none',
    color: 'unset',
  },
});

export const { styled, css, keyframes } = createStitches({
  theme: {
    space: {
      1: '10px',
      2: '20px',
      3: '40px',
    },
    colors: {
      blueBrandZero: '#42A7F2',
      greenBrandZero: '#42A774',
      blackZero: '#0A1128',
      whiteZero: '#EDE7E3',
      purple: '#2D2FF0',
    },
  },
  media: {
    sm: '(max-width: 480px)',
  },
});
