import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body{
        color: #101010;
        line-height: 1.7;
    }

    ul{
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
