const { Discord, RichEmbed, Message } = require("discord.js")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  new Message()
  message.channel.send(`Your Discord ID is ${message.author.id}`);
  message.channel.send(`The bot prefix is ${config.prefix}`);
}


module.exports.help = {
  name: "botinfo"
}