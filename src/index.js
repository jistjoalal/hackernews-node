const { GraphQLServer } = require("graphql-yoga");

// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "fullstack tutorial"
  }
];
let idCount = links.length;

// resolvers define schema implementation
const resolvers = {
  Query: {
    info: () => "This is the API of a hackernews clone",
    feed: () => links,
    link: (parent, args) => links.filter(({ id }) => id == args.id)[0]
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const link = links.filter(({ id }) => id == args.id)[0];
      if (args.url) link.url = args.url;
      if (args.description) link.description = args.description;
      links = links.filter(({ id }) => id != args.id);
      links.push(link);
      return link;
    },
    deleteLink: (parent, args) => {
      const link = links.filter(({ id }) => id == args.id)[0];
      links = links.filter(({ id }) => id != args.id);
      return link;
    }
  }
};

// pass both to server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`server online @ http://localhost:4000`));
