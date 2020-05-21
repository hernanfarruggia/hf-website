import React from 'react';

const Menu = (props) => {
    return (
        <ul className="hidden-menu">
            {
                props.items.map((item, key) => {
                    return (
                        <li key={ key }>
                            <a
                                href={ `#${item.link}` }
                                className={ props.active === key ? 'active' : '' }
                                onClick={ () => { props.setActive(key) } }>
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