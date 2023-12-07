import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Movies( {movies, location} ) {
  return (
    <div className='movies'>
    {movies.length > 0 && (
      <h2>Movies with {location.display_name} in the name:</h2>
    )}
    <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
      {movies.map((movie, index) => (
        <Col key={index}>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant='top' src={movie.image_url} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>Average Votes: {movie.average_votes}</Card.Text>
              <Card.Text>Total Votes: {movie.total_votes}</Card.Text>
              <Card.Text>Popularity: {movie.popularity}</Card.Text>
              <Card.Text>Released On: {movie.released_on}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
}
