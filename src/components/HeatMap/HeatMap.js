import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { getHousingData } from '../../actions/housingDataActions';
import MarkerCluster from '../MarkerCluster/MarkerCluster';
import store from '../../store.js';
import './HeatMap.css';

class HeatMap extends Component {

    constructor() {
        super();
        this.state = {
            latitude: 39.8283,
            longitude: -98.5795,
            zoom: 5
        }
    }

    componentDidMount() {
        if (store.getState().housingData.length === 0) {
            this.props.getHousingData();
        }
    }

    map = () => {
        const { latitude, longitude, zoom } = this.state;
        const position = [latitude, longitude];
        const dataPoints = store.getState().housingData;
        const map = (
            <Map className="map" center={position} zoom={zoom}>
                <HeatmapLayer
                    points={dataPoints}
                    longitudeExtractor={m => m[1]}
                    latitudeExtractor={m => m[0]}
                    intensityExtractor={m => parseFloat(m[2])} />
                <MarkerCluster markers={dataPoints}/>
                <TileLayer
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        );
        return map;
    }

    mapMarkers = () => {
        const markers = [];
        const { housingData } = store.getState();
        if(typeof housingData !== 'undefined' && housingData.length > 0) {
            housingData.forEach((data, index) => {
                if(index < 3) {
                    const coordinates = [data[0], data[1]];
                    markers.push(
                    <Marker key={index} position={coordinates}>
                        <Popup>${data[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Popup>
                    </Marker>
                    );
                }
            });
        }
        return markers;
    }

    render() {
        return (
            <React.Fragment>
                {this.map()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    housingData: state.housingData
 })
 
 export default connect(mapStateToProps, { getHousingData })(HeatMap);