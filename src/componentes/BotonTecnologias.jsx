import React from 'react'

const BotonTecnologias = (props) => {
  return (
    <div className='tecnologias-usadas'>
      <img className='tecnologias-usadas-img' src={props.img} alt={props.nombre} />
      <p>{props.nombre}</p>
    </div>
  )
}

export default BotonTecnologias