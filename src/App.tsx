import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from "styled-components"
import GlobalStyle from './styles/global-style.ts'
import {lightTheme, darkTheme} from './styles/themes.ts'
import Header from './components/Header/Header.tsx'
import Home from './pages/Home.tsx'
import User from './pages/User.tsx'

const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle/>

                <Router>
                    <Header theme={theme} toggleTheme={toggleTheme}/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<User/>}/>
                        </Routes>
                    </main>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
