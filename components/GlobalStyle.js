import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: blue;
        color: red;
    }
    
    h1 {
        margin-top: 0;
    }
`;

export default GlobalStyle;
