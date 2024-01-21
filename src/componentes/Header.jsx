import React from 'react';

const Header = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='header'>
      <nav>
        <p onClick={() => scrollToSection('proyectos')}>Proyectos</p>
        <p onClick={() => scrollToSection('sobre-mi')}>Sobre mí</p>
        <p onClick={() => scrollToSection('contacto')}>Contacto</p>
      </nav>
    </div>
  );
};

export default Header;