<h1 align="center">
Very simple GraphQL starter in NodeJS + MongoDB + Apollo
</h1>

<p align="center">Very simple starter to understand the principle of work</p>

## Getting started

1. Clone this repo using `https://github.com/skorotkiewicz/node-graphql-starter.git`
2. Move to the appropriate directory: `cd gnode-graphql-starter`.
4. Run `npm install` to install dependencies.
5. Set `.env` file with your mongoURI.
6. Run `npm start` to see the GraphQL at `http://localhost:4000/graphql`.


Get data
```
{
  getUsers {
    id
    name
    email
    password
  }

  getPosts {
    id
    title
    description
  }
}
```

Post data
```
mutation {
  addPost(title: "Awasome Post!", description: "My new post <3") {
    id
    title
    description
  }
}
```