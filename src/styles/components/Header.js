import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, sizes } from '../settings';

const Header = styled.header`
  background: ${colors.darkBlue};
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${sizes.s} 0;
`;

const Title = styled(Link)`
  color: white;
  text-decoration: none;
  h1 {
    margin: 0;
  }
`;

export { Header, Content, Title };
