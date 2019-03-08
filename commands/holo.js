const { Discord, RichEmbed } = require("discord.js")
const fs = require('fs')
const imgur = require("../imgur.json")

//This one does random embed with pictures and description
//requires imageURL and quote to be put together in switch

module.exports.run = async (bot, message, args) => {
  let data = fs.readFileSync('imgur.txt', 'utf8').toString().split("\n");
  let quoteTotal = data.length;
  let quoteNumber = Math.floor(Math.random() * quoteTotal);


  let embed = new RichEmbed()
    .setImage(`https://i.imgur.com/${data[quoteNumber]}`)
    .setColor('#FF4500')

  message.channel.send(embed);
}

module.exports.help = {
  name: "holo"
}