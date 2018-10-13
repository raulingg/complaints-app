import styled from 'styled-components';
import { sizes } from '../settings';

const Container = styled.div`
  align-items: center;
  background: url('/images/bg.jpg');
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  padding: ${sizes.l} ${sizes.m};
  text-align: center;
  width: 25rem;
`;

const Title = styled.h1`
  margin: 0 0 ${sizes.m} 0;
  line-height: 1;
`;
export { Box, Container, Title };
