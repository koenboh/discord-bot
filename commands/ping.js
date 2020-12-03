module.exports = {
  name: 'ping',
  description: 'ping, pong. Met ping tijd.',
  execute(message, args) {
    message.channel.send("ff mikken...").then(m =>{
      var ping = m.createdTimestamp - message.createdTimestamp;
      m.edit(`Pong! in:\n  ${ping}ms`);
    });
  },
};
