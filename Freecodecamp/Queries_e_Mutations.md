# Queries para testar a API

## Query para listar todos resultados de uma "tabela"

query List {
  games {
    id
    title
    plataform
  }
  reviews {
    id
    rating
    content
  }
  authors {
    id
    name
    verified
  }
}

## Query para listar um resultado específico de uma "tabela"

query ListSpecific($id: ID!) {
  game(id: $id) {
    id
    title
    plataform
  }
  review(id: $id) {
    id
    rating
    content
  }
  author(id: $id) {
    id
    name
    verified
  }
}

Variable:
{
  "id": "1"
}

## Query para listar resultados aninhados da tabela

query Query($id: ID!) {
  game(id: $id) {
    id
    title
    plataform
    reviews {
      rating
      content
      author {
        name
        verified
      }
    }
  }
}

Variable:
{
  "id": "1"
}

## Mutation para adicionar um jogo novo

mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id,
    title,
    plataform
  }
}

Variable:
{
  "game": {
    "title": "Hollow Knight: Silksong",
    "plataform": ["Nintendo Switch", "Xbox Series X", "PlayStation 5", "PC"]
  }
}

## Mutation para atualizar dados de um jogo

mutation EditMutation($id: ID!, $edits: EditGameInput!) {
  updateGame(id: $id, edits: $edits) {
    id,
    title,
    plataform
  }
}

Variable:
{
  "id": "1",
  "edits": {
    "plataform": ["Nintendo Wii U", "Nintendo Switch", "Nintendo Switch 2"]
  }
}

## Mutation para remover um jogo

mutation DeleteMutation($id: ID!) {
  deleteGame(id: $id) {
    id,
    title,
    plataform,
  }
}

Variable:
{
  "id": "1"
}