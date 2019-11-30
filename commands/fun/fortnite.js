const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const Client = require("fortnite");
const ft = new Client(process.env.FORTNITE);

module.exports = {
    name:"fortnite",
    aliases:["ft"],
    description: "Displays someone's stats/concurrent store!",
    usage: "<username | store>",
    run: async (client, message, args) => {
        const platforms = ["pc", "xb1", "psn"];

        const lastWord = args[args.length -1].toLowerCase();

        let platform, username;

        if(platform.includes(lastWord)) {
            username = args.slice(0, args.length - 1).join(" ");
            platform = lastWord;
        } else {
            username = args.join(" ");
            platform = "pc";
        }

        const search = await ft.user(username, platform);

        console.log(search);

        if(!search.username) {
            return message.channel.send("Couldn't find that user...")
            .then(m => m.delete(5000));
        }

        const lifetime = search.stats.lifetime;
        const solo = search.stats.solo;
        const duo = search.stats.duo;
        const squad = search.stats.squad;

        const embed = new RichEmbed()
            .setColor("#9d4dbb")
            .setTitle(`${search.username} (${search.platform})`)
            .setURL(search.url)
            .setFooter("Fortnite stats", message.author.displayAvatarURL)
            .setTimestamp()
            .addField("Solo:", stripIndents`**- Wins:** ${solo.wins}
            **- KD:** ${solo.kd}
            **- Kills:** ${solo.kills}
            **- Kills per Match:** ${solo.kills_per_match}`, true)
            .addField("Duo:", stripIndents`**- Wins:** ${duo.wins}
            **- KD:** ${duo.kd}
            **- Kills:** ${duo.kills}
            **- Kills per Match:** ${duo.kills_per_match}`, true)
            .addField("Squads:", stripIndents`**- Wins:** ${squad.wins}
            **- KD:** ${squad.kd}
            **- Kills:** ${squad.kills}
            **- Kills per Match:** ${squad.kills_per_match}`, true)
            .addField("Lifetime:", stripIndents`**- Wins:** ${lifetime.wins}
            **- KD:** ${lifetime.kd}
            **- Kills:** ${lifetime.kills}
            **- Kills per Match:** ${lifetime.kills_per_match}`, false)

        message.channel.send(embed)
    }
}