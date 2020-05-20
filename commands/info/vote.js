const { Client, Collection } = require("discord.js");

module.exports = {
    name: "vote",
    aliases: ["v"],
    category: "info",
    description: "vote for the bot", 
    run: async(client, message, args) => {
  message.delete();
  let embed = new Discord.RichEmbed()
    .setTitle("Vote for Creambot!")
    .addField("Voting on top.gg:", "https://top.gg/bot/613763752352940032")
  message.channel.send({embed});
}}
