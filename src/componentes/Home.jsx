import React from 'react'
import fotoPerfil from '../../public/img_perfil_cuadrada.jpg'
import linkedinImg from '../../public/linkedin.svg'
import githubImg from '../../public/github.svg'
import mailIco from '../../public/hacia-adelante-blanco.png'
import user_lapiz from '../../public/user_lapiz.png'
import codigoIco from '../../public/codigo.png'
import BotonConEnlace from './BotonConEnlace'
import Proyecto from './Proyecto'


import goPedidosWeb from '../../public/goPedidosWebImg.png'

const Home = () => {

  const iconosContacto = [
    {
      nombre: 'Linkedin',
      url: 'https://www.linkedin.com/in/sebastianrey94',
      img: linkedinImg
    },
    {
      nombre: 'GitHub',
      url: 'https://github.com/sebastianrey13',
      img: githubImg
    },
    {
      nombre: 'areyprada@gmail.com',
      url: 'mailto: areyprada@gmail.com',
      img: mailIco
    },
  ]

  return (
    <div className='home'>
      <div id='contacto' className='containerInfo'>
        <div className='disponible'>
          <img className='fotoPerfil-mini' src={fotoPerfil} alt="" />
          <a href="mailto: areyprada@gmail.com" target="_blank"><p className='containerInfo-nombre-trabajo'>Disponible para trabajar</p></a>
        </div>
        <h1>Hola, Soy Sebastián</h1>
        <div className='containerInfo-descripcion'>
          <p>
            Desarrollador full stack, <span>FrontEnd React y BackEnd Java.</span> De Bucaramanga, Colombia.
          </p>
        </div>
        <div className='containerInfo-links'>
          {iconosContacto.map((contacto, index) => (
            <BotonConEnlace
              key={index + 1}
              nombre={contacto.nombre}
              url={contacto.url}
              img={contacto.img}
            />
          ))}
        </div>
      </div>

      <div id='proyectos' className='containerProyectos'>
        <div className='containerProyectos-titulo'>
          <img src={codigoIco} alt="Ico codigo" />
          <h2>Proyectos</h2>
        </div>
        <Proyecto
          nombre={'Go Pedidos - Pagina web para realizar cotizaciones'}
          descripcion={'Pagina web creada desde cero con react para poder crear cotizaciones, con carrito de compras'}
          urlGithub={'https://github.com/sebastianrey13/go-pedidos'}
          urlWeb={'https://go-pedidos.vercel.app/'}
          imgProyecto={goPedidosWeb}
        />
      </div>

      <div id='sobre-mi' className='containerSobreMi'>
        <div className='sobremiTitulo'>
          <img src={user_lapiz} alt="" />
          <h2>Sobre mi</h2>
        </div>
        <div className='containerSobreMi-descripcion'>
          <p>
            Soy tecnólogo empresarial y graduado de la carrera de Certified Tech Developer en Digital House, a lo largo de la cursada he adquirido y puesto en practica mis conocimientos en Java, Spring Boot, React, JavaScript, CSS3, HTML5, MySQL, Git, GitHub, testing en los diversos trabajos propuestos haciendo uso de la metodología Agile y SCRUM, dando relevancia a escribir un código limpio y comprensible, esencial para entregar un buen software.
          </p>
          <img src={fotoPerfil} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home