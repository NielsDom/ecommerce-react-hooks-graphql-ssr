const { ApolloServer, gql } = require("apollo-server")

const crypto = require("crypto")
const db = require("./db.json")

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    comments: [Comment!]!
  }

  type Mutation {
    addProduct(
      description: String
      title: String!
      picture: String
      price: String
      subcategory: String
    ): Product
  }

  type Product {
    id: ID!
    title: String!
    picture: String
    category: String
    subcategory: String
    colors: [String]
    description: String
    comments: [Comment!]!
    price: String
  }

  type Comment {
    id: ID!
    message: String!
    rating: Int
    createdAt: String
  }
`

const resolvers = {
  Query: {
    products: () => db.products,
    product: (root, { id }) => db.products.find(product => product.id === id),
    comments: () => db.comments
  },

  Mutation: {
    addProduct: (root, { description, title, picture }) => {
      const product = {
        id: crypto.randomBytes(10).toString("hex"),
        description,
        title,
        picture,
        price,
        category,
        subcategory
      }
      db.products.push(product)
      return product
    }
  },
  Product: {
    comments: x => db.comments.filter(message => message.productId === x.id)
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(url))
