import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
    
    &::-webkit-scrollbar {
      width: 0.8em;
      height: 0.8rem;
    }
 
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    }
 
    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 0.1rem solid slategrey;
    }
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: #778DA9;
  }
`;

export default GlobalStyles;
