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
        overflow-y: auto;
        /* padding-top:72px; */
    }
 
    body::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    /* Track */
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white; 
        border-radius: 20px;
    }

    body::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 10px;
    }

    body::-webkit-scrollbar-thumb:hover {
        background: gray; 
    }
`

export default GlobalStyles