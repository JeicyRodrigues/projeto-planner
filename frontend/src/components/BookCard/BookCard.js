import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Special+Elite&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #FFF8F0;
  box-shadow: 0px 4px 8px rgba(93, 58, 0, 0.2);
  border-radius: 50px;
  padding: 20px;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  font-family: "Special Elite", system-ui;
  flex: 1 1 300px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const ImgLivro = styled.img`
  width: 150px;
  border-radius: 6px;
  object-fit: cover;
`;

const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  font-family: "Poppins";
`;

const BlocoExpandido = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
      <ImgLivro src={livro.capaUrl} alt={`Capa do livro ${livro.nome}`} />
      <Conteudo>
        <Titulo>{livro.nome}</Titulo>

        <Subtitulo>Formato</Subtitulo>
        <Texto>{livro.formato}</Texto>

        <Subtitulo>Período</Subtitulo>
        <Texto>{livro.dataInicio} até {livro.dataTermino}</Texto>

        <Subtitulo>Classificação</Subtitulo>
        <Texto>{livro.classificacao} ⭐</Texto>

        <BlocoExpandido>
          <Subtitulo>Sinopse</Subtitulo>
          <Texto>{livro.sinopse}</Texto>

          <Subtitulo>Opinião</Subtitulo>
          <Texto>{livro.opiniao}</Texto>

          <Subtitulo>Personagens Principais</Subtitulo>
          <Texto>{livro.personagens}</Texto>

          <Subtitulo>Frase Favorita</Subtitulo>
          <Texto>“{livro.fraseFavorita}”</Texto>
        </BlocoExpandido>

        <BotoesAcoes>
          <BotaoRemover onClick={() => onDelete(livro.id)}>Remover</BotaoRemover>
          <BotaoEditar onClick={() => onEdit(livro)}>Editar</BotaoEditar>
        </BotoesAcoes>
      </Conteudo>
    </Card>
  );
}
