import { useState } from 'react';
import axios from 'axios';
import CityForm from './components/CityForm';
import RenderLocation from './components/RenderLocation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [location, setLocation] = useState({ display_name: 'info about ??' });
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState({ lat: '' });
  const [longitude, setLongitude] = useState({ lon: '' });

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(API);
    const locationObj = response.data[0];
    setLocation(locationObj);
    setLatitude(locationObj);
    setLongitude(locationObj);
    console.log(locationObj);
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <CityForm getLocation={getLocation} updateQuery={updateQuery} />
      <RenderLocation
        location={location}
        latitude={latitude}
        longitude={longitude}
      />
      {/* <input onChange={updateQuery} />
      <button onClick={getLocation}>Explore!</button>
      <h2>The city is: {location.display_name}</h2>
      <h2>The latitude is: {latitude.lat}</h2>
      <h2>The longitude is: {longitude.lon}</h2> */}
    </>
  );
}
