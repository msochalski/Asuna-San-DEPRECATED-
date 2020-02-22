module.exports = {
    name: "woman",
    aliases: ["mateusz"],
    category: "fun",
    description: "Reveals false information",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Checking Discord and Snapchat DM's of users...`);

        msg.edit(`HAHA Found it El Mujer Loves El Hombre very much <3`);
    }
}