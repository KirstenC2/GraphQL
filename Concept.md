# Concept of GraphQL

## Schema
- Defines types and relationships between data.
- Acts as a contract between client and server.
- Written in Schema Definition Language (SDL).

### Example

```
type User {
  id: ID
  name: String
  posts: [Post]
}

type Post {
  id: ID
  title: String
  comments: [Comment]
}

type Comment {
  text: String
}

type Query {
  user(id: ID!): User
}

```

## Query

- The client sends a query specifying what data it wants.
- Queries look like nested JSON but are actually GraphQL syntax.

### Example:

```
{
  user(id: 1) {
    name
    posts {
      title
      comments {
        text
      }
    }
  }
}

```

## Mutations
GraphQL supports modifying data with mutations (similar to POST/PUT/DELETE).

### Example:

```
mutation {
  createUser(name: "Anna") {
    id
    name
  }
}
```