import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmF5Ym1pcmFuZGEiLCJhIjoiY2xoemVjOTlhMGZnaDNkbXZtZ3FmbGIzNCJ9._pMIr67p3_QY_cgW0nJpIA'; // Substitua pela sua chave de acesso do Mapbox

    if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

    map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });

  }, []);


  return (
    <div>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>   
        <div className='map-container' ref={mapContainer.current} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Map;