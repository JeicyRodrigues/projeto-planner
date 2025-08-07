import fs from "fs";

const arquivoLivros = "livros.json";

function lerArquivo() {
  try {
    const dados = fs.readFileSync(arquivoLivros, "utf-8");
    return JSON.parse(dados);
  } catch (err) {
    // Se o arquivo não existir ou estiver vazio, retorna array vazio
    return [];
  }
}

function salvarArquivo(dados) {
  fs.writeFileSync(arquivoLivros, JSON.stringify(dados, null, 2));
}

function getTodosLivros() {
  return lerArquivo();
}

function getLivroPorId(id) {
  const livros = lerArquivo();
  return livros.find((livro) => livro.id === id);
}

function insereLivro(livroNovo) {
  const livros = lerArquivo();
  livros.push(livroNovo);
  salvarArquivo(livros);
}

function modificaLivro(modificacoes, id) {
  const livros = lerArquivo();
  const index = livros.findIndex((livro) => livro.id === id);
  if (index === -1) return false;

  livros[index] = { ...livros[index], ...modificacoes };
  salvarArquivo(livros);
  return true;
}

function deletaLivroPorId(id) {
  const livros = lerArquivo();
  const novosLivros = livros.filter((livro) => livro.id !== id);
  salvarArquivo(novosLivros);
}

export {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
};