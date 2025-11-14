import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Login.css';
import loginLogo from '../assets/1_Desktop_ibmec_logo_430884bed1.svg'

const Login = () => {
  const [cnpj, definirCnpj] = useState('');
  const [senha, definirSenha] = useState('');
  const navegar = useNavigate();

  const aoEnviar = (e) => {
    e.preventDefault();

    if (cnpj.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Se passou da validação, redireciona para home
    navegar('/');
  };

  return (
    <div className="container-login">
      <div className="login-box">
        <div className="imagem-lateral"></div>

        <div className="formulario">
          <img src={loginLogo} alt="Logo Ibmec" className="logo" />

          <form id="formularioLogin" onSubmit={aoEnviar}>
            <label htmlFor="cnpj">CNPJ</label>
            <input 
              type="text" 
              id="cnpj" 
              name="cnpj" 
              placeholder="Ex: XX.XXX.XXX/0001-XX" 
              value={cnpj}
              onChange={(e) => definirCnpj(e.target.value)}
              required 
            />

            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha" 
              name="senha" 
              placeholder="Sua senha de Empresa" 
              value={senha}
              onChange={(e) => definirSenha(e.target.value)}
              required 
            />

            <button type="submit" className="btn-entrar">Entrar</button>
          </form>

          <a href="#" className="link-empresa">Entrando como Empresa</a>
        </div>
      </div>
    </div>
  );
};

export default Login;