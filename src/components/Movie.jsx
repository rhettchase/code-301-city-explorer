import Card from 'react-bootstrap/Card';

export default function Movie({
    title,
    overview,
    averageVotes,
    totalVotes,
    popularity,
    releaseDate,
    imageUrl,
  }) {
    return (
      <Card style={{ width: '25rem' }} className='mb-3'>
        <Card.Img variant='top' src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Card.Text>Average Votes: {averageVotes}</Card.Text>
          <Card.Text>Total Votes: {totalVotes}</Card.Text>
          <Card.Text>Popularity: {popularity}</Card.Text>
          <Card.Text>Released On: {releaseDate}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
