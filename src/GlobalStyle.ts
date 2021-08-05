import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --max-width: 1200px;
  }
  html {
  box-sizing: border-box;
  }
  *,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  img {
    display: block;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
