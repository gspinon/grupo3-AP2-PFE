import React from 'react';
import CartaoProjeto from '../components/CartaoProjeto';

const Projetos = ({ projetos = { aguardando: [], andamento: [], feedback: [] } }) => {
  return (
    <div className="conteudo-projetos">
      <h1 className="titulo-pagina">Projetos</h1>
      
      <div className="container-projetos">
        <div className="coluna-projetos">
          <h2>Aguardando Análise</h2>
          {projetos.aguardando.length > 0 ? (
            projetos.aguardando.map(projeto => (
              <CartaoProjeto 
                key={projeto.id}
                nomeProjeto={projeto.nomeProjeto}
                dataInicio={projeto.dataInicio}
                dataFim={projeto.dataFim}
                encarregado={projeto.encarregado}
                cnpj={projeto.cnpj}
                descricao={projeto.descricao}
                logo={projeto.logo}
                status="aguardando"
              />
            ))
          ) : (
            <p>Nenhum projeto aguardando análise.</p>
          )}
        </div>

        <div className="coluna-projetos">
          <h2>Em Andamento</h2>
          {projetos.andamento.length > 0 ? (
            projetos.andamento.map(projeto => (
              <CartaoProjeto 
                key={projeto.id}
                nomeProjeto={projeto.nomeProjeto}
                dataInicio={projeto.dataInicio}
                dataFim={projeto.dataFim}
                encarregado={projeto.encarregado}
                cnpj={projeto.cnpj}
                descricao={projeto.descricao}
                logo={projeto.logo}
                status="andamento"
              />
            ))
          ) : (
            <p>Nenhum projeto em andamento.</p>
          )}
        </div>

        <div className="coluna-projetos">
          <h2>Feedback Pós-Análise</h2>
          {projetos.feedback.length > 0 ? (
            projetos.feedback.map(projeto => (
              <CartaoProjeto 
                key={projeto.id}
                nomeProjeto={projeto.nomeProjeto}
                dataInicio={projeto.dataInicio}
                dataFim={projeto.dataFim}
                encarregado={projeto.encarregado}
                cnpj={projeto.cnpj}
                descricao={projeto.descricao}
                logo={projeto.logo}
                status="feedback"
              />
            ))
          ) : (
            <p>Nenhum projeto com feedback.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projetos;