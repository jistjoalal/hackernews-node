function newLinkSubscribe(parents, args, ctx, info) {
  return ctx.prisma.$subscribe.link({ mutation_in: ["CREATED"] }).node();
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => payload
};

module.exports = {
  newLink
};
