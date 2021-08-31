const client = require("../index");
const ms = require("ms");
const { Collection } = require("discord.js");
const Timeout = new Collection();
const axios = require("axios")
const config = require("../config.json");
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  let p;
  let mentionRegex = message.content.match(
    new RegExp(`^<@!?(${client.user.id})>`, "gi")
  );
  if (mentionRegex) {
    p = `${mentionRegex}`;
  } else {
    p = config.prefix;
  }
  if (!message.content.startsWith(p)) {
    if (message.channel.id == '871204840137711707') {
      try {
        const res = await axios.get(`http://api.brainshop.ai/get?bid=159106&key=rGHrcDH8SQk4qmOb&uid=[uid]&msg=[msg]${encodeURIComponent(message.content)}`);
        message.channel.send(res.data.cnt);
    }
    catch(e) {
        message.channel.send("I don't know this");
    }

    } else return;
  }
  if (!message.guild) return;
  
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(p.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
      const command = client.commands.get(cmd.toLowerCase()) || client.commands.get(client.aliases.get(cmd.toLowerCase()));

    if (!command) return;
  if (command) {
    if (!message.member.permissions.has(command.userPerms || []))
      return message.reply({
        content: `You dont have permissions to execute that command.`,
      });
    if (!message.guild.me.permissions.has(command.botPerms || []))
      return message.reply({
        content: `I dont have permissions to execute that command.`,
      });
    if (command.timeout) {
      if (Timeout.has(`${command.name}${message.author.id}`))
        return message.channel.send(
          `You are on a \`${ms(
            Timeout.get(`${command.name}${message.author.id}`) - Date.now(),
            { long: true }
          )}\` cooldown.`
        );
      command.run(client, message, args);
      Timeout.set(
        `${command.name}${message.author.id}`,
        Date.now() + command.timeout
      );
      setTimeout(() => {
        Timeout.delete(`${command.name}${message.author.id}`);
      }, command.timeout);
    }
  }
});


// messageCreate event


