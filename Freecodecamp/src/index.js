import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs } from './schemas/schema.js'

import db from './db.js'

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => {
        return game.id === args.id
      })
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((review) => {
        return review.id === args.id
      })
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => {
        return author.id === args.id
      })
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => {
        return review.game_id === parent.id
      })
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => {
        return review.author_id === parent.id
      })
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => {
        return author.id === parent.author_id
      })
    },
    game(parent) {
      return db.games.find((game) => {
        return game.id === parent.game_id
      })
    },
  },
  Mutation: {
    deleteGame(_, args) {
      const index = db.games.findIndex((game) => {
        return game.id === args.id
      })
      db.games.splice(index, 1)
      return db.games
    },
    addGame(_, args) {
      const game = {
        ...args.game,
        id: new Date().getTime().toString(),
      }
      db.games.push(game)
      return game
    },
    updateGame(_, args) {
      db.games.forEach((game, index) => {
        if (game.id === args.id) {
          db.games[index] = { ...game, ...args.edits }
        }
      })
      return db.games.find((game) => {
        return game.id === args.id
      })
    },
  },
}

const PORT = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
})

console.log(`Server runing on port ${PORT}`)
