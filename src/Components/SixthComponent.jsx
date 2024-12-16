function SixthComponent({username,age,profission,address,gender,index}) {
  return (
    <div className="container" key={index}>
      <h5>{username}</h5>
      <h6>{profission}</h6>
      <p>{age}</p>
      <p>{address}</p>
      <p>{gender}</p>
    </div>
  )
}

export default SixthComponent
