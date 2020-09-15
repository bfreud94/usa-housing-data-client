import { useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { useLeaflet } from 'react-leaflet';
import { CustomMarker } from '../CustomMarker/CustomMarker';

const mcg = L.markerClusterGroup();

const MarkerCluster = ({ markers }) => {
    const { map } = useLeaflet();
    useEffect(() => {
        mcg.clearLayers();
        markers.forEach((marker) =>
        L.marker(new L.LatLng(marker[0], marker[1]), {
            icon: CustomMarker
        })
        .addTo(mcg)
        .bindPopup(`$${marker[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`)
    );
    map.addLayer(mcg);
}, [markers, map]);
    return null;
};

MarkerCluster.propTypes = {
    markers: PropTypes.array
};

export default MarkerCluster;