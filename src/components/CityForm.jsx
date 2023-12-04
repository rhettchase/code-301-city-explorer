import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CityForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    props.getLocation(event.target.value);
    alert('submitted');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>City</Form.Label>
        <Form.Control onChange={props.updateQuery} placeholder='Enter city' />
        <Form.Text>
          Enter city to find latitude and longitude
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Explore!
      </Button>
    </Form>
  );
}
