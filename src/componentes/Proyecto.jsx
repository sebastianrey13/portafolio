import React from 'react'
import BotonConEnlace from './BotonConEnlace'
import githubImg from '../../public/github.svg'
import urlImg from '../../public/url.png'


const Proyecto = (props) => {

  return (
    <div className='cardProyecto'>
      <h2 className='proyectoNombre'>{props.nombre}</h2>
      <p className='proyectoDescripcion'>{props.descripcion}</p>
      <div>
        <p>Botones de tecnologias trabajadas</p>
      </div>
      <img className='cardProyectoImg' src={props.imgProyecto} alt="captura de la pagina del proyecto" />
      <div className='cardProyecto-links-proyecto'>
        <BotonConEnlace
          nombre={'Código fuente'}
          url={props.urlGithub}
          img={githubImg}
        />

        <BotonConEnlace
          nombre={'Ir al sitio web'}
          url={props.urlWeb}
          img={urlImg}
        />
      </div>
    </div>
  )
}

export default Proyecto