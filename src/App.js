import React, { useState } from 'react';

import Main from './pages/main';
import About from './pages/about';
import Work from './pages/work';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Education from './pages/education';


import './App.css';

const App = () => {

    const [ isGeoVisible, setIsGeoVisible ] = useState(false);
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);

    const handleGeoClick = () => {
        if (isMenuVisible) {
            setIsMenuVisible(!isMenuVisible);
        }

        setIsGeoVisible(!isGeoVisible);
    }

    const renderGeo = () => {
        return (
            <ul className="hidden-menu">
                <li>
                    <a href="#" className="active">ENGLISH</a>
                </li>
                <li>
                    <a href="#">ESPA&Ntilde;OL</a>
                </li>
            </ul>
        );
    }

    const handleMenuClick = () => {
        if (isGeoVisible) {
            setIsGeoVisible(!isGeoVisible);
        }

        setIsMenuVisible(!isMenuVisible);
    }

    const renderMenu = () => {
        return (
            <ul className="hidden-menu">
                <li>
                    <a href="#" className="active">ABOUT ME</a>
                </li>
                <li>
                    <a href="#">WORK HISTORY</a>
                </li>
                <li>
                    <a href="#">MAIN PROJECTS</a>
                </li>
                <li>
                    <a href="#">SKILLS</a>
                </li>
                <li>
                    <a href="#">EDUCATION</a>
                </li>
                <li>
                    <a href="#">CONTACT ME</a>
                </li>
            </ul>
        );
    }

    return (
        <div className="container">
            <div className="header">
                <div className="logo">&lt;hf /&gt;</div>
                <div className="actions">
                    <div className={ `trigger geo ${isGeoVisible ? 'active' : ''}` } onClick={ () => { handleGeoClick() }}></div>
                    <div className={ `trigger menu ${isMenuVisible ? 'active' : ''}` } onClick={ () => { handleMenuClick() }}></div>
                </div>

                {
                    isGeoVisible ?
                        renderGeo() :
                        null
                }

                {
                    isMenuVisible ?
                        renderMenu() :
                        null
                }
            </div>

            <Main />

            <About />

            <Work />

            <Projects />

            <Skills />

            <Education />

        </div>
    );
}

export default App;
