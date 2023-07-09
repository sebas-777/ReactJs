import React from 'react'

function Coche(props) {
  return (
    <div>
      <h2>Matricula {props.matricula}</h2>
      <h3>Y el precio es{props.precio} </h3>
    </div>
  )
}

export default Coche
