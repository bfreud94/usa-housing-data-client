import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">Usa Housing Data
                <br/>
                <Link style={linkStyle} to="/">Heat Map | </Link>
                <Link style={linkStyle} to="/dataTable">Data Table</Link>
            </header>

        )
    }
}

const linkStyle = {
    color: '#ffffff',
    fontSize: '16px',
    textDecoration: 'none'
}

export default Header;