import { createGlobalStyle } from 'styled-components';

/* eslint-disable */
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  body {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    width:100%;
    height:100%;
    margin:0;
    padding:0;
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