import Card from 'react-bootstrap/Card';

export default function WeatherDay({ date, low, high, weather }) {
  return (
    <Card>
    <Card.Body>
      <Card.Title>{date}</Card.Title>
      <Card.Text>
        Low: {low}, High: {high}, Weather: {weather}
      </Card.Text>
    </Card.Body>
  </Card>
);
}
