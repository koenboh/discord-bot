const name = [
  'Robert <@702623106438660260>',
  'Max <@688834763460706511>',
  'Floris <@286858035060670475>',
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
