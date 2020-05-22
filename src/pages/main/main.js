import React from 'react';

import scrollImg from '../../assets/ic_mouse_black_48dp.png';

import './main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="jumbo">
                <div className="text small">Hello, I'm a</div>
                <div className="text">
                    <span className="alt">&lt;</span>Web Developer <span className="alt">/&gt;</span>
                </div>
            </div>
            <div className="scroll-indicator">
                <img src={scrollImg} width="20"/>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default Main;