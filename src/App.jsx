import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Projetos from './pages/Projetos';
import SubmeterProjeto from './pages/SubmeterProjetos';
import Perfil from './pages/Perfil';
import Sobre from './pages/Sobre';
import './estilos/App.css';

// Componente de Layout com Navbar e Footer
const LayoutComNavigation = ({ children }) => (
  <div className="App">
    <Navbar />
    <main className="conteudo-principal">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  const [projetos, defineProjetost] = useState({
    aguardando: [
      { 
        id: 1, 
        nomeProjeto: 'Projeto 1', 
        dataInicio: '01/11/2024',
        dataFim: '30/12/2024',
        encarregado: 'João Silva',
        cnpj: '12.345.678/0001-90',
        descricao: 'Desenvolvimento de sistema de gestão',
        logo: '/src/assets/ambev.png'
      }
    ],
    andamento: [
      { 
        id: 2, 
        nomeProjeto: 'Projeto 2', 
        dataInicio: '05/10/2024',
        dataFim: '15/01/2025',
        encarregado: 'Maria Santos',
        cnpj: '12.345.678/0001-91',
        descricao: 'Implementação de plataforma de e-commerce',
        logo: '/src/assets/ambev.png'
      }
    ],
    feedback: []
  });

  const adicionarProjeto = (novoProjeto) => {
    const dataInicioFormatada = new Date(novoProjeto.dataInicio).toLocaleDateString('pt-BR');
    const dataFimFormatada = new Date(novoProjeto.dataFim).toLocaleDateString('pt-BR');
    
    defineProjetost(prev => ({
      ...prev,
      aguardando: [...prev.aguardando, {
        id: Date.now(),
        nomeProjeto: novoProjeto.nomeProjeto,
        dataInicio: dataInicioFormatada,
        dataFim: dataFimFormatada,
        encarregado: novoProjeto.encarregado,
        cnpj: novoProjeto.cnpj,
        descricao: novoProjeto.descricao,
        
      }]
    }));
  };

  return (
    <Routes>
      <Route path="/" element={<LayoutComNavigation><Home /></LayoutComNavigation>} />
      <Route path="/login" element={<Login />} />
      <Route path="/projetos" element={<LayoutComNavigation><Projetos projetos={projetos} /></LayoutComNavigation>} />
      <Route path="/submeter-projeto" element={<LayoutComNavigation><SubmeterProjeto onAdicionarProjeto={adicionarProjeto} /></LayoutComNavigation>} />
      <Route path="/perfil" element={<LayoutComNavigation><Perfil /></LayoutComNavigation>} />
      <Route path="/sobre" element={<LayoutComNavigation><Sobre /></LayoutComNavigation>} />
    </Routes>
  );
}

export default App;