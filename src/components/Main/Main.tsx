import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from '@pages/Home.tsx'
import About from '@pages/About.tsx'
import Carrer from '@pages/Career.tsx'
import Skills from '@pages/Skills.tsx'
import Project from '@pages/Project.tsx'
import Contact from '@pages/Contact.tsx'

const MainContainer = styled.main`
    margin-top: 96px;   
`;

const Main: React.FC = () => {
    return (
        <>
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/carrer" element={<Carrer/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </MainContainer>
        </>
    )
}

export default Main;