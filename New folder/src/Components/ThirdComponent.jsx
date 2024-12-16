import React from 'react'

function ThirdComponent(props) {
  return (
    <div>
       <h1>Name:{props.user.name}</h1>
      <p>Location:{props.user.location}</p>
      <p>Age: {props.user.age}</p>
    </div>
  )
}

export default ThirdComponent
