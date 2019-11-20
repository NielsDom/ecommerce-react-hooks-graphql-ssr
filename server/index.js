// const { ApolloServer, gql } = require('apollo-server');

// const crypto = require('crypto')

// const db = {
//   users: [
//     {
//       id: '1',
//       email: 'email@gmail.com',
//       name: 'momo'
//     },
//     {
//       id: '2',
//       email: 'email@gmail.com',
//       name: 'momo2'
//     }
//   ],
//   messages: [
//     {
//       id: '1',
//       userId: '1',
//       body: 'Hello',
//       createdAt: Date.now()
//     },
//     {
//       id: '2',
//       userId: '2',
//       body: 'Hello2',
//       createdAt: Date.now()
//     },
//     {
//       id: '3',
//       userId: '1',
//       body: 'Hello3',
//       createdAt: Date.now()
//     }
//   ]
// }

// const typeDefs = gql`
//   type Query {
//     users: [User!]!
//     user(id: ID!): User
//     messages: [Message!]!
//   }

//   type Mutation {
//     addUser(email: String!, name: String): User
//   }

//   type User {
//     id: ID!
//     email: String!
//     name: String
//     avatar: String
//     messages: [Message!]!
//   }

//   type Message {
//     id: ID!
//     body: String!
//     createdAt: String
//   }
// `

// const resolvers = {
//   Query: {
//     users: ()=> db.users,
//     user: (root, { id }) => db.users.find(user => user.id === id),
//     messages: () => db.messages
//   },
//   Mutation: {
//     addUser: (root, { email, name }) => {
//       const user = {
//         id: crypto.randomBytes(10).toString('hex'),
//         email,
//         name
//       }
//       db.users.push(user)
//       return user
//     }
//   },
//   User: {
//     messages: user => db.messages.filter(message => message.userId === user.id)
//   }
// }

// const server = new ApolloServer({ typeDefs, resolvers })

// server.listen().then(({ url })=>console.log(url))

const { ApolloServer, gql } = require("apollo-server")

const crypto = require("crypto")

const db = {
  products: [
    {
      id: "1",
      title: "Paper delicatesse",
      description: "Minimalistic japan paper bamboo delicatess",
      picture:
        "https://i.imgur.com/QWJt3ZC_d.jpg?maxwidth=640&shape=thumb&fidelity=medium",
      tag: ["cool", "nice"],
      price: 1000
    },
    {
      id: "2",
      title: "Bubble bulle modern",
      description: "Fun balls",
      picture:
        "https://yumnatarian.files.wordpress.com/2014/03/ridiculous-fashion-balloon.jpg",
      tag: ["nice"],
      price: 2000
    },
    {
      id: "3",
      description: "DYI delivery",
      title: "Beautiful capitalism",
      picture:
        "https://qph.fs.quoracdn.net/main-qimg-062d3a0641d8741be06531a3308cfc51",
      tag: ["cool"],
      price: 1000000
    },
    {
      id: "4",
      decription: "No need to repeat",
      title: "I hear you",
      picture:
        "http://streamingmuseum.org/assets/uploads/BIOPIRACY-HAUTE-COUTURE-web-crop-689x1024.jpg",
      tag: ["cool", "nice", "awesome"],
      price: 3000
    },
    {
      id: "5",
      decription: "Always ready, hit & sleep",
      title: "Ready faster 2 fast",
      picture:
        "http://www.designandtech.net/wp-content/uploads/2015/06/mens-fashion10.jpg",
      tag: ["cool", "nice", "awesome"],
      price: 100000
    },
    {
      id: "6",
      decription: "Always be cool",
      title: "Cool combi",
      picture:
        "http://www.themost10.com/wp-content/uploads/2012/06/New-York-Fashion-Week-2012-1.jpg",
      tag: ["awesome"],
      price: 1
    },
    {
      id: "7",
      decription: "Sneaky knacky mocky",
      title: "Snake",
      picture: "http://www.realclear.com/assets/photos/234180_5_.jpg",
      tag: ["cool", "nice", "awesome"],
      price: 1000
    },
    {
      id: "8",
      decription: "Camo girl",
      title: "Cool combi",
      picture:
        "https://www.neatorama.com/wp-content/uploads/2012/02/NYFW_39_g-1329430182.jpg",
      tag: ["cool"]
    },
    {
      id: "9",
      decription: "I cannot close my zip!",
      title: "Zip Man",
      picture:
        "http://cdn.lifebuzz.com/images/120757/lifebuzz-bc539404e38cef46388f452abc84a2bf-limit_2000.jpg",
      tag: ["cool"]
    },
    {
      id: "10",
      decription: "Cannot see behind",
      title: "2D",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtCyPptNhz3AZZ_d_dDTSrcs2JeezU7MaB49GS4o5snrLCMj3zg&s",
      tag: ["nice", "awesome"]
    },
    {
      id: "11",
      decription: "Urban stuff",
      title: "Urban fitted",
      picture:
        "https://streetcredthread.files.wordpress.com/2010/08/balmain_1_00140h-2009_10_01_19_36_08_34704_base.jpg",
      tag: ["nice", "awesome"]
    }
  ],

  comments: [
    {
      id: "1",
      productId: "1",
      message: "Hello",
      rating: 1,
      createdAt: Date.now()
    },
    {
      id: "2",
      productId: "2",
      rating: 5,
      message: "Hello2",
      createdAt: Date.now()
    },
    {
      id: "3",
      productId: "1",
      rating: 2,
      message: "Hello3",
      createdAt: Date.now()
    }
  ]
}

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    comments: [Comment!]!
  }

  type Mutation {
    addProduct(description: String, title: String!, picture: String): Product
  }

  type Product {
    id: ID!
    title: String!
    picture: String
    description: String
    comments: [Comment!]!
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
        picture
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
