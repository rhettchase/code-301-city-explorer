import Movie from './Movie';
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
        <Movie
          title={movie.title}
          overview={movie.overview}
          averageVotes={movie.average_votes}
          totalVotes={movie.total_votes} 
          popularity={movie.popularity}
          releaseDate={movie.released_on}
          imageUrl={movie.image_url}
        />
      </Col>
    ))}
  </Row>
</div>
);
}
