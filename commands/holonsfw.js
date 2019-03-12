const { Discord, RichEmbed } = require("discord.js")
const fs = require('fs')

module.exports.run = async (bot, message, args) => {

  let embed = new RichEmbed()
    .setImage('https://i.imgur.com/')
    .setColor('#FF4500')

  message.channel.send(embed);
}

module.exports.help = {
  name: "holonsfw"
}