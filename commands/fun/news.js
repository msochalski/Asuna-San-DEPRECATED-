#grabs discord.js
#grabs randomPuppy to allow the command to gain a random post from the subreddit
const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
#allocates the command on the fun directory on "cream help" command
module.exports = {
    name: "news",
    category: "fun",
    description: "sends a random news article",
    run: async (client, message, args) => {
        const subReddits = ["news"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        #grabs the image/post from the subreddit
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);
            #sends the embed into the channel
            message.channel.send(embed);
    }
}
