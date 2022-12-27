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
        font-family: Pretendard, Roboto, -apple-system, BlinkMacSystemFont, "Malgun Gothic",
    "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif;
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
