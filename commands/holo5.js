const { Discord, RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new RichEmbed()
    .setTitle('Holo picture generator')
    .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
    .setColor('#FF4500')
    .setDescription('Hear ye, hear ye. Eventually this command will generate a random picture of Holo. As of right now it is just this one static image. Enjoy.')
    .setImage("https://i.imgur.com/xYJWr4Z.jpg")
    .setTimestamp()
  message.channel.send({ embed });
}

module.exports.help = {
  name: "holo5"
}