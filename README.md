# Trabalho Prático: Aplicações Web Interativas

Disciplina **DGT2820 - Aplicações Web Interativas**.

Este projeto reúne três páginas que praticam JavaScript no navegador: algoritmos de ordenação com manipulação do **DOM**, um catálogo dinâmico de receitas com **Bootstrap** e **JSON**, e uma lista de usuários consumida de uma **API** com **Vue.js**.

## Procedimentos

| Procedimento | Arquivos | Tema |
|---|---|---|
| 1 | `ordenando.html` e `ordenando.js` | Algoritmos de ordenação e DOM |
| 2 | `receitas.html` | Catálogo dinâmico com Bootstrap e JSON |
| 3 | `usuarios.html` | Consumo de API com Vue.js |

## Estrutura do repositório

- `ordenando.html`: página que exibe e ordena os elementos.
- `ordenando.js`: funções de ordenação e atualização da página.
- `receitas.html`: catálogo de receitas gerado dinamicamente.
- `usuarios.html`: lista de usuários renderizada com Vue.js.

## Funcionalidades

### 1. Ordenação (`ordenando.html` e `ordenando.js`)

- `swap`: troca dois elementos de posição.
- `shuffle`: embaralha os elementos.
- `bubble_sort`: ordenação por bolha.
- `selection_sort`: ordenação por seleção.
- `quick_sort`: ordenação rápida, com função de particionamento.
- Atualização visual da página via manipulação do DOM.

### 2. Catálogo de receitas (`receitas.html`)

- Dados das receitas em formato **JSON**.
- Função `getCard`, que monta o cartão de cada receita.
- Função `preencheCatalogo`, que insere os cartões na página.
- Layout responsivo com **Bootstrap**.

### 3. Lista de usuários (`usuarios.html`)

- Interface reativa com **Vue.js**.
- Consumo da API [ReqRes](https://reqres.in/api/users?per_page=10), que retorna 10 usuários.
- Caso a API esteja indisponível, a página exibe dados demonstrativos.

## Como executar

Abrir os arquivos direto pelo navegador pode bloquear requisições externas. O ideal é usar um servidor local simples.

1. Abra o terminal na pasta do projeto.
2. Inicie o servidor:
bash py -m http.server 8000


3. Acesse no navegador:

- http://localhost:8000/ordenando.html
- http://localhost:8000/receitas.html
- http://localhost:8000/usuarios.html

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

## Tecnologias

- HTML5
- CSS3 e Bootstrap
- JavaScript (DOM e JSON)
- Vue.js
- API REST (ReqRes)

## Observações

- As páginas `receitas.html` e `usuarios.html` carregam Bootstrap e Vue.js por CDN, então exigem conexão com a internet.
- A API ReqRes é um serviço externo e pode ficar instável; por isso existe o conteúdo alternativo em `usuarios.html`.

## Ambiente

- VS Code e Windows
- Navegador moderno (Chrome, Edge ou Firefox)

## Autor

Igor Lima
