const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "hug",
    category: "reactions",
    description: "hug someone", 
    run: async (client, message, args, tools) => {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them");
        if (message.mentions.users.first().id === message.author.id) return message.channel.send('I can\'t let you do that, that is lonely:facepalm:');
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/hug");
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, ${message.author.username} hugged ${message.mentions.users.first().username}`)
        .setImage(body.url) 
    message.channel.send({embed})
}};