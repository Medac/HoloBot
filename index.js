const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//   if (msg.content === 'w!claim Holo') {
//     msg.reply('I cannot believe you have done this. Return me to Cade immediately.');
//   }
// });

client.on("message", (message) => {
  if (message.content.startsWith("OwO")) {
    message.channel.send("Fuck you stop OwOing");
  } else

    if (message.content.startsWith("w!claim Holo")) {
      message.channel.send("I cannot believe you have done this. Return me to Cade immediately.");
    }
});

client.login('token');