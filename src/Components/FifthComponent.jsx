function FifthComponent({
  name,
  address,
  gender,
  attributes: { height, hairColor, eye },
}) {
  return (
    <div className="employees">
      <p>{name}</p>
      <p>{address}</p>
      <p>{gender}</p>
      <p>{height}</p>
      <p>{eye}</p>
      <p>{hairColor}</p>
    </div>
  );
}

export default FifthComponent;
