import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                <img style={iconStyle} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js logo"></img>
                 TodoList
            </h1>
            <Link style={linkStyle} to="/">Home</Link> | {' '}
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: '0',
    textAlign: 'center',
    padding: '1%'
}
const linkStyle = {
    color: '#fff',
    padding: '5px',
    textDecoration: 'none'
}
const iconStyle = {
    width: '25px',
}

export default Header;