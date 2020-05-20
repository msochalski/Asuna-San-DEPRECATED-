const cry = require('./cry.json');
const Discord = require('discord.js');

module.exports = {
    name: "cry",
    category: "reactions",
    description: "sends a crying gif",  
    run: async (client, message, args) => {
    args = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle(`${message.author.username} is Crying TwT`)
    .setImage(`${cry[Math.floor(Math.random() * cry.length)]}`)
    message.channel.send({embed})
}}