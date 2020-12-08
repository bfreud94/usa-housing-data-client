import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ToolBar.css';

class ToolBar extends Component {

    constructor() {
        super();
        this.state = {
            hamburgerMenuExpanded: false
        };
    }

    toolbarStyles = () => {
        const { hamburgerMenuExpanded } = this.state;
        return {
            transition: 'width 0.3s',
            width: hamburgerMenuExpanded ? '250px' : '90px'
        };
    }

    iconStyles = (page) => {
        const { hamburgerMenuExpanded } = this.state;
        const { currentPage } = this.props;
        return {
            borderLeft: page === currentPage ? '7px solid white' : '',
            display: hamburgerMenuExpanded ? 'flex' : 'block',
            textAlign: hamburgerMenuExpanded ? 'none' : 'left',
            textDecoration: 'none'
        };
    }

    hamburgerMenu = () => (
        <div className='hamburger-menu' id='hamburger-menu' onClick={this.toggleHamburgerMenu} role='button' tabIndex={0}>
            <div className='hamburger-menu-bar-one' />
            <div className='hamburger-menu-bar-two' />
            <div className='hamburger-menu-bar-three' />
        </div>
    );

    toggleHamburgerMenu = () => {
        const { hamburgerMenuExpanded } = this.state;
        document.getElementById('hamburger-menu').classList.toggle('change');
        this.setState({
            hamburgerMenuExpanded: !hamburgerMenuExpanded
        });
    }

    toolbarIcon = (page, toolbarText) => {
        const { hamburgerMenuExpanded } = this.state;
        const { changePage } = this.props;
        const iconMap = { dataAnalysis: 'fas fa-tachometer-alt', maps: 'fas fa-globe-americas', directory: 'fas fa-address-book' };
        return (
            <Link style={this.iconStyles(page)} onClick={() => changePage(page)} to={page}>
                <i className={iconMap[page]} />
                <span className='toolbar-text'>{hamburgerMenuExpanded ? toolbarText : ''}</span>
            </Link>
        );
    }

    render() {
        return (
            <div className='toolbar' id='toolbar' style={this.toolbarStyles()}>
                {this.hamburgerMenu()}
                {this.toolbarIcon('dataAnalysis', 'Data Analysis')}
                {this.toolbarIcon('maps', 'Heat Maps')}
                {this.toolbarIcon('directory', 'Directory')}
            </div>
        );
    }
}

ToolBar.propTypes = {
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired
};

export default ToolBar;