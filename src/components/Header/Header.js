
import React from 'react';

import './StylesSass.scss';
import Buttons from './Buttons'
import logo from './logo.svg';
import ava from './ava.jpeg'


function openLink() {
    window.open('https://github.com/wwwal2/my-page-v3/tree/master/src', "_blank")
}

function Header() {
    return (
        <header className="Header">
            <input type="image" src={ava} className="Ava" alt="ava" onClick={openLink} />
            <b>MY WEB PAGE v 2.0</b>
            <Buttons />
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;
