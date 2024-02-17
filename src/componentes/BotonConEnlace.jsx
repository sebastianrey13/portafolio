import React from 'react'

const BotonConEnlace = (props) => {
  return (
    <div className='info-links'>
      <a href={props.url} target="_blank"><img className='info-links-img' src={props.img} alt={props.nombre} />{props.nombre}</a>
    </div>
  )
}

export default BotonConEnlace