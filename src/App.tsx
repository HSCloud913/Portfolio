import React, {useState} from 'react';
import {ThemeProvider} from "styled-components"
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
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle/>
                <Layout theme={theme} toggleTheme={toggleTheme}/>
            </ThemeProvider>
        </>
    )
}

export default App
