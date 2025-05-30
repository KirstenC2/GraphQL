const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// 🔧 Mock Data
const users = [
  {
    id: 1,
    name: "Kirsten",
    posts: [
      {
        id: 101,
        title: "GraphQL is cool",
        comments: [
          { text: "Agreed!" },
          { text: "Very useful." }
        ]
      },
      {
        id: 102,
        title: "REST is fine too",
        comments: []
      }
    ]
  }
];

// 📐 GraphQL Schema
const schema = buildSchema(`
  type Comment {
    text: String
  }

  type Post {
    title: String
    comments: [Comment]
  }

  type User {
    id: ID
    name: String
    posts: [Post]
  }

  type Query {
    user(id: ID!): User
  }
`);

// 🚀 Resolvers
const root = {
  user: ({ id }) => users.find(u => u.id == id),
};

// 🌐 Server
const app = express();
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("🚀 GraphQL Server ready at http://localhost:4000/graphql");
});
