import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { dropdownOptions } from '../util/DropdownOptions';
import './MapDropdown.css';

class MapDropdown extends Component {

    render() {
        const { dropdownChange, dropdownValue } = this.props;
        return (
            <Select className='mapdropdown-select-menu' options={dropdownOptions()} onChange={(e) => dropdownChange(e)} value={dropdownValue} />
        );
    }
}

MapDropdown.propTypes = {
    dropdownChange: PropTypes.func.isRequired,
    dropdownValue: PropTypes.object.isRequired
}

export default MapDropdown;