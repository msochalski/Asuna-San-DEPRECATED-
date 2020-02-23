const urban = require('urban-dictionary');
const { RichEmbed } = require("discord.js");

   module.exports = {
       name: "urban",
       aliases: ["urban", "Urban"],
       category: "fun",
       description: "Gets definition from urban dictionary",
       usage: "[args input]",
       run: async(client, message, args, tools) => {
           if (!args[0]) return message.channel.send(`***please write somthing***`);

   let res = await urban(args.join('')).catch(e => { 
       return message.channel.send(`***sorry word not found!***`)
   });

   const embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle(res.word)
       .setURL(res.urbanURL)
       .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
       .addField('Author', res.author, true)
       .addField('Rating', `**\`Upvotes: &{res.thumbsUp} | Downvotes: &{res.thumbsDown}\`**`)
    
   if  (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
       embed.addField('Tags', res.tags.join(', '), true)

   }

   message.channel.send(embed);

  }
}
