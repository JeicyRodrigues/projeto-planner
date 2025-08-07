import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header/Header.js";
import BookForm from "./components/BookForm/BookForm.js";
import BookCard from "./components/BookCard/BookCard.js";

const BASE_URL = "/api/books";

const GridLivros = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 20px;
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 coluna para celulares */
  }
`;

export default function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [livroEditando, setLivroEditando] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar livros");
        return res.json();
      })
      .then((data) => {
        setLivros(data);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  function adicionarLivro(novoLivro) {
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao salvar livro");
        return res.json();
      })
      .then((livroCriado) => {
        setLivros((prev) => [...prev, livroCriado]);
      })
      .catch((err) => alert(err.message));
  }

  function atualizarLivro(livroAtualizado) {
    fetch(`${BASE_URL}/${livroAtualizado.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroAtualizado),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao atualizar livro");
        return res.json();
      })
      .then((dadosAtualizados) => {
        setLivros((prev) =>
          prev.map((livro) =>
            livro.id === dadosAtualizados.id ? dadosAtualizados : livro
          )
        );
        setLivroEditando(null);
      })
      .catch((err) => alert(err.message));
  }

  function removerLivro(id) {
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao deletar livro");
        setLivros((prev) => prev.filter((livro) => livro.id !== id));
      })
      .catch((err) => alert(err.message));
  }

  if (carregando) return <p>Carregando livros...</p>;
  if (erro) return <p style={{ color: "red" }}>{erro}</p>;

  return (
    <>
      <Header />

      <BookForm
        onSubmit={livroEditando ? atualizarLivro : adicionarLivro}
        livroEditando={livroEditando}
        cancelarEdicao={() => setLivroEditando(null)}
      />

      {livros.length === 0 && (
        <p style={{ textAlign: "center" }}>Nenhum livro cadastrado ainda.</p>
      )}

      <GridLivros>
        {livros.map((livro) => (
          <BookCard
            key={livro.id}
            livro={livro}
            onDelete={removerLivro}
            onEdit={() => setLivroEditando(livro)}
          />
        ))}
      </GridLivros>
    </>
  );
}
