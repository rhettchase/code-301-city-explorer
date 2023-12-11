import { useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

const RenderMap = ({ restaurants, latitude, longitude, apiKey }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://tiles.locationiq.com/v3/libs/maplibre-gl/1.15.2/maplibre-gl.js';
    script.async = true;
    script.onload = () => {
      console.log('Script loaded'); // Add this line
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Define initializeMap function
  const initializeMap = () => {
    console.log('Initializing map');
    if (!restaurants || restaurants.length === 0 || !latitude || !longitude) {
      console.log('No restaurants data or invalid location');
      return;
    }

    console.log(window.locationiq);

    if (window.locationiq) {
      window.locationiq.key = apiKey;
    } else {
      console.error('LocationIQ library is not loaded');
      return;
    }

    // Initialize map
    const map = new maplibregl.Map({
      container: 'map', // container id
      style: window.locationiq.getLayer('Streets'), // Use LocationIQ's style
      center: [parseFloat(longitude), parseFloat(latitude)], // Parse longitude and latitude to float
      zoom: 9, // starting zoom
    });
    console.log('Map initialized')

    setMapInitialized(true); // Set mapInitialized to true after the map has been initialized

    // For each restaurant
    restaurants.forEach((restaurant) => {
      // Parse latitude and longitude to float
      const restaurantLatitude = parseFloat(restaurant.coordinates.latitude);
      const restaurantLongitude = parseFloat(restaurant.coordinates.longitude);

      // Create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage =
        'url(https://tiles.locationiq.com/static/images/marker50px.png)';
      el.style.width = '50px';
      el.style.height = '50px';

      // Add marker to map
      new maplibregl.Marker(el)
        .setLngLat([restaurantLongitude, restaurantLatitude])
        .addTo(map);
    });
  };

  useEffect(() => {
    console.log('Running useEffect');
    console.log('latitude:', latitude);
    console.log('longitude:', longitude);
    console.log('mapInitialized:', mapInitialized);
    if (!scriptLoaded || latitude === undefined || longitude === undefined || mapInitialized) return;
    console.log('restaurants:', restaurants);
    initializeMap();
  }, [apiKey, scriptLoaded, mapInitialized, latitude, longitude]);

  return <div id='map' style={{ width: '100%', height: '100%' }} />;
};

export default RenderMap;
