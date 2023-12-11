import Restaurant from './Restaurant';
import RenderMap from './RenderMap'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function RenderRestaurants({ restaurants, location, restaurantsFetch, apiKey }) {
  return (
    <Container>
    <div className='restaurants'>
      {restaurants.length > 0 && (
        <div>
          <h2>Restaurants in {location.display_name}:</h2>
          {restaurantsFetch && <p>Last fetched in Pacific Time: {restaurantsFetch}</p>}
          {restaurants &&
            <RenderMap
              restaurants={restaurants}
              apiKey={apiKey}
            />
          }
        </div>
      )}

      <Row xs={1} md={2} lg={3} className='g-4'>
        {restaurants.map((restaurant, index) => (
          <Col key={index} className='mb-3'>
            <Restaurant
              name={restaurant.name}
              image_url={restaurant.image_url}
              review_count={restaurant.review_count}
              categories={restaurant.categories}
              rating={restaurant.rating}
              coordinates={restaurant.coordinates}
              address={restaurant.location}
            />
          </Col>
        ))}
      </Row>
    </div>
    </Container>
  );
}
