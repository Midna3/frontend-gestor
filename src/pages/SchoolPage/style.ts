import { css } from '../../stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 47,
  padding: '35px',
});

export const statistics = css({
  overflowY: 'scroll',
  borderRadius: '10px',
  padding: '1rem 3rem',
  width: '1131px',
  height: '800px',
  backgroundColor: 'white',

  p: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#06152B',
  },
  h1: {
    padding: '25px 0',
  },
});

export const graph = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
