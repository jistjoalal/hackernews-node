const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

// resolvers define schema implementation
const resolvers = {
  Query: {
    info: () => "This is the API of a hackernews clone",
    feed: (root, args, ctx, info) => {
      return ctx.prisma.links();
    }
  },
  Mutation: {
    post: (root, args, ctx) => {
      return ctx.prisma.createLink({
        url: args.url,
        description: args.description
      });
    }
  }
};

// pass both to server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log(`server online @ http://localhost:4000`));
