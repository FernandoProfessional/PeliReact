import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        /* padding-top:72px; */
    }

`

export default GlobalStyles