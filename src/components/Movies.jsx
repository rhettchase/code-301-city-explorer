import Card from 'react-bootstrap/Card';

export default function Movies( {movies} ) {
  return (
    <div>
      {movies.map((movie, index) => (
        <Card key={index} style={{ width: '18rem' }}>
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
      ))}
    </div>
  );
}
