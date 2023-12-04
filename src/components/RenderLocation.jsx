

export default function RenderLocation(props) {
  return (
    <>
      <h2>The city is: {props.location.display_name}</h2>
      <h2>The latitude is: {props.latitude.lat}</h2>
      <h2>The longitude is: {props.longitude.lon}</h2>
    </>
  );
}
