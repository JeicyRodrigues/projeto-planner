# Planner de Leitura 📚✨

Um sistema completo para organizar e acompanhar suas aventuras literárias, desenvolvido com design vintage e funcionalidades modernas.

---

### 🎨 Design

O projeto utiliza uma paleta de cores vintage inspirada em tons terrosos e aconchegantes:

-   **#702C2B** - Marrom escuro principal
-   **#C56869** - Rosa acobreado
-   **#DB9F95** - Rosa claro
-   **#F3D7D4** - Rosa muito claro (fundo)
-   **#EBD8CE** - Bege claro

#### Tipografia

-   **Special Elite** - Fonte principal para títulos (estilo máquina de escrever)
-   **Quicksand** - Fonte para textos e formulários (estilo moderno sem serifa)

### 🚀 Tecnologias

#### Frontend
-   **React.js** - Framework principal
-   **styled-components** - Estilização (substitui Tailwind e shadcn/ui)
-   **Lucide React** - Ícones
-   **Vite** - Build tool

#### Backend
-   **Node.js** - Runtime
-   **Express.js** - Framework web
-   **CORS** - Middleware para requisições cross-origin
-   **Sistema de arquivos JSON** - Armazenamento de dados

### 📚 Funcionalidades

#### ✅ Implementadas

-   **Cadastro de livros** com campos completos:
    -   Título e autor
    -   Capa (URL da imagem)
    -   Datas de início e término
    -   Formato (Físico/Digital)
    -   Frase favorita
    -   Personagens principais
    -   Sinopse (novo campo)
    -   Minha Opinião (novo campo)
    -   Classificação por estrelas (sistema interativo)
-   **Categorização** com ícones
    -   **Categorias disponíveis:**
        -   Romance (❤️)
        -   Drama (⭕)
        -   Fantasia (⭐)
        -   Reflexão (🔺)
        -   Plot Twist (⚡)
-   **Visualização em cards** estilo vintage
-   **Filtros** por categoria
-   **Controle de status** (Em leitura/Finalizado)
-   **Design responsivo** para mobile e desktop
-   **Interface vintage** com efeitos visuais
-   **Imagens de fundo** estilo adesivos (flores, livros, borboletas)

### 🎯 Características do Design

-   Efeitos de `hover` nos cards
-   Sombras e bordas estilizadas
-   Gradientes sutis no fundo
-   Imagens decorativas estilo adesivos
-   Animações suaves
-   Layout responsivo
-   Tipografia temática
-   Sistema de classificação interativo com estrelas

### 🛠️ Como Executar

#### Pré-requisitos
-   `Node.js` (versão 14 ou superior)
-   `npm` ou `pnpm`

#### Backend
```bash
cd backend
npm install
npm start

cd frontend/reading-planner-frontend
pnpm install
pnpm run dev --host


📁 Estrutura do Projeto


reading-planner/
├── backend/
│   ├── server.js          # Servidor Express
│   ├── package.json       # Dependências do backend
│   ├── .env              # Configurações
│   └── books.json        # Dados dos livros (gerado automaticamente)
└── frontend/
    └── reading-planner-frontend/
        ├── src/
        │   ├── App.jsx   # Componente principal
        │   ├── App.css   # Estilos vintage
        │   └── ...
        ├── package.json  # Dependências do frontend
        └── ...
