module.exports = {
  name: "interactionCreate",
  run: async (interaction) => {
    const { InteractionType } = require("discord.js");
    let client = interaction.client;

    if (interaction.type == InteractionType.ApplicationCommand) {
      if (interaction.user.bot) return;
      try {
        const command = client.slashcommands.get(interaction.commandName);
        command.run(client, interaction);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
