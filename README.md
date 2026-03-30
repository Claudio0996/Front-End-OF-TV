# OF TV Front End

Um aplicativo web MVP para exibição de slides em TVs e gerenciamento administrativo. Desenvolvido com React e Vite, permite criar, visualizar e excluir slides (imagens e vídeos) com controle de datas de exibição.

## Funcionalidades

### Player (Página Principal - `/`)

- **Slideshow Automático**: Exibe slides ativos (baseado em datas de início e fim) em loop contínuo.
- **Suporte a Mídias**: Imagens (incluindo GIFs animados) e vídeos com autoplay, loop e preload.
- **Atualização Periódica**: Polling a cada 5 segundos para manter os slides atualizados em tempo real (adequado para TVs sempre ativas).
- **Fallback**: Mensagem quando não há slides ativos.

### Admin (Painel Administrativo - `/admin`)

- **Criar Slides**: Formulário para upload de imagem/vídeo, título e datas de exibição.
- **Listar Slides**: Visualização de todos os slides com filtros (todos, ativos, inativos).
- **Excluir Slides**: Remoção de slides com confirmação.
- **Preview de Mídia**: Visualização antes do upload.
- **Validação**: Campos obrigatórios e tipos de arquivo aceitos (imagem/_, video/_).

### Recursos Técnicos

- **Cache e Invalidação**: Usa React Query para cache inteligente e invalidação automática após mudanças.
- **Real-Time Simulado**: Polling nas queries para sincronização entre admin e TVs.
- **UI Responsiva**: Interface admin com Material-UI (MUI) para consistência.

## Tecnologias Utilizadas

- **Frontend**: React 18, Vite
- **Roteamento**: React Router
- **Data Fetching**: TanStack React Query
- **UI**: Material-UI (MUI) com Emotion
- **Styling**: CSS Modules
- **Linting**: ESLint
- **Build**: Vite (HMR, fast refresh)

## Pré-requisitos

- Node.js (versão 16 ou superior)
- Backend API rodando em `http://localhost:3000` (endpoints: `/slides`, `/active-slides`, `/slide`)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd of-tv-front-end
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra `http://localhost:5173` no navegador.

## Uso

- **Para TVs**: Acesse a página principal (`/`) em um navegador ou dispositivo dedicado. Os slides serão exibidos automaticamente.
- **Para Administração**: Acesse `/admin` para gerenciar slides. Faça upload de mídias, defina datas e salve.

## API

O app se conecta a um backend (não incluído) com os seguintes endpoints:

- `GET /slides`: Retorna todos os slides.
- `GET /active-slides`: Retorna slides ativos (baseado em datas).
- `POST /slide`: Cria um novo slide (FormData com arquivo, título, datas).
- `DELETE /slide/:id`: Exclui um slide por ID.

Certifique-se de que o backend esteja configurado para aceitar uploads multipart/form-data.

## Estrutura do Projeto

```
of-tv-front-end/
├── src/
│   ├── features/
│   │   ├── admin/          # Componentes e hooks do painel admin
│   │   ├── player/         # Página do player para TVs
│   │   └── slider/         # Componente de slideshow
│   ├── shared/             # Utilitários (apiClient)
│   └── main.jsx            # Ponto de entrada
├── public/                 # Assets estáticos
├── package.json
└── vite.config.js
```

## Melhorias Futuras (Roadmap)

- Adicionar TypeScript para tipagem.
- Implementar testes unitários e de integração.
- Substituir polling por WebSockets para real-time verdadeiro.
- Adicionar autenticação no admin.
- Otimizar performance para múltiplas TVs.

## Contribuição

Este é um MVP inicial. Sugestões e PRs são bem-vindos! Para mudanças maiores, abra uma issue primeiro.

## Licença

MIT
