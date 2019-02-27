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

// Before command variable
//Commands with integrated prefix and bot detection
// client.on("message", (message) => {
//   // Exit and stop if it's not there
//   if (!message.content.startsWith(config.prefix) || message.author.bot) return;

//   if (message.content.startsWith(config.prefix + "ping")) {
//     message.channel.send("pong!");
//   } else
//     if (message.content.startsWith(config.prefix + "foo")) {
//       message.channel.send("bar!");
//     }
// });


// After command Variable
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send("pong!");
  } else
  if (command === 'blah') {
    message.channel.send('meh');
  }

  if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

  // Kick a single user in the mention
  if (command === "banana") {
    let member = message.mentions.members.first();
    member.kick();
  }

  if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }

  if(command === 'embed') {
    message.channel.send({embed: {
      color: 3447003,
      description: "A very simple Embed!"
    }});
  }

  if(command === 'embed2') {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "This is an embed",
      url: "http://google.com",
      description: "This is a test embed to showcase what they look like and what they can do.",
      fields: [{
          name: "Fields",
          value: "They can have different fields with small headlines."
        },
        {
          name: "Masked links",
          value: "You can put [masked links](http://google.com) inside of rich embeds."
        },
        {
          name: "Markdown",
          value: "You can put all the *usual* **__Markdown__** inside of them."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Example"
      }
    }});
  }

  if(command === 'embed3') {
    const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
  }

});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("welcome").send(`"${member.user.username}" has joined this server`);
});

client.login(config.token);
