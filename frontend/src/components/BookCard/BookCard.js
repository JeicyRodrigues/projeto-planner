import React from "react";
import styled from "styled-components";

// As importações de estilos globais foram removidas daqui, pois já estão centralizadas.

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF8F0;
  box-shadow: 0px 4px 8px rgba(93, 58, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  font-family: "Special Elite", system-ui;
`;

const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const InfoBasica = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLivro = styled.img`
  width: 150px;
  border-radius: 6px;
  object-fit: cover;
`;

const Titulo = styled.h2`
  color: #5D3A00;
  font-size: 24px;
  margin: 0 0 8px 0;
  font-family: "Special Elite", system-ui;
`;

const Subtitulo = styled.h4`
  color: #F4C2C2;
  font-weight: bold;
  margin: 8px 0 4px 0;
  font-family: "Special Elite", system-ui;
`;

const Texto = styled.p`
  color: #5D3A00;
  max-width: 100%;
  margin: 4px 0;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  line-height: 1.5;
`;

const ConteudoDetalhado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BotoesAcoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const BotaoRemover = styled.button`
  background-color: #F4C2C2;
  color: #5D3A00;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  font-weight: bold;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Special Elite', cursive;

  &:active {
    background-color: #A0D6D1;
  }
`;

const BotaoEditar = styled(BotaoRemover)``;

export default function BookCard({ livro, onDelete, onEdit }) {
  return (
    <Card>
      <HeaderCard>
        <ImgLivro src={livro.capaUrl} alt={`Capa do livro ${livro.nome}`} />
        <InfoBasica>
          <Titulo>{livro.nome}</Titulo>
          <Subtitulo>Categoria</Subtitulo>
          <Texto>{livro.categoria}</Texto>
          <Subtitulo>Período</Subtitulo>
          <Texto>{livro.dataInicio} até {livro.dataTermino}</Texto>
          <Subtitulo>Classificação</Subtitulo>
          <Texto>{livro.classificacao} ⭐</Texto>
        </InfoBasica>
      </HeaderCard>
      
      <ConteudoDetalhado>
        <Subtitulo>Sinopse</Subtitulo>
        <Texto>{livro.sinopse}</Texto>
        <Subtitulo>Opinião</Subtitulo>
        <Texto>{livro.opiniao}</Texto>
        <Subtitulo>Personagens Principais</Subtitulo>
        <Texto>{livro.personagens}</Texto>
        <Subtitulo>Frase Favorita</Subtitulo>
        <Texto>“{livro.fraseFavorita}”</Texto>
      </ConteudoDetalhado>
      
      <BotoesAcoes>
        <BotaoRemover onClick={() => onDelete(livro.id)}>Remover</BotaoRemover>
        <BotaoEditar onClick={() => onEdit(livro)}>Editar</BotaoEditar>
      </BotoesAcoes>
    </Card>
  );
}