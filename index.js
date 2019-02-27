const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//   if (msg.content === 'w!claim Holo') {
//     msg.reply('I cannot believe you have done this. Return me to Cade immediately.');
//   }
// });



//Commands text based
client.on('message', (message) => {
  if (message.content.startsWith('OwO')) {
    message.channel.send('Fuck you stop OwOing');
  } else

    if (message.content.startsWith('w!claim Holo')) {
      message.channel.send('I cannot believe you have done this. Return me to Cade immediately.');
    }
});


//Commands with integrated prefix and bot detection
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
    if (message.content.startsWith(config.prefix + "foo")) {
      message.channel.send("bar!");
    }
});

client.login(config.token);
