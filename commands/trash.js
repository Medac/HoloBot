const { Discord, Message } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  new Message()
  message.channel.send(`Are you sure you want to delete all ${message.author.username}\'s waifus? Y/N`);
}



module.exports.help = {
  name: "trash"
}