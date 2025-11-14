import React from 'react';
import { Link } from 'react-router-dom';
import '../assets'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo-card">
          <img src="src/assets/logo.png" alt="Ibmec" />
        </div>
        <ul className="menu">
          <li><Link to="/" className="menu-link">Home</Link></li>
          <li><Link to="/projetos" className="menu-link">Projetos</Link></li>
          <li><Link to="/submeter-projeto" className="menu-link">Submeter Projeto</Link></li>
          <li><Link to="/perfil" className="menu-link">Perfil</Link></li>
          <li><Link to="/sobre" className="menu-link">Sobre</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;