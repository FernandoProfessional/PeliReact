import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
    }
    body {
        margin: 0;
        padding: 0;
    }

`

export default GlobalStyles