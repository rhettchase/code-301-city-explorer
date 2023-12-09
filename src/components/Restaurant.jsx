import Card from 'react-bootstrap/Card';

export default function Restaurant({
  name,
  image_url,
  review_count,
  categories,
  rating,
  coordinates,
  address,
}) {
  return (
    <Card style={{ width: '25rem' }} className='mb-3'>
      <Card.Img variant='top' src={image_url} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Review Count: {review_count}</Card.Text>
        <Card.Text>Categories: {categories}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Coordinates: {`${coordinates.latitude}, ${coordinates.longitude}`}</Card.Text>
        <Card.Text>
          Address: {`${address.city}, ${address.zip_code}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
