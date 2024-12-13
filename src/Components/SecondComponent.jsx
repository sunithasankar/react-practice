import React from 'react'

function SecondComponent(props) {
  const {username,age,profission} = props
  return (
    <div>
      <h4>Name:{username}</h4>
      <h4>Age:{age}</h4>
      <h4>Profission:{profission}</h4>
      <hr/>
    </div>
  )
}

export default SecondComponent
