import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from "@mui/material";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFF;
    --offwhite: #F3F2F1;
    --green: #00796B;
    --red: #D32F2F;

    --shadow: 0 1px 3px rgba(0, 0, 0, .26);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    width: 100dvw;
    font-family: 'Roboto', sans-serif;
    background: var(--offwhite);
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }
`

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00796B"
    }
  }
});

export default GlobalStyle;