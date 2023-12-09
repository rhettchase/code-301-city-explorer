import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CityForm from './components/CityForm';
import RenderLocation from './components/RenderLocation';
import Weather from './components/Weather';
import RenderMovies from './components/RenderMovies';
import HandleError from './components/HandleError';
import RenderRestaurants from './components/RenderRestaurants';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_KEY = import.meta.env.VITE_API_KEY;
const weatherAPI = import.meta.env.VITE_API_URL;
const yelpAPI = import.meta.env.VITE_API_URL;

export default function App() {
  const [location, setLocation] = useState({ display_name: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [forecastFetch, setForecastFetch] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesFetch, setMoviesFetch] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [restFetch, setRestFetch] = useState('');

  async function getLocation() {
    const locationAPI = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    try {
      const response = await axios.get(locationAPI);
      const locationObj = response.data[0];
      setLocation(locationObj);
      setLatitude(locationObj.lat);
      setLongitude(locationObj.lon);
      console.log(locationObj);
      setError(null); // Clear any previous errors
      // Call getWeather after successfully fetching the location
      await getWeather();
      getMovies();
      getFood();
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code outside the 2xx range
        const { status } = error.response;
        setError(`Data Error - Status Code: ${status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('Fetch Error: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Fetch Error: ' + error.message);
      }
    }
  }

  async function getMovies() {
    if (location) {
      try {
        const movieAPIurl = `https://city-explorer-api-7n8z.onrender.com/movie?searchQuery=${searchQuery}`;
        const movieResponse = await axios.get(movieAPIurl);

        // Extract the movie array from the data property
        const movieArray = movieResponse.data.data || [];

        setMovies(movieArray);
        setMoviesFetch(movieResponse.data.PTfetch);
        console.log(movieArray);
        console.log(movieResponse.data.PTfetch);
      } catch (error) {
        console.log('Error fetching movie data:', error);
      }
    }
  }

  useEffect(() => {
    // Use useEffect to call getWeather when latitude and longitude are updated
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude, searchQuery]); // Add searchQuery as a dependency

  async function getWeather() {
    // Check if latitude and longitude are not empty before making the request
    if (latitude && longitude) {
      try {
        const url = `${weatherAPI}/weather`;
        const weatherResponse = await axios.get(url, {
          params: { lat: latitude, lon: longitude },
        });
        setForecast(weatherResponse.data.data);
        console.log(weatherResponse.data.data); // Log the data received from the API
        setForecastFetch(weatherResponse.data.PTfetch);
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching weather data:', error);
        setForecast([]); // Set forecast to an empty array in case of an error
      }
    }
  }

  async function getFood() {
    if (location) {
      try {
        const yelpAPIurl = `${yelpAPI}/yelp`;
        const foodResponse = await axios.get(yelpAPIurl, {
          params: { searchQuery: searchQuery },
        });
        setRestaurants(foodResponse.data.data);
        console.log(foodResponse.data.data);
        setRestFetch(foodResponse.data.PTfetch);
      } catch (error) {
        console.log('Error fetching restaurant data:', error);
        setRestaurants([]);
      }
    }
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <section className='body'>
      <Header />
      <HandleError error={error} />
      {!error && (
        <CityForm getLocation={getLocation} updateQuery={updateQuery} />
      )}
      <RenderLocation
        location={location}
        latitude={latitude}
        longitude={longitude}
        apiKey={API_KEY}
      />
      <Weather
        location={location}
        forecast={forecast}
        forecastFetch={forecastFetch}
      />
      <RenderRestaurants restaurants={restaurants} restFetch={restFetch} location={location}/>
      <RenderMovies
        movies={movies}
        location={location}
        moviesFetch={moviesFetch}
      />
    </section>
  );
}
