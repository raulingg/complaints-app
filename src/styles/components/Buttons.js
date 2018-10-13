import styled from 'styled-components';
import { fontSizes, sizes, colors } from '../settings';

const Button = styled.button`
  background: ${props => props.secondary || colors.blue};
  border: none;
  color: white;
  display: inline-block;
  font-size: ${fontSizes.large};
  font-weight: 300;
  line-height: 1;
  padding: ${sizes.s};
  text-decoration: none;
`;

const ButtonLink = styled(Button)`
  background: none;
`;

export { Button as default, ButtonLink };
