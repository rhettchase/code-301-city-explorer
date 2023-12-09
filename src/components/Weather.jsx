import WeatherDay from "./WeatherDay";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Weather(props) {
  const { location, forecast, forecastFetch } = props;

  return (
    <>
      {location.display_name && (
        <Container>
        <h2>Weather forecast for {location.display_name}:</h2>
        {forecast.length > 0 && forecastFetch ? (
          <div>
          <p>Last fetched in Pacific Time: {forecastFetch}</p>
          <Row>
            {forecast.map((day) => (
              <Col key={day.date} md={5}>
                <WeatherDay
                  date={day.date}
                  low={day.low}
                  high={day.high}
                  weather={day.weather}
                />
              </Col>
            ))}
          </Row>
          </div>
        ) : (
          <p>No weather available for {location.display_name}.</p>
        )}
      </Container>
    )}
  </>
);
}