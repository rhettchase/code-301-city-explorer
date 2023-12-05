import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CityForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.getLocation(event.target.value);
  }

//   function handleSelect(event) {
//     props.handleRegionSelect(event.target.value);
//   }

  return (
    <Form onSubmit={handleSubmit} className='form'>
      {/* <Form.Label>Region</Form.Label>
      <Form.Select onChange={handleSelect}>
        <option value='US'>US</option>
        <option value='EU'>EU</option>
      </Form.Select> */}
      <Form.Group className='mb-3'>
        <Form.Label className='mb-3'>City</Form.Label>
        <Form.Control onChange={props.updateQuery} placeholder='Enter city' className='mb-2'/>
        <Form.Text >Enter city to find latitude and longitude</Form.Text>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Explore!
      </Button>
    </Form>
  );
}
