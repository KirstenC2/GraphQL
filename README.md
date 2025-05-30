# GraphQL
For learning purpose.

## Official Website
https://graphql.org/

## Chapter 1: init GraphQL server


## Comparison
| Feature                      | **GraphQL**                              | **REST**                                     | **gRPC**                                            |
| ---------------------------- | ---------------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| **Data fetching**            | One request with exactly what you want   | Often multiple endpoints and over-fetching   | One request, but binary format (not human-readable) |
| **Transport Protocol**       | HTTP (usually POST)                      | HTTP (GET, POST, etc.)                       | HTTP/2 (binary, fast)                               |
| **Schema & Type Safety**     | Strongly typed schema (GraphQL SDL)      | No formal schema unless with Swagger/OpenAPI | Protocol Buffers (strongly typed)                   |
| **Tooling (Dev Experience)** | Excellent (GraphiQL, introspection)      | Moderate (Swagger, Postman)                  | Great, but more backend-oriented                    |
| **File Upload / Binary**     | Harder, needs workarounds                | Easy with multipart                          | Built-in binary support                             |
| **Caching**                  | Harder, needs extra config               | Easy via HTTP headers                        | Custom logic needed                                 |
| **Use Case Fit**             | Frontend-heavy apps with custom UI needs | Simple, CRUD-heavy APIs                      | Internal APIs, microservices, high performance      |


### For selected field only

Let say this is the whole one
```
{
  user(id: 2
  ) {
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

If you wanna get selected field:
```
{
  user(id: 2
  ) {
    name
  }
}
```


## Best Cases to Use GraphQL
1. Complex Frontend Apps with Nested Data
Your UI needs deeply nested, relational data (e.g., user → posts → comments).

You want to fetch exactly what the UI needs in one request (no over/under fetching).

Example: Social media apps, dashboards, or admin panels.

2. Rapid Frontend Iteration & Flexibility
Frontend teams want to control the data shape without backend changes.

Frequent UI changes require flexible data fetching.

Example: React or mobile apps with evolving data requirements.

3. Multiple Clients with Different Data Needs
One backend serving web, mobile, desktop apps with different data needs.

GraphQL lets each client get tailored data with a single endpoint.

4. Aggregating Multiple Data Sources
Backend combines data from REST APIs, databases, third-party services.

GraphQL provides a unified schema for clients.