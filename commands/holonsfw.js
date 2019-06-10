const { Discord, RichEmbed } = require("discord.js")
const config = require("../config.json");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  if (message.author.id === config.ownerID) {
    const embed = new RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor('#FF4500')
      .setImage("https://i.imgur.com/iFjVL6w.jpg")
    message.channel.send({ embed });
  } else if (message.author.id !== config.ownerID) {
    const embed = new RichEmbed()
      .setTitle('YOU HAVE ANGERED HOLO!! TASTE BAD FANART SCOUNDREL!')
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setColor('#990000')
      .setImage("https://i.imgur.com/EgSg11E.jpg")
      .setTimestamp()
    message.channel.send({ embed });
  }
}

module.exports.help = {
  name: "holonsfw"
}