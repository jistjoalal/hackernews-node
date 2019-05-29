const { GraphQLServer } = require("graphql-yoga");

// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "fullstack tutorial"
  }
];

// resolvers define schema implementation
const resolvers = {
  Query: {
    info: () => "This is the API of a hackernews clone",
    feed: () => links
  }
};

// pass both to server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`server online @ http://localhost:4000`));
