import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BarGraph from '../BarGraph/BarGraph';
import Panel from '../Panel/Panel';
import { dropdownOptions } from '../../util/DropdownOptions';
import MapDropdown from '../MapDropdown/MapDropdown';
import { getHousingData } from '../../actions/housingDataActions';
import store from '../../store';
import './DataAnalysis.css';

class DataAnalysis extends Component {

    constructor() {
        super();
        this.state = {
            dropdownValue: dropdownOptions()[0]
        };
    }

    componentDidMount() {
        const { dropdownValue } = this.state;
        if (store.getState().housingData.data[dropdownValue.value].length === 0) {
            this.props.getHousingData(dropdownValue.value);
        }
    }

    componentDidUpdate() {
        const { dropdownValue } = this.state;
        if (store.getState().housingData.data[dropdownValue.value].length === 0) {
            this.props.getHousingData(dropdownValue.value);
        }
    }

    dropdownChange = (e) => {
        this.setState({
            dropdownValue: e
        });
    }

    maxData = () => {
        const { dropdownValue } = this.state;
        const { housingData } = store.getState();
        return housingData.data[dropdownValue.value].sort((a, b) => (a[2] < b[2] ? 1 : -1)).slice(0, 10);
    }

    minData = () => {
        const { dropdownValue } = this.state;
        const { housingData } = store.getState();
        return housingData.data[dropdownValue.value].sort((a, b) => (a[2] > b[2] ? 1 : -1)).slice(0, 10);
    }

    render() {
        const { dropdownValue } = this.state;
        const maxData = this.maxData().map((x) => x[2]);
        const maxLabels = this.maxData().map((x) => x[3]);
        const minData = this.minData().map((x) => x[2]);
        const minLabels = this.minData().map((x) => x[3]);
        return (
            <div className='data-analysis-container'>
                <MapDropdown dropdownChange={this.dropdownChange} dropdownValue={dropdownValue} />
                <Panel component={<BarGraph data={maxData} dropdownValue={dropdownValue} labels={maxLabels} />} />
                <Panel component={<BarGraph data={minData} dropdownValue={dropdownValue} labels={minLabels} />} />
            </div>
        );
    }
}

DataAnalysis.propTypes = {
    getHousingData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    housingData: state.housingData
});

export default connect(mapStateToProps, { getHousingData })(DataAnalysis);