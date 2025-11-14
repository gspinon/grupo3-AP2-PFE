import React, { useState } from 'react';
import imagemPadrao from '../assets/profile-circle-svgrepo-com.svg';

const CartaoProjeto = ({ 
  nomeProjeto, 
  dataInicio, 
  dataFim, 
  encarregado, 
  cnpj, 
  descricao,
  logo,
  status 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const obterIcone = () => {
    switch (status) {
      case 'andamento':
        return <i className="fa-regular fa-clock"></i>;
      case 'feedback':
        return <i className="fa-solid fa-circle-info"></i>;
      default:
        return null;
      }
    };  return (
    <div 
      className="cartao-projeto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <>
          <img src={imagemPadrao} alt={nomeProjeto} />
          <div className="info-projeto">
            <span>{nomeProjeto}</span>
            {obterIcone() && (
              <button className="botao-info">
                {obterIcone()}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="cartao-projeto-detalhes">
          <div className="detalhe-item">
            <strong>Projeto:</strong> {nomeProjeto}
          </div>
          <div className="detalhe-item">
            <strong>Data Início:</strong> {dataInicio}
          </div>
          <div className="detalhe-item">
            <strong>Data Fim:</strong> {dataFim}
          </div>
          <div className="detalhe-item">
            <strong>Encarregado:</strong> {encarregado}
          </div>
          <div className="detalhe-item">
            <strong>CNPJ:</strong> {cnpj}
          </div>
          <div className="detalhe-item">
            <strong>Descrição:</strong> {descricao}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartaoProjeto;