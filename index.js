const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");


// const rquote = require("./quotes.json");
// const random = Math.floor((Math.random() * 5) + 1);
// var entries = rquote.quotes[0];
// var randomEntries = Object.keys(entries)[Math.floor(Math.random() * entries.length)];

const bot = new Discord.Client({ disableEveryone: true })
bot.commands = new Discord.Collection();

//Loads command files from the /cmds/ folder
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  if (err) console.log(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  //split breaks the string at the selected points and makes the leftover pieces into an array
  //pop takes last entry in an array
  if (jsfiles.length <= 0) {
    console.log("no commands to load!");
    return;
  }

  console.log("loading " + jsfiles.length + " commands!");
  jsfiles.forEach((f, i) => {
    let props = require("./commands/" + f);
    bot.commands.set(props.help.name, props);
  });
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  command = command.toLowerCase();
  let args = messageArray.slice(1);

  if (message.content.toLowerCase() === "owo") {
    message.channel.send('*beats dead horse*');
  } else

    if (message.content.toLowerCase() === 'gottem') {
      message.channel.send('gottem');
    } else

      if (message.content.toLowerCase() === 'good night holo' & message.author.id == config.ownerID) {
        message.channel.send('Good night! Sweet dreams! See you in the morning.');
      } else if (message.content.toLowerCase() === 'good night holo' & message.author.id !== config.ownerID) {
        message.channel.send('Peace')
      } else

        if (message.content.toLowerCase() === 'good morning holo' & message.author.id == config.ownerID) {
          message.channel.send('Good morning! Be productive and have a good day!');
        } else if (message.content.toLowerCase() === 'good morning holo' & message.author.id !== config.ownerID) {
          message.channel.send(`A fine morning indeed ${message.author.username}`)
        } else

          // Contingency for waifu claim
          if (message.content.toLowerCase() === "w!claim holo" & message.author.id !== config.ownerID) {
            message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
          } else if (message.content.toLowerCase() === 'w!claim holo' & message.author.id == config.ownerID) {
            message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
          }

  //removes all non-prefix messages
  if (!command.startsWith(config.prefix)) return;

  //runs commands from other files if they exist
  let cmd = bot.commands.get(command.substring(config.prefix.length).toLowerCase());
  console.log(cmd);
  if (cmd) cmd.run(bot, message, args);

});

// //Commands text based
// client.on('message', (message) => {
//   if (message.author.bot) return;


//   if (message.content.toLowerCase().startsWith('owo')) {
//     message.channel.send('Fuck you stop OwOing');
//   } else

// if (message.content.toLowerCase() === 'gottem') {
//   message.channel.send('gottem');
// } else

//   if (message.content.toLowerCase() === 'good night holo' & message.author.id == config.ownerID) {
//     message.channel.send('Good night! Sweet dreams! See you in the morning.');
//   } else if (message.content.toLowerCase() === 'good night holo' & message.author.id !== config.ownerID) {
//     message.channel.send('Peace')
//   } else

//     if (message.content.toLowerCase() === 'good morning holo' & message.author.id == config.ownerID) {
//       message.channel.send('Good morning! Be productive and have a good day!');
//     } else if (message.content.toLowerCase() === 'good morning holo' & message.author.id !== config.ownerID) {
//       message.channel.send(`A fine morning indeed ${message.author.username}`)
//     } else

//       // Contingency for waifu claim
//       if (message.content.toLowerCase() === "w!claim holo" & message.author.id !== config.ownerID) {
//         message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
//       } else if (message.content.toLowerCase() === 'w!claim holo' & message.author.id == config.ownerID) {
//         message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
//       }
// });

// // Before command variable
// //Commands with integrated prefix and bot detection
// // client.on("message", (message) => {
// //   // Exit and stop if it's not there
// //   if (!message.content.startsWith(config.prefix) || message.author.bot) return;

// //   if (message.content.startsWith(config.prefix + "ping")) {
// //     message.channel.send("pong!");
// //   } else
// //     if (message.content.startsWith(config.prefix + "foo")) {
// //       message.channel.send("bar!");
// //     }
// // });


// // After command Variable
// client.on("message", (message) => {
//   if (message.author.bot) return;
//   if (message.content.indexOf(config.prefix) !== 0) return

//   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//   const command = args.shift().toLowerCase();

//   // Skeleton multiple arguments
//   if (command === "asl") {
//     let [age, sex, location] = args;
//     message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
//   } else

//     // Kick a single user in the mention
//     if (command === "kick" & message.author.id == config.ownerID) {
//       let member = message.mentions.members.first();
//       let reason = args.slice(1).join(" ");
//       member.kick(reason);
//       message.channel.send('Yeah, fuck that guy');
//     } else if (command === "kick" & message.author.id !== config.ownerID) {
//       message.channel.send('As if I would ever listen to you');
//     } else

