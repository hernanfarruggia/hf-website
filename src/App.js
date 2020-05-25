import React, { useEffect, useState } from 'react';

import Header from './ui-components/header';
import FloatBtn from './ui-components/float-btn/float-btn';

import Main from './pages/main';
import About from './pages/about';
import Work from './pages/work';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Education from './pages/education';

import './App.css';

const App = () => {

    const [ isHeaderVisible, setIsHeaderVisible ] = useState(true);
    const [ screenYPos, setScreenYPos ] = useState(0);
    const [ isToTopVisible, setIsToTopVisible ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            handleHeaderVisibility();
            handleGoToTopBtnVisibility();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                handleHeaderVisibility();
                handleGoToTopBtnVisibility();
            });
        };
    });

    const handleHeaderVisibility = () => {

        if (window.scrollY > screenYPos) {
            // Down Scrolling
            if (window.scrollY - screenYPos > 65) {
                // The scroll passed the header
                setIsHeaderVisible(false);
            }

        } else {
            // Up Scrolling
            if (window.scrollY <= screenYPos) {
                setIsHeaderVisible(true);
            }
        }

        setScreenYPos(window.scrollY);
    };

    const handleGoToTopBtnVisibility = () => {
        if (window.scrollY > 65) {
            setIsToTopVisible(true);
        } else {
            setIsToTopVisible(false);
        }
    }

    return (
        <div className="container">
            <Header isVisible={ isHeaderVisible } />

            <Main />

            <About />

            <Work />

            <Projects />

            <Skills />

            <Education />

            <FloatBtn isVisible={ isToTopVisible }/>

        </div>
    );
}

export default App;
