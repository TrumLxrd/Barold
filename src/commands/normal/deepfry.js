const Jimp = require("jimp");
const { unlink } = require("fs");

module.exports = {
  name: "deepfry",
  usage: "",
  alias: ["fry", "deepfry"],
  cooldown: 5,
  onlyowner: false,
  onlydev: false,
  perms: [],
  run: async (client, message, args, storage) => {
    // Make sure the command author is responding to an attachment
    if (!message.attachments.size) {
      return message.reply("Please provide an image to deepfry!");
    }

    const attachment = message.attachments.first();
    let image;
    try {
      // Try to read the image attachment
      image = await Jimp.read(attachment.url);
    } catch (err) {
      console.error(`Error processing image attachment: ${err}`);
      return message.reply("Error processing image attachment.");
    }

    // Apply deep-fry effect to the image
    image.contrast(0.5);
    image.brightness(0.5);
    image.color([{ apply: "saturate", params: [50] }]);

    // Send deep-fried image as a message
    const outputfile =
      "../output" +
      Math.random().toString(36).substr(2, 5) +
      "deepfry." +
      image.getExtension();

    try {
    } catch (err) {
      console.error(`Error writing image file: ${err}`);
      return message.reply("Error writing image file.");
    }

    // Try to write the image to disk
    image.write(outputfile, function () {
      message
        .reply({
          files: [outputfile],
        })

        // Try to delete the image file after sending it as a message
        .then(function () {
          unlink(outputfile, (err) => {
            if (err) {
              console.error(`Error deleting image file: ${err}`);
            } else {
              console.log(`[FILE] ${outputfile} was deleted.`);
            }
          });
        });
    });
  },
};
