const { GraphQLServer } = require("graphql-yoga");

// typeDefs define GraphQL schema
const typeDefs = `
  type Query {
    info: String!
  }
`;

// resolvers define schema implementation
const resolvers = {
  Query: {
    info: () => `This is the API of a hackernews clone`
  }
};

// pass both to server
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`server online @ http://localhost:4000`));
