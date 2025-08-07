import React from "react";
import styled from "styled-components";

// A importação de GlobalStyle e a declaração foram removidas.

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #F8F4F2;
  padding: 30px 20px;
  text-align: center;
  font-family: 'Dancing Script', cursive; 
  color: #5D3A00;
  border-radius: 10px;
  max-width: 800px;
  margin: 40px auto;
`;

const Logo = styled.img`
  height: 250px;
`;

const Titulo = styled.h1`
  font-size: 3em;
  margin: 0;
`;

const Frase = styled.p`
  font-family: 'Special Elite', cursive;
  font-size: 1.1em;
  margin-top: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo.png" alt="Logo do Planner Literário"/>
      <Titulo>Diário de Leitura</Titulo>
      <Frase>
        “Palavras são, na minha nada humilde opinião, nossa inesgotável fonte de magia.”
      </Frase>
    </HeaderContainer>
  );
}