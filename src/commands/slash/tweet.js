const { SlashCommandBuilder } = require("@discordjs/builders");
const Jimp = require("jimp");
const { unlink } = require("fs");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("tweet")
  .setDescription("sends a tweet!"),
  run: async (client, interaction, args) => {
    try {
      if (args.length >= 1) {
        Jimp.read("https://i.imgur.com/0rygIR8.png").then(function (image) {
          Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
            image.quality(84);
            image.print(font, 43, 107, args.join(" "), 601);
            let outputfile =
              "../output" +
              Math.random().toString(36).substr(2, 5) +
              "tweet." +
              image.getExtension();
            image.write(outputfile, function () {
              interaction
                .reply({
                  files: [outputfile],
                })
                .then(function () {
                  unlink(outputfile, (err) => {
                    if (err) throw err;
                    console.log(`[FILE] ${outputfile} was deleted.`);
                  });
                });
            });
          });
        });
      } else {
        return interaction.reply("Please enter what you want to tweet!");
      }
    } catch (err) {
      console.error(`[ERROR] Error encountered.`);
    }
  },
};
