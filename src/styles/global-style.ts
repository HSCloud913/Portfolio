import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.color};
        background-color: ${(props) => props.theme.background};
        font-family: 'Montserrat', 'NanumSquareNeo', sans-serif
    }
    
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export default GlobalStyle;