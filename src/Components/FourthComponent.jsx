import React from 'react'

function FourthComponent({ user: { name, location, age } }) {
  return (
    <div>
       <h1>{name}</h1>
      <p>{location}</p>
      <p>Age: {age}</p> 
    </div>
  )
}

export default FourthComponent
