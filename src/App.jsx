import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CityForm from './components/CityForm';
import RenderLocation from './components/RenderLocation';
import HandleError from './components/HandleError';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [location, setLocation] = useState({ display_name: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState({ lat: '' });
  const [longitude, setLongitude] = useState({ lon: '' });
  const [error, setError] = useState(null);
  // const [region, setRegion] = useState('');

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    try {
      // let API = '';
      // if (region === 'US') {
      //   API = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
      // } else if (region === 'EU') {
      //   API = `https://eu1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
      // } else {
      //   alert('Please select region to continue');
      //   return;
      // }

      const response = await axios.get(API);
      const locationObj = response.data[0];
      setLocation(locationObj);
      setLatitude(locationObj);
      setLongitude(locationObj);
      console.log(locationObj);
      setError(null); // Clear any previous errors
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code outside the 2xx range
        const { status } = error.response;
        setError(`Data Error - Status Code: ${status}\nMessage: ${error.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('Fetch Error: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Fetch Error: ' + error.message);
      }
    }
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
    <Header />
    <HandleError error={error} />
    {!error && <CityForm
        getLocation={getLocation}
        updateQuery={updateQuery}
        // handleRegionSelect={handleRegionSelect}
      />}
      <RenderLocation
        location={location}
        latitude={latitude}
        longitude={longitude}
        apiKey={API_KEY}
      />
    </>
  );
}
