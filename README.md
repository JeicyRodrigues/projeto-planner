# Planner de Leitura

Um sistema completo para organizar e acompanhar suas aventuras literárias, desenvolvido com design vintage e funcionalidades modernas.

## 🎨 Design

O projeto utiliza uma paleta de cores vintage inspirada em tons terrosos e aconchegantes:
- **#702C2B** - Marrom escuro principal
- **#C56869** - Rosa acobreado
- **#DB9F95** - Rosa claro
- **#F3D7D4** - Rosa muito claro (fundo)
- **#EBD8CE** - Bege claro

### Tipografia
- **Special Elite** - Fonte principal para títulos (estilo máquina de escrever)
- **Courier Prime** - Fonte para textos e formulários (estilo monospace)

## 🚀 Tecnologias

### Frontend
- **React.js** - Framework principal

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework web
- **CORS** - Middleware para requisições cross-origin
- **Sistema de arquivos JSON** - Armazenamento de dados

## 📚 Funcionalidades

### ✅ Implementadas
- **Cadastro de livros** com campos completos:
  - **Título e autor**
  - **Capa** (URL da imagem)
  - **Datas de início e término**
  - **Formato** (Físico/Digital)
  - **Frase favorita**
  - **Personagens principais**
  - **Sinopse** (novo campo)
  - **Minha Opinião** (novo campo)
  - **Classificação por estrelas** (sistema interativo)
  



- **Visualização em cards** estilo vintage
- **Filtros por categoria**
- **Controle de status** (Em leitura/Finalizado)
- **Design responsivo** para mobile e desktop
- **Interface vintage** com efeitos visuais
- **Imagens de fundo estilo sticker** (flores, livros, borboletas)

### 🎯 Características do Design
- Efeitos de hover nos cards
- Sombras e bordas estilizadas
- Gradientes sutis no fundo
- **Imagens decorativas estilo adesivos**
- Animações suaves
- Layout responsivo
- Tipografia temática
- **Sistema de classificação interativo com estrelas**

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou pnpm

### Backend
```bash
cd backend
npm install
npm start
```
O servidor rodará na porta 5001.

### Frontend
```bash
cd frontend/reading-planner-frontend
pnpm install
pnpm run dev --host
```
O frontend rodará na porta 3000.


## 🎨 Paleta de Cores Detalhada

```css
:root {
  --primary: #702C2B;      /* Marrom escuro - textos principais */
  --secondary: #C56869;    /* Rosa acobreado - acentos */
  --tertiary: #DB9F95;     /* Rosa claro - elementos secundários */
  --background: #F3D7D4;   /* Rosa muito claro - fundo */
  --card: #EBD8CE;         /* Bege claro - cards */
}
```


### Livros
- `GET /api/books` - Lista todos os livros
- `POST /api/books` - Adiciona um novo livro
- `GET /api/books/:id` - Busca livro por ID
- `PUT /api/books/:id` - Atualiza um livro
- `DELETE /api/books/:id` - Remove um livro
- `GET /api/books/category/:category` - Filtra por categoria



## 👨‍💻 Desenvolvimento

Projeto desenvolvido com foco em:
- **UX/UI vintage** e aconchegante
- **Código limpo** e bem estruturado
- **Performance** otimizada
- **Acessibilidade** básica

---

*Organize suas aventuras literárias com estilo vintage! 📚✨*
