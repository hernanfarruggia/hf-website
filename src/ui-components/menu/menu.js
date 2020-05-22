import React from 'react';

import './menu.css';

const Menu = (props) => {

    const handleClick = (itemId) => {
        if (props.setActive) {
            props.setActive(itemId);
        }

        if (props.onChange) {
            props.onChange();
        }
    }

    return (
        <ul className="menu">
            {
                props.items.map((item, key) => {
                    return (
                        <li key={ key }>
                            <a
                                href={ `#${item.link}` }
                                className={ props.active === key ? 'active' : '' }
                                onClick={ () => { handleClick(key) } }>
                                { item.text }
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Menu;