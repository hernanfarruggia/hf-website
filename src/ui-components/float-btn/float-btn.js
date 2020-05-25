import React from 'react';

import './float-btn.css';

const FloatBtn = (props) => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button
            className={`float-btn ${props.isVisible ? 'show' : ''}`}
            onClick={ () => { handleClick(); } }>
            TOP
        </button>
    )
}

export default FloatBtn;