import React, { useState } from 'react';

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setActiveItem(sectionId);
    }
  };

  return (
    <div className='header'>
      <nav>
        <p
          className={activeItem === 'proyectos' ? 'active' : ''}
          onClick={() => scrollToSection('proyectos')}
        >
          Proyectos
        </p>
        <p
          className={activeItem === 'sobre-mi' ? 'active' : ''}
          onClick={() => scrollToSection('sobre-mi')}
        >
          Sobre mí
        </p>
        <p
          className={activeItem === 'contacto' ? 'active' : ''}
          onClick={() => scrollToSection('contacto')}
        >
          Contacto
        </p>
      </nav>
    </div>
  );
};

export default Header;