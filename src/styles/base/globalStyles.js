import { createGlobalStyle } from 'styled-components';

/* eslint-disable */
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  .is-active {
    font-weight: bold;
  }
`;

export default GlobalStyle;