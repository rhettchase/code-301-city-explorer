export default function Weather(props) {
  const { location, forecast } = props;

  return (
    <>
      {location.display_name && (
        <div className='weather-results'>
          <h2>Weather forecast for {location.display_name}:</h2>
          {forecast.length > 0 ? (
            <>
              <ul>
                {forecast.map((day) => (
                  <li key={day.date}>
                    {day.date} - Low: {day.low}, High: {day.high}, Weather:{' '}
                    {day.weather}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No weather available for {location.display_name}.</p>
          )}
        </div>
      )}
    </>
  );
}
