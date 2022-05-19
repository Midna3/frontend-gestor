import { css } from '../../stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'start',
  gap: 100,
  padding: '50px 60px',
});

export const statistics = css({
  borderRadius: '10px',
  padding: '20px',
  marginTop: '50px',
  width: '575px',
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
