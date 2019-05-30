
import React from 'react';
import logo from './logo.svg';
import ava from './ava.jpeg'
import './Header.css';
import Buttons from './Buttons'

function openLink() {
    window.open('https://github.com/wwwal2', "_blank")
}

function Header() {
    return (
        <header className="App-header">
            <input type="image" src={ava} className="Ava" alt="ava" onClick={openLink} />
            <b>MY TUTORIAL WEB PAGE</b>
            <Buttons />
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;
