import { ApolloServer, gql } from 'apollo-server'

interface User {
  name: string
  age: number
  isDev: boolean
}

const users: User[] = []

const typeDefs = gql`
  type User {
    name: String
    age: Int
    isDev: Boolean
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!, isDev: Boolean!): String!
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      getUsers: () => {
        return users
      },
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        users.push({
          name: args.name,
          age: args.age,
          isDev: args.isDev,
        })

        return true
      },
    },
  },
})

server.listen().then(({ url }) => {
  console.log(`Server runing on ${url}`)
})
