import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

class Panel extends Component {

    render() {
        const { component } = this.props;
        return (
            <div className='panel'>
                {component}
            </div>
        );
    }
}

Panel.propTypes = {
    component: PropTypes.object.isRequired
};

export default Panel;