import React from 'react';

const Section = (props) => {

    return (
        <div className={`section ${ props.isSecondary ? 'secondary' : '' }` }>
            { props.children }
        </div>
    );
}

export default Section;