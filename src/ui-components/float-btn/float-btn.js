import React from 'react';

import './float-btn.css';

import UpArrow from '../../assets/up-arrow.png';

const FloatBtn = (props) => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button
            className={`float-btn ${props.isVisible ? 'show' : ''}`}
            onClick={ () => { handleClick(); } }>
            <img src={UpArrow} className="icon" />
        </button>
    )
}

export default FloatBtn;