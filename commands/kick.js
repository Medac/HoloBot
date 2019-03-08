const Discord = require("discord.js")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === config.ownerID) {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
    message.channel.send('Yeah, fuck that guy');
  } else if (message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }
}

module.exports.help = {
  name: "kick"
}