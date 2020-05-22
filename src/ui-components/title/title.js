import React from 'react';

import './title.css';

const Title = (props) => {

    return (
        <div className="title">{ props.children }</div>
    );
}

export default Title;