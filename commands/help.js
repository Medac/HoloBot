const { Discord, Message } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  new Message()
  message.channel.send('Soon')
}


module.exports.help = {
  name: "help"
}