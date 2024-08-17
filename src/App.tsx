// import { useState } from 'react'
import React, { useState, useEffect } from 'react'
import Header from './components/header/Header.tsx'
import './style.css'


const App: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <>

            <div>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>

        </>
    )
}

export default App
