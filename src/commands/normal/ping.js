const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  usage: "",
  alias: ["ping"],
  cooldown: 10,
  onlyowner: false,
  onlydev: false,
  perms: [],
  run: async (client, message, args, storage) => {
    let embed = new EmbedBuilder()
      .addFields({
        name: `My API Latency is: ${Math.round(client.ws.ping)}ms`,
        value: "\u200B",
      })
      .setThumbnail("https://i.imgur.com/oVxo2y0.png")
      .setTitle("Pong 🏓");
    message.reply({ embeds: [embed] });
  },
};
