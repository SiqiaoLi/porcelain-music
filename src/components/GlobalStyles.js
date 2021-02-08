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

  a {
    color: black;
    text-decoration: none;
  }

  .active-SideNav{
    transform: translateX(0%);
    opacity: 1;
  }

  .selected {
    background: rgb(194, 208, 253);
  }

  .App{
    transition: all 0.5s ease;
  }

  .side-open {
    margin-left: 7%;
  }
`;

export default GlobalStyles;
