import React from 'react';

import './section.css';

const Section = (props) => {

    return (
        <div className={`section ${ props.isSecondary ? 'secondary' : '' }` } id={ props.id ? props.id : '' }>
            { props.children }
        </div>
    );
}

export default Section;