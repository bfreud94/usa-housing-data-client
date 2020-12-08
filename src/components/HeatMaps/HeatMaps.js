import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import MapDropdown from '../MapDropdown/MapDropdown';
import MarkerCluster from '../MarkerCluster/MarkerCluster';
import { getHousingData } from '../../actions/housingDataActions';
import { dropdownOptions } from '../../util/DropdownOptions';
import store from '../../store';
import './HeatMaps.css';

class HeatMap extends Component {

    constructor() {
        super();
        this.state = {
            dropdownValue: dropdownOptions()[0],
            latitude: 40.7506,
            longitude: -73.9935,
            zoom: 7
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

    map = () => {
        const { dropdownValue, latitude, longitude, zoom } = this.state;
        const position = [latitude, longitude];
        const dataPoints = store.getState().housingData.data[dropdownValue.value];
        const map = (
            <Map className='map' center={position} zoom={zoom}>
                <HeatmapLayer
                    points={dataPoints}
                    longitudeExtractor={(m) => m[1]}
                    max={dropdownValue.maximum}
                    radius={50}
                    latitudeExtractor={(m) => m[0]}
                    intensityExtractor={(m) => parseFloat(m[2])}
                />
                <MarkerCluster markers={dataPoints} />
                <TileLayer
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        );
        return map;
    }

    render() {
        const { dropdownValue } = this.state;
        return (
            <div className='heatmaps-wrapper'>
                <div className='heatmaps-header'>
                    <h2 className='heatmaps-title'>Select a Data Map</h2>
                    <MapDropdown dropdownChange={this.dropdownChange} dropdownValue={dropdownValue} />
                </div>
                {this.map()}
            </div>
        );
    }
}

HeatMap.propTypes = {
    getHousingData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    housingData: state.housingData
});

export default connect(mapStateToProps, { getHousingData })(HeatMap);