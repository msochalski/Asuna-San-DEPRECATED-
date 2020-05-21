const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const { join } = require('path');
const superagent = require('superagent');
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
    console.log(`Hi, I am in ${client.guilds.size} servers and ${client.user.username} is now online!`);
    
    client.user.setPresence({
        status: "dnd",
        game: {
            name: "Watching my King",
            type: "STREAMING",
            url: "https://www.twitch.tv/m_ag1c"
        }
    }); 
});

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
  
    let channel = client.channels.get(guild.systemChannelID || channelID);
    channel.send(`Thanks for inviting me into this server! Please >help for the informations you WILL need in order for the bot to work properly. Do >suggest if there's any suggestions. THANKS`);
});
client.on("message", async message => {
    const prefix = ">";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.on("message", async message => {
    console.log(`${message.member.guild}, ${message.author.username} said: ${message.content}`);
});
client.on('messageDelete', async message => {
	
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();
	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);
	const { executor, target } = deletionLog;
	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	}	else {
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
});
client.on('guildMemberRemove', async member => {
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
	});
	const kickLog = fetchedLogs.entries.first();
	if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);
	const { executor, target } = kickLog;
	if (target.id === member.id) {
		console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
	} else {
		console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
	}
});
client.on('guildBanAdd', async (guild, user) => {
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});

	const banLog = fetchedLogs.entries.first();

	if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

	if (target.id === user.id) {
		console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`);
	} else {
		console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
	}
});
client.on("disconnect",() =>{
    db = null;
    console.log('Database instance destroyed')
});
client.login(process.env.BOT_TOKEN);
