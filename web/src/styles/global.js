import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    // height: 100%;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: 0;
  }

`;
