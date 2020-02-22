const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const client = new Client({
    disableEveryone: true
});
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
    
    client.user.setPresence({
        status: "dnd",
        game: {
            name: "Watching my King",
            type: "STREAMING",
            url: "https://www.twitch.tv/m_ag1c"
        }
    }); 
});
client.on("message", async message => {
    const prefix = "cream ";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    if(command === "woman") {
    await message.channel.send("Hold on checking dm's...");
    message.edit(`El Mujer loves El Hombre as much as 0. Unlucky master`);
  }

    if (command) 
        command.run(client, message, args);
});

client.on("message", async message => {
    console.log(`${message.author.username} said: ${message.content}`);
});
client.on("disconnect",() =>{
    db = null;
    console.log('Database instance destroyed')
});
client.login(process.env.BOT_TOKEN);
