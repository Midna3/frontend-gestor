import { css } from '../../stitches.config';

export const info = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
});

export const schoolInfo = css({
  padding: '32px 25px',
  width: '566px',
  height: '410px',
  backgroundColor: 'white',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  p: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#06152B',
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
  },
  input: {
    height: '50px',
    width: '238px',
    paddingLeft: '10px',
    backgroundColor: '#F1F4FA',
    borderRadius: '10px',
    color: '#858585',
    border: 'none',
  },

  variants: {
    variant: {
      ideb: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
    },
  },
});

export const schoolData = css({
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  flexWrap: 'wrap',
});

export const schoolDataDescription = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',

  div: {
    width: '506px',
    height: '50px',
    backgroundColor: '#F1F4FA',
    borderRadius: '10px',
    color: '#858585',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '6px',
  },
});

export const circles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});

export const idebCircle = css({
  width: '45%',
});

export const rating = css({
  width: '106px',
  height: '106px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EDEBFC',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '40px',
  fontWeight: 'bold',
  color: 'black',

  span: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'black',
  },
});
