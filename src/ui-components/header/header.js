import React, { useState } from 'react';

import Menu from '../menu';

import './header.css';

const Header = (props) => {

    const [ isGeoVisible, setIsGeoVisible ] = useState(false);
    const [ geoActive, setGeoActive ] = useState(0);

    const [ isMenuVisible, setIsMenuVisible ] = useState(false);
    const [ menuActive, setMenuActive ] = useState(0);

    const menuItems = [
        { text: 'About Me', link: 'about-me' },
        { text: 'Work History', link: 'work-history' },
        { text: 'Main Projects', link: 'main-projects' },
        { text: 'Skills', link: 'skills' },
        { text: 'Academics', link: 'academics' },
        { text: 'Contact Me', link: 'contact-me' }
    ];
    const geoItems = [
        { text: 'English', link: '' },
        { text: 'Español', link: '' }
    ];

    const handleGeoClick = () => {
        if (isMenuVisible) {
            setIsMenuVisible(!isMenuVisible);
        }

        setIsGeoVisible(!isGeoVisible);
    }

    const handleSetGeoActive = (id) => {
        setGeoActive(id);
        handleGeoClick();
    }

    const handleMenuClick = () => {
        if (isGeoVisible) {
            setIsGeoVisible(!isGeoVisible);
        }

        setIsMenuVisible(!isMenuVisible);
    }

    const handleSetMenuActive = (id) => {
        setMenuActive(id);
        handleMenuClick();
    }

    return (
        <div className={ `header ${ props.isVisible ? 'show' : 'hide' }` }>
            <div className="logo">&lt;hf /&gt;</div>
            <div className="actions">
                <div
                    className={ `trigger geo ${isGeoVisible ? 'active' : ''}` }
                    onClick={ () => { handleGeoClick() } }>
                </div>
                <div
                    className={ `trigger nav ${isMenuVisible ? 'active' : ''}` }
                    onClick={ () => { handleMenuClick() } }>
                </div>
            </div>

            {
                isGeoVisible ?
                    <Menu
                        active={ geoActive }
                        items={ geoItems }
                        setActive={ handleSetGeoActive }
                    /> :
                    null
            }

            {
                isMenuVisible ?
                    <Menu
                        active={ menuActive }
                        items={ menuItems }
                        setActive={ handleSetMenuActive }
                    /> :
                    null
            }
        </div>
    );
}

export default Header;