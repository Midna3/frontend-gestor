import { css } from '../../stitches.config';

export const container = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 47,
  padding: '50px',
  backgroundColor: '#F1F4FA',
  fontSize: '20px',
  color: '#383874',
  height: '800px',
});

export const enrolledStudents = css({
  h1: {
    fontSize: '70px',
  },
});

export const dataCard = css({
  display: 'flex',
  gap: 26,
  flexDirection: 'row',
  padding: '15px',
  paddingLeft: '0px',
});

export const icon = css({
  width: '70px',
  height: '70px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
