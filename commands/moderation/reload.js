module.exports = {
    name: "reload",
    aliases: ["update", "restart"],
    category: "moderation",
    description: "reloads a command if it has been updated",
    run: async(client, message, args) => {
    if (message.author.id !== '326252435754713089') return message.reply('You do not have the permission to use this command!');
    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`I cannot find the command: ${args[0]}`);
    } else {
      message.channel.send(`Reloading: ${command}`)
        .then(m => {
          client.reload(command)
            .then(() => {
              m.edit(`Successfully reloaded: ${command}`);
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
  }};