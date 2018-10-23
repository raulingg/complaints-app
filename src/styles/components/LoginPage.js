import styled from 'styled-components';
import { sizes } from '../settings';
import Button from './Buttons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/bg.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  padding: ${sizes.l} ${sizes.m};
  text-align: center;
  margin: 0 ${sizes.m};
  max-width: 35rem;
`;

const Title = styled.h1`
  margin: 0 0 ${sizes.m} 0;
  line-height: 1;
`;

const ButtonFacebook = styled(Button)`
  background-color: #2b4170; /* fallback color */
  background: linear-gradient(to top, #3b5998, #2b4170);
  width: 20rem;

  :hover {
    background-color: #3b5998; /* fallback color */
    background: linear-gradient(to top, #2b4170, #3b5998);
  }
`;

const ButtonGoogle = styled(Button)`
  background-color: #c33219; /* fallback color */
  background: linear-gradient(to top, #e64522, #c33219);
  width: 20rem;

  :hover {
    background-color: #e64522; /* fallback color */
    background: linear-gradient(to top, #c33219, #e64522);
  }
`;
export { Box, ButtonGoogle, ButtonFacebook, Container, Title };
