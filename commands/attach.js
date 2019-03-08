const { Client, Attachment, Message } = require('discord.js');
const fs = require('fs');




module.exports.run = async (bot, message, args) => {
  let data = fs.readFileSync('imgur.txt', 'utf8').toString().split("\n");
  let quoteTotal = data.length;
  let quoteNumber = Math.floor(Math.random() * quoteTotal);
  console.log(data[quoteNumber])

  new Message()
  message.channel.send(`https://i.imgur.com/${data[quoteNumber]}`)
}


module.exports.help = {
  name: "attach"
}