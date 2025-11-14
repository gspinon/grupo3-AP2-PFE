import React from 'react';
import { useNavigate } from 'react-router-dom';
import fotoPerfil from '../assets/profile-circle-svgrepo-com.svg'

const Perfil = () => {
  const navegar = useNavigate();

  const aoSair = () => {
    if (window.confirm("Tem certeza que deseja sair?")) {
      navegar('/login');
    }
  };

  return (
    <div className="conteudo-perfil">
      <div className="cabecalho-perfil">
        <h1>Seu Perfil</h1>
      </div>

      <div className="container-perfil">
        {/* Coluna Esquerda */}
        <div className="coluna-esquerda-perfil">
          <div className="moldura-foto">
            <img src={fotoPerfil} alt="Foto Perfil" />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="coluna-direita-perfil">
          {/* Nome da Empresa */}
          <div className="secao-perfil">
            <h3>Nome:</h3>
            <div className="campo-perfil">
              Nome da Empresa
            </div>
          </div>

          {/* CNPJ */}
          <div className="secao-perfil">
            <h3>CNPJ:</h3>
            <div className="campo-perfil">
              XX.XXX.XXX/0001-XX
            </div>
          </div>

          {/* Botão Logout */}
          <button className="botao-logout" onClick={aoSair}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;