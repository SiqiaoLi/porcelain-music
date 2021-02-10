import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Lato", sans-serif;
    font-weight: 400;
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
    color: rgb(51, 51, 51);
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


  @media screen and (max-width: 1110px){
    .time-control {
      width: 60%;
    }
    .play-control {
      width: 50%;
    }
  }

  @media screen and (max-width: 810px){
    .time-control {
      width: 80%;
    }
    .play-control {
      width: 70%;
    }
  }


`;

export default GlobalStyles;
