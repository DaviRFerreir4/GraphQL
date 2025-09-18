const games = [
  {
    id: '1',
    title: 'The Legend of Zelda: Breath of th Wild',
    plataform: ['Nintendo Switch', 'Nintendo Switch 2'],
  },
  {
    id: '2',
    title: 'Final Fantasy VII Remake',
    plataform: ['PlayStation 5', 'Xbox Series X'],
  },
  {
    id: '3',
    title: 'Elden Ring',
    plataform: ['PlayStation 5', 'Xbox Series X', 'PC'],
  },
  {
    id: '4',
    title: 'Mario Kart 8 Deluxe',
    plataform: ['Nintendo Switch', 'Nintendo Switch 2'],
  },
  {
    id: '5',
    title: 'Pokemon Legends ZA',
    plataform: ['Nintendo Switch', 'Nintendo Switch 2'],
  },
]

const reviews = [
  { id: '1', rating: 9, content: 'Joguin bão', game_id: '1', author_id: '2' },
  { id: '2', rating: 10, content: 'Joguin bão', game_id: '2', author_id: '1' },
  { id: '3', rating: 7, content: 'Joguin bão', game_id: '3', author_id: '3' },
  { id: '4', rating: 5, content: 'Joguin bão', game_id: '2', author_id: '4' },
  { id: '5', rating: 8, content: 'Joguin bão', game_id: '2', author_id: '5' },
  { id: '6', rating: 7, content: 'Joguin bão', game_id: '1', author_id: '2' },
  { id: '7', rating: 10, content: 'Joguin bão', game_id: '3', author_id: '1' },
]

const authors = [
  { id: '1', name: 'Alan', verified: true },
  { id: '2', name: 'Lizard', verified: false },
  { id: '3', name: 'BRKSEdu', verified: true },
]

export default { games, reviews, authors }
