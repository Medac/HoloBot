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
  if (message.author.bot) return;


  if (message.content.startsWith('OwO')) {
    message.channel.send('Fuck you stop OwOing');
  }

  if (message.content === 'gottem') {
    message.channel.send('gottem');
  }

  if (message.content === 'Good night Holo' & message.author.id == config.ownerID) {
    message.channel.send('Good night! Sweet dreams! See you in the morning.');
  } else if (message.content === 'Good night Holo' & message.author.id !== config.ownerID) {
    message.channel.send('Peace')
  }

  if (message.content === 'Good morning Holo' & message.author.id == config.ownerID) {
    message.channel.send('Good morning! Be productive and have a good day!');
  } else if (message.content === 'Good night Holo' & message.author.id !== config.ownerID) {
    message.channel.send(`A fine morning indeed ${message.author.username}`)
  }

  // Contingency for waifu claim
  if (message.content === "w!claim Holo" & message.author.id !== config.ownerID) {
    message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
  } else if (message.content === 'w!claim Holo' & message.author.id == config.ownerID) {
    message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
  }

  if (message.content === "W!claim Holo" & message.author.id !== config.ownerID) {
    message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
  } else if (message.content === 'W!claim Holo' & message.author.id == config.ownerID) {
    message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
  }

  if (message.content === "w!claim holo" & message.author.id !== config.ownerID) {
    message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
  } else if (message.content === 'w!claim holo' & message.author.id == config.ownerID) {
    message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
  }

  if (message.content === "W!claim holo" & message.author.id !== config.ownerID) {
    message.channel.send('I cannot believe you have done this. Please return me to Cade immediately');
  } else if (message.content === 'W!claim holo' & message.author.id == config.ownerID) {
    message.channel.send('Thanks goodness. I would not stand being able to travel with these other fools')
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
  let argresult = args.join(' ');
  const command = args.shift().toLowerCase();

  // Skeleton multiple arguments
  if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }

  // Kick a single user in the mention
  if (command === "banana" & message.author.id == config.ownerID) {
    let member = message.mentions.members.first();
    member.kick();
    message.channel.send('Yeah, fuck that guy');
  } else if (command === "banana" & message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }

  // Custom bot message
  if (command === "say" & message.author.id == config.ownerID) {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  } else if (command === "say" & message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }

  // ID lookup
  if (command === "id") {
    message.channel.send(`Your userID is ${message.author.id}`);
    message.channel.send(`The OwnerID is ${config.ownerID}`);
    message.channel.send(`The prefix is ${config.prefix}`)
  }

  // Undeveloped help command
  if (command === "help") {
    message.channel.send('Look man, You really think I am far enough into this thing to have a fleshed out help command? I can barely help myself let alone others');
  }

  if (command === "trash") {
    message.channel.send(`Are you sure you want to delete all ${message.author.username}\'s waifus? Y/N`);
  }


  //Embed skeletons
  if (command === 'embed' & message.author.id == config.ownerID) {
    message.channel.send({
      embed: {
        color: 3447003,
        description: "A very simple Embed!"
      }
    });
  } else if (command === 'embed' & message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }

  if (command === 'embed2' & message.author.id == config.ownerID) {
    message.channel.send({
      embed: {
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
      }
    });
  } else if (command === 'embed2' & message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }

  if (command === 'embed3' & message.author.id == config.ownerID) {
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

    message.channel.send({ embed });
  } else if (command === 'embed3' & message.author.id !== config.ownerID) {
    message.channel.send('As if I would ever listen to you');
  }

  if (command === 'setgame' & message.author.id == config.ownerID) {
    client.user.setActivity(argresult);
  }

});

// New Event - New member
client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  guild.defaultChannel.send('Welcome to The Shithole. It\'s what it sounds like.')
});

client.login(config.token);
