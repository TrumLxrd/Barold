const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const got = require("got");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Sends a meme!"),
  run: async (client, interaction) => {
    try {
      const response = await got("https://www.reddit.com/r/memes/random/.json");
      const [list] = JSON.parse(response.body);
      const [post] = list.data.children;

      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;

      const embed = new EmbedBuilder();
      embed.setTitle(`${memeTitle}`);
      embed.setURL(`${memeUrl}`);
      embed.setColor("Random");
      embed.setImage(memeImage);
      embed.setFooter({
        text: `👍 ${memeUpvotes} 💬 ${memeNumComments}`,
      });

      interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      message.reply("[ERROR] An error occurred while trying to fetch a meme.");
    }
  },
};