//       if (command === "grab") {
//         let member = message.mentions.members.first();
//         message.channel.send(`You have grabbed ${member}`);
//       } else

//         if (command === "quote") {
//           message.channel.send(randomEntries);
//         } else

//           // Custom bot message
//           if (command === "say" & message.author.id == config.ownerID) {
//             let text = args.join(" ");
//             message.delete();
//             message.channel.send(text);
//           } else if (command === "say" & message.author.id !== config.ownerID) {
//             message.channel.send('As if I would ever listen to you');
//           } else

//             // Undeveloped help command
//             if (command === "help") {
//               message.channel.send('Look man, You really think I am far enough into this thing to have a fleshed out help command? I can barely help myself let alone others');
//             } else

//               if (command === "sayhi") {
//                 message.channel.send('Hi everyone');
//               } else

//                 if (command === "trash") {
//                   message.channel.send(`Are you sure you want to delete all ${message.author.username}\'s waifus? Y/N`);
//                 } else


//                   //Embed skeletons
//                   if (command === 'embed' & message.author.id == config.ownerID) {
//                     message.channel.send({
//                       embed: {
//                         color: 3447003,
//                         description: "A very simple Embed!"
//                       }
//                     });
//                   } else if (command === 'embed' & message.author.id !== config.ownerID) {
//                     message.channel.send('As if I would ever listen to you');
//                   } else

//                     if (command === 'embed2' & message.author.id == config.ownerID) {
//                       message.channel.send({
//                         embed: {
//                           color: 3447003,
//                           author: {
//                             name: client.user.username,
//                             icon_url: client.user.avatarURL
//                           },
//                           title: "This is an embed",
//                           url: "http://google.com",
//                           description: "This is a test embed to showcase what they look like and what they can do.",
//                           fields: [{
//                             name: "Fields",
//                             value: "They can have different fields with small headlines."
//                           },
//                           {
//                             name: "Masked links",
//                             value: "You can put [masked links](http://google.com) inside of rich embeds."
//                           },
//                           {
//                             name: "Markdown",
//                             value: "You can put all the *usual* **__Markdown__** inside of them."
//                           }
//                           ],
//                           timestamp: new Date(),
//                           footer: {
//                             icon_url: client.user.avatarURL,
//                             text: "© Example"
//                           }
//                         }
//                       });
//                     } else if (command === 'embed2' & message.author.id !== config.ownerID) {
//                       message.channel.send('As if I would ever listen to you');
//                     } else

//                       if (command === 'embed3' & message.author.id == config.ownerID) {
//                         const embed = new Discord.RichEmbed()
//                           .setTitle("This is your title, it can hold 256 characters")
//                           .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
//                           /*
//                            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
//                            */
//                           .setColor(0x00AE86)
//                           .setDescription('Eventually this command will generate a random picture of Holo. As of right now it is just this one static image.')
//                           .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
//                           .setImage("https://i.imgur.com/xYJWr4Z.jpg")
//                           .setThumbnail("http://i.imgur.com/p2qNFag.png")
//                           /*
//                            * Takes a Date object, defaults to current date.
//                            */
//                           .setTimestamp()
//                           .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
//                           .addField("This is a field title, it can hold 256 characters",
//                             "This is a field value, it can hold 1024 characters.")
//                           /*
//                            * Inline fields may not display as inline if the thumbnail and/or image is too big.
//                            */
//                           .addField("Inline Field", "They can also be inline.", true)
//                           /*
//                            * Blank field, useful to create some space.
//                            */
//                           .addBlankField(true)
//                           .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
// 
//                         message.channel.send({ embed });
//                       } else if (command === 'embed3' & message.author.id !== config.ownerID) {
//                         message.channel.send('As if I would ever listen to you');
//                       } else
// 
//                         if (command === 'holo') {
//                           const embed = new Discord.RichEmbed()
//                             .setTitle('Holo picture generator')
//                             .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
//                             .setColor('#FF4500')
//                             .setDescription('Hear ye, hear ye. Eventually this command will generate a random picture of Holo. As of right now it is just this one static image. Enjoy.')
//                             .setImage("https://i.imgur.com/xYJWr4Z.jpg")
//                             .setTimestamp()
//                           message.channel.send({ embed });
//                         } else
// 
//                           if (command === 'setgame' & message.author.id == config.ownerID) {
//                             client.user.setActivity(argresult);
//                           }
// 
// });

// New Event - New member
client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  guild.defaultChannel.send('Welcome to The Shithole. It\'s what it sounds like.')
});



client.login(config.token);
