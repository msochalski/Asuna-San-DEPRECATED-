module.exports = {
    name: "unlockdown",
    aliases: ["open", "release"],
    category: "moderation",
    description: "unlocks the chat",
    run: async(client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
    if (message.author.id !== '326252435754713089') return message.reply('You do not have the permission to use this command!');    
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Lockdown lifted <a:balancecheck:556017659419033653> WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:');
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      })
}};