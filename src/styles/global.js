import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyle;
