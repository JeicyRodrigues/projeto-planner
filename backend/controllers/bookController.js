import {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
} from "../models/Book.js";

// Inicializa o idAtual com o maior ID encontrado no arquivo, ou 1 se vazio
let idAtual = (() => {
  const livros = getTodosLivros();
  if (livros.length === 0) return 1;
  return Math.max(...livros.map((livro) => livro.id)) + 1;
})();

function createBook(req, res) {
  const novoLivro = { id: idAtual++, ...req.body };
  insereLivro(novoLivro);
  res.status(201).json(novoLivro);
}

function getBooks(req, res) {
  const livros = getTodosLivros();
  res.json(livros);
}

function getBookById(req, res) {
  const id = parseInt(req.params.id);
  const livro = getLivroPorId(id);
  if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
  res.json(livro);
}

function updateBook(req, res) {
  const id = parseInt(req.params.id);
  const atualizado = modificaLivro(req.body, id);
  if (!atualizado)
    return res.status(404).json({ message: "Livro não encontrado" });
  const livroAtualizado = getLivroPorId(id);
  res.json(livroAtualizado);
}

function deleteBook(req, res) {
  const id = parseInt(req.params.id);
  deletaLivroPorId(id);
  res.json({ message: "Livro deletado" });
}

export {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
