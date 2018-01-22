function TripInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar trip={trip} />
      <div className="TripInfo-name">
        {props.trip.fname}
      </div>
    </div>
  );
}