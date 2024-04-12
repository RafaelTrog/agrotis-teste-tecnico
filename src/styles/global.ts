import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFF;
    --offwhite: #F3F2F1;
    --green: #00796B;
    --red: #D32F2F;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }
`

export default GlobalStyle;