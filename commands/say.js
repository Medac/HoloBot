const { Discord, Message } = require("discord.js")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  new Message()
  if (message.author.id === config.ownerID) {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else if (message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }
}

module.exports.help = {
  name: "say"
}