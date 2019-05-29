const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");

// resolvers define schema implementation
const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link
};

// pass both to server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => {
    return {
      ...req,
      prisma
    };
  }
});
server.start(() => console.log(`server online @ http://localhost:4000`));
