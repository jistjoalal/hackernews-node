function newLinkSubscribe(parent, args, ctx, info) {
  return ctx.prisma.$subscribe.link({ mutation_in: ["CREATED"] }).node();
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => payload
};

function newVoteSubscribe(parent, args, ctx, info) {
  return ctx.prisma.$subscribe.vote({ mutation_in: ["CREATED"] }).node();
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => payload
};

module.exports = {
  newLink,
  newVote
};
