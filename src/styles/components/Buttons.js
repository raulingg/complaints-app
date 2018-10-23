import styled from 'styled-components';
import { fontSizes, sizes, colors } from '../settings';

const Button = styled.button`
  background: ${props => props.secondary || colors.blue};
  border: none;
  color: white;
  display: inline-block;
  font-size: ${fontSizes.large};
  font-weight: 500;
  line-height: 1.5;
  padding: ${sizes.s};
  text-decoration: none;
  margin: 1rem;
`;

const ButtonLink = styled(Button)`
  background: none;
  margin: 0;
`;

export { Button as default, ButtonLink };
