import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmeterProjeto = ({ onAdicionarProjeto }) => {
  const navegar = useNavigate();
  const [dadosFormulario, definirDadosFormulario] = useState({
    nomeProjeto: '',
    dataInicio: '',
    dataFim: '',
    encarregado: '',
    cnpj: '',
    descricao: ''
  });

  const aoMudar = (e) => {
    const { name, value } = e.target;
    definirDadosFormulario(estadoAnterior => ({
      ...estadoAnterior,
      [name]: value
    }));
  };

  const aoEnviar = (e) => {
    e.preventDefault();
    
    // Chamar a função recebida via props
    onAdicionarProjeto(dadosFormulario);
    
    // Limpar formulário
    definirDadosFormulario({
      nomeProjeto: '',
      dataInicio: '',
      dataFim: '',
      encarregado: '',
      cnpj: '',
      descricao: ''
    });
    
    alert('Projeto enviado com sucesso!');
    navegar('/projetos');
  };

  return (
    <div className="conteudo-submeter">
      <div className="container-formulario">
        <form className="formulario-projeto" onSubmit={aoEnviar}>
          <div className="linha-formulario">
            <div className="campo-formulario">
              <label>Nome do Projeto</label>
              <input 
                type="text" 
                name="nomeProjeto"
                value={dadosFormulario.nomeProjeto}
                onChange={aoMudar}
                required
              />
            </div>
            <div className="campo-formulario curto">
              <label>Data de Início</label>
              <input 
                type="date" 
                name="dataInicio"
                value={dadosFormulario.dataInicio}
                onChange={aoMudar}
                required
              />
            </div>
            <div className="campo-formulario curto">
              <label>Data de Fim</label>
              <input 
                type="date" 
                name="dataFim"
                value={dadosFormulario.dataFim}
                onChange={aoMudar}
                required
              />
            </div>
          </div>

          <div className="linha-formulario">
            <div className="campo-formulario">
              <label>Encarregado do Projeto</label>
              <input 
                type="text" 
                name="encarregado"
                value={dadosFormulario.encarregado}
                onChange={aoMudar}
                required
              />
            </div>
            <div className="campo-formulario curto">
              <label>CNPJ</label>
              <input 
                type="text" 
                name="cnpj"
                value={dadosFormulario.cnpj}
                onChange={aoMudar}
                required
              />
            </div>
          </div>

          <div className="campo-formulario">
            <label>Descrição do Projeto</label>
            <textarea 
              name="descricao"
              value={dadosFormulario.descricao}
              onChange={aoMudar}
              required
            ></textarea>
          </div>

          <div className="container-botao">
            <button type="submit" className="botao-enviar">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmeterProjeto;