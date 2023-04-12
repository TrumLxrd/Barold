const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Pong!"),
  run: async (client, interaction) => {
    let embed = new EmbedBuilder()
      .addFields({
        name: `My API Latency is: ${Math.round(client.ws.ping)}ms`,
        value: "\u200B",
      })
      .setThumbnail("https://i.imgur.com/oVxo2y0.png")
      .setTitle("Pong 🏓");
    interaction.reply({ embeds: [embed] });
  },
};
