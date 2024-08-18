import {createGlobalStyle} from "styled-components"
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Montserrat', 'nanumSquareNeo';
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.background};
    }
`;

export default GlobalStyle;