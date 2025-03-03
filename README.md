## 📝 Descrição do Projeto

Este projeto consiste em uma aplicação front-end que exibe uma tabela de colaboradores com dados provenientes de uma API simulada. A interface é responsiva e inclui funcionalidade de pesquisa, seguindo o design especificado no Figma.

<h1 align="center">
    <img alt="Layout Web" src="/web.jpg" width="100%">
</h1>

<h1 align="center">
    <img alt="Layout Mobile" src="/mobile.jpg" width="100%">
</h1>



## 🚀 Funcionalidades

- Visualização de tabela de colaboradores
- Pesquisa de colaboradores
- Interface totalmente responsiva
- Consumo de API simulada com json-server

## 🛠️ Tecnologias Utilizadas

- React 19: Framework para construção da interface
- TypeScript: Linguagem com tipagem para melhor segurança e desenvolvimento
- Vite: Build tool rápida para desenvolvimento moderno
- TailwindCSS: Framework CSS para estilização rápida e responsiva
- React Query (TanStack Query): Para gerenciamento eficiente de estado e cache de dados
- React Router DOM: Para navegação entre páginas
- Axios: Cliente HTTP para realizar requisições à API
- JSON Server: Simulação de API REST para desenvolvimento
- date-fns: Biblioteca para manipulação de datas
- libphonenumber-js: Biblioteca para formatação de números de telefone

## 🔧 Instalação e Configuração
Pré-requisitos

Node.js (versão LTS recomendada)
npm ou yarn

Passos para instalação

Clone o repositório:

git clone https://github.com/victorparanhosdev/front-end-app.git
cd front-end-app

Instale as dependências:
```
npm install
ou
yarn
```

Inicie o servidor de desenvolvimento:

```
npm run dev
ou
yarn dev
```

Inicie o servidor JSON em outro terminal:

npm run dev:server
ou
yarn dev:server

A aplicação estará disponível em: http://localhost:5173
O servidor JSON estará disponível em: http://localhost:3000

## 🏗️ Scripts Disponíveis

- npm run dev: Inicia o servidor de desenvolvimento Vite
- npm run build: Compila TypeScript e constrói a aplicação para produção
- npm run lint: Executa o ESLint para verificar problemas no código
- npm run start: Inicia um servidor para visualizar a versão de produção
- npm run dev:server: Inicia o JSON Server para simular uma API REST

📊 Estrutura do Projeto

```
front-end-app/
├── public/
├── src/
│   ├── @types/        # Definições de tipos TypeScript
│   ├── components/   # Componentes reutilizáveis
│   ├── layout/       # Layout da aplicação
│   ├── lib/          # Configuração do AXIOS
│   ├── pages/        # Páginas da aplicação
│   ├── services/     # Serviços para comunicação com a API
│   ├── utils/        # Funções utilitárias
│   ├── routes/       # Rotas da aplicação
│   └── main.tsx      # Ponto de entrada da aplicação
├── .eslintrc.json    # Configuração do ESLint
├── db.json           # Dados para o JSON Server
├── index.html        # Arquivo HTML principal
├── package.json      # Dependências e scripts
├── postcss.config.js # Configuração do PostCSS
├── tailwind.config.js # Configuração do TailwindCSS
├── tsconfig.json     # Configuração do TypeScript
└── vite.config.ts    # Configuração do Vite
```
👨‍💻 Autor
Desenvolvido por Victor Paranhos.
