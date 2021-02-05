import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
`;

export default GlobalStyles;
