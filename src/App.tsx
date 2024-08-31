import React, {useState} from 'react';
import {StyleSheetManager, ThemeProvider} from "styled-components"
import isPropValid from '@emotion/is-prop-valid';
import GlobalStyle from './styles/global-style.ts'
import {lightTheme, darkTheme} from './styles/themes.ts'
import Layout from '@components/Layout/Layout.tsx'

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <GlobalStyle/>
                    <Layout theme={theme} toggleTheme={toggleTheme}/>
                </ThemeProvider>
            </StyleSheetManager>
        </>
    )
}

export default App
