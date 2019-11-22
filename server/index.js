const { ApolloServer, gql } = require("apollo-server")

const crypto = require("crypto")
const db = require("./db.json")

const typeDefs = gql`
  type Query {
    products(limitBestSales: Int): [Product!]!
    product(id: ID!): Product
    comments: [Comment!]!
    productscategories: [ProductsCategory!]!
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
    category: ProductsCategory
    subcategory: String
    colors: [String]
    description: String
    comments: [Comment!]!
    price: String
  }

  type ProductsCategory {
    id: ID!
    title: String!
    subcategories: [Subcategory!]!
  }

  type Subcategory {
    id: ID!
    title: String
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
    products: (root, { limitBestSales }) =>
      !limitBestSales
        ? db.products
        : db.products
            .sort((y, z) => y.comments.rating - z.comments.rating)
            .slice(0, limitBestSales),

    product: (root, { id }) => db.products.find(product => product.id === id),
    comments: () => db.comments,
    productscategories: () => db.productscategories
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
    comments: x => db.comments.filter(message => message.productId === x.id),
    category: x => db.productscategories.filter(cat => cat.id === x.category)[0]
  },

  ProductsCategory: {
    subcategories: x =>
      db.productssubcategories.filter(
        subcat => subcat.productcategoryID === x.id
      )
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(url))
