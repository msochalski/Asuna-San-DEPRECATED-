const { RichEmbed } = require("discord.js");
 
module.exports = {
    name: "hug",
    aliases: ["hugs"],
    category: "fun",
    description: "sends gifs of hugs",
    run: async (client, message, args) => {

    let hug1 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/otters-sea-hug-sweet-finding-dory-gif-13642193");

    let hug2 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/dog-hug-bff-bestfriend-friend-gif-9512793");

    let hug3 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/milk-and-mocha-hug-cute-kawaii-love-gif-12535134");

    let hug4 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/big-hero6-baymax-feel-better-hug-hugging-gif-4782499");

    let hug5 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/warm-hug-gif-10592083");

    let hug6 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/hugs-tigger-winnie-the-pooh-friends-gif-5064381");

    let hug7 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/cat-love-huge-hug-big-gif-11990658");

    let hug8 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/anime-hug-sweet-love-gif-14246498");

    let hug9 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/anime-hug-gif-9200935");

    let hug10 = new RichEmbed()
    .setColor("#00ff00")
    .setImage("https://tenor.com/view/cat-hug-back-hug-notice-me-attention-to-me-gif-14227401");

    let hugs = [hug1, hug2, hug3, hug4, hug5, hug6, hug7, hug8, hug9, hug10]

    let dahug = Math.floor((Math.random() * hugs.length));

    message.channel.send(hugs[dahug])}}
