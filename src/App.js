import React from 'react';

import Header from './ui-components/header';

import Main from './pages/main';
import About from './pages/about';
import Work from './pages/work';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Education from './pages/education';

import './App.css';

const App = () => {

    return (
        <div className="container">
            <Header />

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
