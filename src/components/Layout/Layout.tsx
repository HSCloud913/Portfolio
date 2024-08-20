import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import Header from '@components/Header/Header.tsx'
import Main from '@components/Main/Main.tsx'

interface LayoutProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const LayoutContainer = styled.div`
    
`;

const Layout: React.FC<LayoutProps> = ({theme, toggleTheme}) => {
    return (
        <>
            <Router>
                <LayoutContainer className="flex flex-col">
                    <Header theme={theme} toggleTheme={toggleTheme}/>
                    <Main />
                </LayoutContainer>
            </Router>
        </>
    )
}

export default Layout;