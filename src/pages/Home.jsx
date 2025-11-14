import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="conteudo-home">
      <div className="home-banner">
        <p>BEM VINDO, EMPRESA!</p>
      </div>

      <div className="home-imagem-fundo">
        <img src="public/predio.png" alt="Prédio Ibmec" />
      </div>

      <div className="botoes-home">
        <Link to="/projetos">
          <button className="botao-home">
            <i className="fa-solid fa-list"></i> Projetos
          </button>
        </Link>
        <Link to="/submeter-projeto">
          <button className="botao-home">
            <i className="fa-solid fa-upload"></i> Submeter Projeto
          </button>
        </Link>
        <Link to="/perfil">
          <button className="botao-home">
            <i className="fa-solid fa-user"></i> Seu Perfil
          </button>
        </Link>
        <Link to="/sobre">
          <button className="botao-home">
            <i className="fa-solid fa-info-circle"></i> Sobre nós
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;