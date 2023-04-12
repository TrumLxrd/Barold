module.exports = {
  name: "interactionCreate",
  run: async (interaction) => {
    const { InteractionType } = require("discord.js");
    let client = interaction.client;

    if (interaction.type == InteractionType.ApplicationCommand) {
      if (interaction.user.bot) return;

      try {
        const command = client.commands.get(interaction.commandName);
        command.run(client, interaction, args);
      } catch {
        interaction.reply({ content: "hello", ephemeral: true });
      }
    }
  },
};
