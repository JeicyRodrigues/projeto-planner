import React from "react";
import styled from "styled-components";

// Adicione aqui a regra @import das fontes
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Special+Elite&display=swap');

`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 1rem;
    background-color: #F8F4F2; /* A cor de fundo da sua imagem é diferente de #F4C2C2 */
    padding: 30px 20px;
    text-align: center;
    /* A fonte 'Dancing Script' não é a da imagem, mas mantive a sua escolha. */
    font-family: 'Dancing Script', cursive; 
    color: #5D3A00;
    /* A imagem não tem uma borda inferior, mas mantive a sua definição */
    // border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    /* Adicionei box-shadow para dar uma aparência mais de "card" */
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 10px; /* Borda arredondada */
    max-width: 800px;
    margin: 40px auto; /* Centraliza o container */
`;

const Logo = styled.img`
    height: 250px;
`;

const Titulo = styled.h1`
    font-size: 3em;
    margin: 0;
`;

const Frase = styled.p`
    font-family: 'Special Elite', cursive; /* A fonte já pode ser usada aqui */
    font-size: 1.1em;
    margin-top: 10px;
`;

export default function Header() {
    return (
        <>
            <GlobalStyle />
            <HeaderContainer>
                <Logo src="/logo.png" alt="Logo do Planner Literário"/>
                
                <Frase>
                    “Palavras são, na minha nada humilde opinião, nossa inesgotável fonte de magia.”
                </Frase>
            </HeaderContainer>
        </>
    );
}