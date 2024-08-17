import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createGlobalStyle} from "styled-components"
import reset from "styled-reset";
import App from './App.tsx'

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
    @import url("https://websfont.github.io/nanumSquareNeo/nanumSquareNeo.css");
    @import url("https://websfont.github.io/gmarket/gmarket.css");

    body {
        font-family: 'Montserrat', 'nanumSquareNeo';
    }
`;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
)
