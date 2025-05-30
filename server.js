const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define schema
const schema = buildSchema(`
  type Query {
    hello: String
    greet(name: String!): String
  }
`);

// Define resolvers
const root = {
  hello: () => "Hello, world!",
  greet: ({ name }) => `Hello, ${name}!`,
};

// Create Express app
const app = express();
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Enable GraphiQL GUI
}));

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});
