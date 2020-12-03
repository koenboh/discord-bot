const name = [
  'Robert <@305078161362780171>',
  'Max <@305078161362780171>',
  'Floris <@305078161362780171>',
  'Koen <@305078161362780171>'
];

module.exports = {
  name: 'wie',
  description: 'Deze geeft een random naam: Robert, Max, Floris of Koen.',
  execute(message, args) {
    const i = Math.floor(Math.random() * name.length);
    message.channel.send(name[i]);
  },
};
