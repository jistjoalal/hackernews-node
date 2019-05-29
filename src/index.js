const { GraphQLServer } = require("graphql-yoga");

// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "fullstack tutorial"
  }
];

// typeDefs define GraphQL schema
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

// resolvers define schema implementation
const resolvers = {
  Query: {
    info: () => "This is the API of a hackernews clone",
    feed: () => links
  }
};

// pass both to server
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`server online @ http://localhost:4000`));
