import React from 'react'
import BotonConEnlace from './BotonConEnlace'
import BotonTecnologias from './BotonTecnologias'
import githubImg from '../../public/github.svg'
import urlImg from '../../public/url.png'
import iconReact from '../../public/icons8-react-48.png'
import iconCss from '../../public/icons8-css-48.png'


const Proyecto = (props) => {



  return (
    <div className='cardProyecto'>
      <h2 className='proyectoNombre'>{props.nombre}</h2>
      <p className='proyectoDescripcion'>{props.descripcion}</p>
      <div className='cardProyecto-skills-usadas'>
        <BotonTecnologias
          nombre={'React'}
          img={iconReact}
        />
        <BotonTecnologias
          nombre={'CSS'}
          img={iconCss}
        />
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