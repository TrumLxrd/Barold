const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { inspect } = require("util");

module.exports = {
  name: "eval",
  usage: "eval <code>",
  alias: ["e", "evaluate"],
  cooldown: 3,
  onlyowner: true,
  onlydev: false,
  perms: [],
  run: async (client, message, args, storage) => {
    const command = message.content.split(/ +/).slice(2).join(" ");

    if (!command)
      return message.reply(
        "`❌ An error occurred while executing this command` `Error: Please specify something to eval`"
      );

    try {
      const evaled = eval(command);

      let embed = {
        title: `Evaluated`,
        color: 0x00ffff,
        fields: [
          {
            name: "📥 Input",
            value: `\`\`\`${command}\`\`\``,
          },
          {
            name: "📤 Output",
            value: `\`\`\`js\n${inspect(evaled, { depth: 0 })}\`\`\``,
          },
          {
            name: "Type",
            value: `\`\`\`${typeof evaled}\`\`\``,
            inline: true,
          },
        ],
        author: {
          name: `Barold`,
          icon_url: `https://i.imgur.com/oVxo2y0.png`,
        },
        footer: {
          text: `Evaluated in ${client.ws.ping}ms`,
        },
      };
      message.reply({ embeds: [embed] });
    } catch (error) {
      let errembed = {
        title: `❌ Error`,
        description: `${error}`,
        author: {
          name: `Barold`,
          icon_url: `https://i.imgur.com/oVxo2y0.png`,
        },
        color: 0xff8e8e,
      };
      message.reply({ embeds: [errembed] });
    }
  },
};
