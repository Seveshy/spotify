import styled, { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`

    * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    -ms-hyphenate-limit-chars, body, #root {
        height: 100%;
    } 

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothin: antialiased !important;
        background: #181818;
        font-family: 'Montserrat', sans-serif;
        color: #FFF; 
    }

    button {
        cursor: pointer;
    }

    a {
        cursor: pointer;
    }
`;

export default GlobalStyle;
