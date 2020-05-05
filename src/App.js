import React, { useState } from 'react';
import scrollImg from './assets/ic_mouse_black_48dp.png';


// SKILLS
import jsLogo from './assets/js-logo.png';
import htmlLogo from './assets/html5-logo.png';
import cssLogo from './assets/css3-logo.png';
import reactLogo from './assets/react-logo.png';
import angularjsLogo from './assets/angularjs-logo.png';
import vuejsLogo from './assets/vuejs-logo.png';
import nodeLogo from './assets/node-logo.png';
import mongodbLogo from './assets/mongodb-logo.png';
import mysqlLogo from './assets/mysql-logo.png';


import './App.css';

function App() {

    const [ isGeoVisible, setIsGeoVisible ] = useState(false);
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);

    const handleGeoClick = () => {
        if (isMenuVisible) {
            setIsMenuVisible(!isMenuVisible);
        }

        setIsGeoVisible(!isGeoVisible);
    }

    const renderGeo = () => {
        return (
            <ul className="hidden-menu">
                <li>
                    <a href="#" className="active">ENGLISH</a>
                </li>
                <li>
                    <a href="#">ESPA&Ntilde;OL</a>
                </li>
            </ul>
        );
    }

    const handleMenuClick = () => {
        if (isGeoVisible) {
            setIsGeoVisible(!isGeoVisible);
        }

        setIsMenuVisible(!isMenuVisible);
    }

    const renderMenu = () => {
        return (
            <ul className="hidden-menu">
                <li>
                    <a href="#" className="active">ABOUT ME</a>
                </li>
                <li>
                    <a href="#">WORK HISTORY</a>
                </li>
                <li>
                    <a href="#">MAIN PROJECTS</a>
                </li>
                <li>
                    <a href="#">SKILLS</a>
                </li>
                <li>
                    <a href="#">EDUCATION</a>
                </li>
                <li>
                    <a href="#">CONTACT ME</a>
                </li>
            </ul>
        );
    }

    return (
        <div className="container">
            <div className="header">
                <div className="logo">&lt;hf /&gt;</div>
                <div className="actions">
                    <div className={ `trigger geo ${isGeoVisible ? 'active' : ''}` } onClick={ () => { handleGeoClick() }}></div>
                    <div className={ `trigger menu ${isMenuVisible ? 'active' : ''}` } onClick={ () => { handleMenuClick() }}></div>
                </div>

                {
                    isGeoVisible ?
                        renderGeo() :
                        null
                }

                {
                    isMenuVisible ?
                        renderMenu() :
                        null
                }
            </div>

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

            {/* ABOUT ME */}
            <div className="section">
                <div className="title">About Me</div>
                <div>
                    <img src="" className="profile-img" />
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                    </div>
                </div>
            </div>

            {/* WORK HISTORY */}
            <div className="section secondary">
                <div className="title">Work History</div>
                <div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">ITX Corp.</div>
                                    <div className="entity-info--details_position">SR. Frontend developer</div>
                                </div>
                            </div>
                            <div className="entity-info--timeframe">
                                2017 - Present
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">Global Logic</div>
                                    <div className="entity-info--details_position">SR. Frontend developer</div>
                                </div>
                            </div>
                            <div className="entity-info--timeframe">
                                2015 - 2017
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">Globant</div>
                                    <div className="entity-info--details_position">SR. Frontend developer</div>
                                </div>
                            </div>
                            <div className="entity-info--timeframe">
                                2014 - 2015
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                </div>
            </div>

            {/* MAIN PROJECTS */}
            <div className="section">
                <div className="title">Main Projects</div>
                <div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">Connected Apps</div>
                                    <div className="entity-info--details_position">Paychex - ITX Corp</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">People Drawer Enhacements</div>
                                    <div className="entity-info--details_position">Paychex - ITX Corp</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                    <div className="experience">
                        <div className="entity-info">
                            <div className="entity-info--details">
                                <img src="" className="entity-info--details_logo" />
                                <div>
                                    <div className="entity-info--details_name">Company HTML</div>
                                    <div className="entity-info--details_position">Paychex - ITX Corp</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus porttitor, fermentum nulla id, vulputate ante. Aliquam erat volutpat. Sed lacinia congue eros, nec condimentum metus sodales quis. Quisque justo justo, ultricies ut nunc nec, commodo bibendum metus. Curabitur ac diam at lacus laoreet feugiat posuere sed orci. Ut accumsan mollis sollicitudin. Vestibulum ante arcu, venenatis sit amet tortor sed, rhoncus eleifend metus. Nam sapien nulla, scelerisque in porta in, eleifend at nisi. Nam eget nibh mattis, maximus odio bibendum, lobortis massa. Quisque quis placerat eros. In ac elit ut justo tempor aliquet in ut mauris. Sed et sollicitudin ante. Phasellus non velit sit amet quam molestie interdum. Nunc vehicula consectetur nunc at lobortis.
                        </div>
                    </div>

                </div>
            </div>

            {/* SKILSS */}
            <div className="section secondary">
                <div className="title">Skills</div>
                <div className="skills">

                    <div className="skill">
                        <img src={jsLogo} className="skill--logo" />
                        <span className="skill--name">Javascript</span>
                    </div>

                    <div className="skill">
                        <img src={htmlLogo} className="skill--logo" />
                        <span className="skill--name">Html</span>
                    </div>

                    <div className="skill">
                        <img src={cssLogo} className="skill--logo" />
                        <span className="skill--name">Css</span>
                    </div>

                    <div className="skill">
                        <img src={reactLogo} className="skill--logo" />
                        <span className="skill--name">React Js</span>
                    </div>

                    <div className="skill">
                        <img src={angularjsLogo} className="skill--logo" />
                        <span className="skill--name">AngularJs</span>
                    </div>

                    <div className="skill">
                        <img src={vuejsLogo} className="skill--logo" />
                        <span className="skill--name">vue Js</span>
                    </div>

                    <div className="skill">
                        <img src={nodeLogo} className="skill--logo" />
                        <span className="skill--name">Node Js</span>
                    </div>

                    <div className="skill">
                        <img src={mongodbLogo} className="skill--logo" />
                        <span className="skill--name">MongoDB</span>
                    </div>

                    <div className="skill">
                        <img src={mysqlLogo} className="skill--logo" />
                        <span className="skill--name">MySql</span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
