const Discord = require('discord.js');
const superagent = require('superagent');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "lizard",
    category: "fun",
    description: "sends a random lizard",
    run: async (client, message, args, tools) => {
        const { body } = await superagent
        .get("https://nekos.life/api/lizard");
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, Here's your Lizard`)
        .setImage(body.url) 
        message.channel.send({embed})
}};