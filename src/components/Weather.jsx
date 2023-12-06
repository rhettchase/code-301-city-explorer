export default function Weather(props) {
  const { location, forecast } = props;

  return (
    <>
      {location.display_name && forecast.length > 0 && (
        <div className="weather-results">
          <h2>The forecast is:</h2>
          <ul>
            {forecast.map((day) => (
              <li key={day.date}>
                {day.date} - Low: {day.low}, High: {day.high}, Weather: {day.weather}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
