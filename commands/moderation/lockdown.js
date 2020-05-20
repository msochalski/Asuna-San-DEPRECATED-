module.exports = {
    name: "lockdown",
    aliases: ["corona", "quarantine"],
    category: "moderation",
    description: "locks the chat",
    run: async(client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
    if (message.author.id !== '326252435754713089') return message.reply('You do not have the permission to use this command!');
    
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
        message.channel.send(`Damnn, **${message.author.username}** just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.`);
    }};