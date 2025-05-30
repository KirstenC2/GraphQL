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
