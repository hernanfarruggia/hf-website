import React from 'react';

import itx from '../../assets/itx.png';
import globallogic from '../../assets/globallogic.png';
import globant from '../../assets/globant.png';
import sevenl from '../../assets/7l.png';
import na from '../../assets/na.png';
import paychex from '../../assets/paychex.png';
import delphix from '../../assets/delphix.png';
import sophos from '../../assets/sophos.png';
import southwest from '../../assets/southwest.png';
import mindshare from '../../assets/mindshare.png';
import javascript from '../../assets/js-logo.png';
import html from '../../assets/html5-logo.png';
import css from '../../assets/css3-logo.png';
import reactjs from '../../assets/react-logo.png';
import redux from '../../assets/redux-logo.png';
import angularjs from '../../assets/angularjs-logo.png';
import vuejs from '../../assets/vuejs-logo.png';
import lodash from '../../assets/lodash-logo.png';
import underscore from '../../assets/underscore-logo.png';
import jquery from '../../assets/jquery-logo.png';
import sass from '../../assets/sass-logo.png';
import less from '../../assets/less-logo.png';
import nodejs from '../../assets/node-logo.png';
import express from '../../assets/express-logo.png';
import sailsjs from '../../assets/sailsjs-logo.png';
import mongodb from '../../assets/mongodb-logo.png';
import mysql from '../../assets/mysql-logo.png';
import edx from '../../assets/edx.png';
import utnba from '../../assets/utn-ba.png';
import institutobelgrano from '../../assets/instituto-belgrano.png';

import './avatar.css';

const Avatar = (props) => {

    const imgSrc = {
        itx,
        globallogic,
        globant,
        sevenl,
        na,
        paychex,
        delphix,
        sophos,
        southwest,
        mindshare,
        javascript,
        html,
        css,
        reactjs,
        redux,
        angularjs,
        vuejs,
        lodash,
        underscore,
        jquery,
        sass,
        less,
        nodejs,
        express,
        sailsjs,
        mongodb,
        mysql,
        edx,
        utnba,
        institutobelgrano
    };

    const type = {
        entity: 'avatar-entity',
        skill: 'avatar-skill'
    };

    return (
        <img
            src={ imgSrc[props.src] || na }
            className={ type[props.type] }
            alt={ `${props.src} logo!` }
        />
    );
}

export default Avatar;