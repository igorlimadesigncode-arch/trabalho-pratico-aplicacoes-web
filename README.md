# Trabalho Prático — Planejamento e Desenvolvimento de Aplicações Web Interativas

Projeto composto por três exercícios independentes, feitos com HTML, JavaScript, Bootstrap e Vue.js 2.

## Conteúdo

- `ordenando.html` e `ordenando.js`: adiciona, mistura e ordena números com Bubble Sort, Selection Sort ou Quick Sort.
- `receitas.html`: catálogo dinâmico de receitas com dados JSON e imagens SVG locais.
- `usuarios.html`: cartões de usuários renderizados pelo Vue, carregados pela API ReqRes, com dados demonstrativos de contingência caso a API esteja indisponível.
- `assets/`: ilustrações locais das receitas.

## Como executar

1. Extraia o ZIP e abra a pasta `planejamento-desenvolvimento-web` no VS Code.
2. Abra cada HTML no navegador. Para a página de usuários, prefira iniciar um servidor local: no terminal da pasta, execute `python -m http.server 8000` e acesse `http://localhost:8000/usuarios.html`.
3. Bootstrap e Vue são carregados por CDN; é necessária conexão com a internet para esses recursos. A página de usuários também consulta `https://reqres.in/api/users?per_page=10`. Se a API não responder, a página apresenta usuários demonstrativos e informa isso na própria tela.
