import { useState } from 'react';
import axios from 'axios';
import CityForm from './components/CityForm';
import RenderLocation from './components/RenderLocation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [location, setLocation] = useState({ display_name: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState({ lat: '' });
  const [longitude, setLongitude] = useState({ lon: '' });
  // const [region, setRegion] = useState('');

  async function getLocation() {
    // let API = '';
    // if (region === 'US') {
    //   API = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    // } else if (region === 'EU') {
    //   API = `https://eu1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    // } else {
    //   alert('Please select region to continue');
    //   return;
    // }
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

  // function handleRegionSelect(selection) {
  //   setRegion(selection);
  //   alert(`Region selected is: ${selection}`);
  // }


  return (
    <>
      <CityForm
        getLocation={getLocation}
        updateQuery={updateQuery}
        // handleRegionSelect={handleRegionSelect}
      />
      <RenderLocation
        location={location}
        latitude={latitude}
        longitude={longitude}
        apiKey={API_KEY}
      />
    </>
  );
}
