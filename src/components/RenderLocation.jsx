export default function RenderLocation(props) {
  const { location, latitude, longitude, apiKey } = props;
  return (
    <>
      {location.display_name && latitude && longitude && (
        <div className="results">
          <h2>The city is: {location.display_name}</h2>
          <h2>The latitude is: {latitude}</h2>
          <h2>The longitude is: {longitude}</h2>
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${latitude},${longitude}&zoom=12&size=600x400&format=jpg&maptype=streets`}
            alt='map'
          />
        </div>
      )}
    </>
  );
}
