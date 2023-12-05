export default function RenderLocation(props) {
  const { location, latitude, longitude, apiKey } = props;
  return (
    <>
      {location.display_name && latitude.lat && longitude.lon && (
        <div className="results">
          <h2>The city is: {location.display_name}</h2>
          <h2>The latitude is: {latitude.lat}</h2>
          <h2>The longitude is: {longitude.lon}</h2>
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${latitude.lat},${longitude.lon}&zoom=12&size=600x400&format=jpg&maptype=streets`}
            alt='map'
          />
        </div>
      )}
    </>
  );
}
