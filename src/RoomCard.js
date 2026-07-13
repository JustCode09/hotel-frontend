function RoomCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: Rs {props.price} / night</p>
      <p>View: {props.view}</p>
      <button>Book Now</button>
    </div>
  );
}

export default RoomCard;