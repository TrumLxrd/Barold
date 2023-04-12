module.exports = {
  name: "messageCreate",
  run: async (message) => {
    var client = message.client;
    var { EmbedBuilder, Collector } = require("discord.js");
    var GuildSchema = require("../models/guild.js");
    var UserSchema = require("../models/user.js");
    var misc = require("../utils/misc.json");

    //
    UserSchema.findOne(
      {
        userID: message.author.id,
      },
      (err, user) => {
        if (err) {
          console.error(err);
        }

        if (!user) {
          const newUserSchema = new UserSchema({
            userID: message.author.id,
            blacklisted: false,
            dev: false,
          });
          return newUserSchema.save();
        }

        GuildSchema.findOne(
          {
            guildID: message.guild.id,
          },
          (err, guild) => {
            if (err) {
              console.error(err);
            }

            if (!guild) {
              const prefixo = "im ";
              const prefo = prefixo.toLowerCase();
              const newGuildSchema = new GuildSchema({
                guildID: message.guild.id,
                prefix: prefo, // default guild prefix
              });
              return newGuildSchema.save();
            }
            //

            var prefix = guild.prefix;
            if (
              message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))
            ) {
              message.reply(`Prefix: \`${prefix}\``);
            }

            var blacklistedEmbed = new EmbedBuilder()
              .setTitle("Blacklisted")
              .setDescription(
                "Stop there! You have been blacklisted from our bot :(\nIf you want more information join [our Discord.](https://discord.gg/GcbwZEstyX)"
              )
              .setTimestamp();
            var errorEmbed = new EmbedBuilder()
              .setTitle("Error")
              .setDescription(
                "An error occurred while executing the command. If the problem persists contact us through [our support group.](https://discord.gg/GcbwZEstyX)"
              )
              .setTimestamp();

            if (message.author.bot) return;
            if (message.channel.type === "dm") return;
            if (!message.content.startsWith(prefix)) return;

            const args = message.content
              .slice(prefix.length)
              .trim()
              .split(/ +/g);
            const command = args.shift().toLowerCase();

            var cmd =
              client.commands.get(command) ||
              client.commands.find((c) => c.alias && c.alias.includes(command));

            if (!cmd) return;

            if (user.blacklisted) {
              message.reply(blacklistedEmbed).then((msg) => {
                msg.delete({ timeout: 10000 });
                return;
              });
              return;
            }

            if (cmd.onlyowner) {
              if (!misc.owners.id.includes(message.author.id)) {
                message.reply(
                  "You do not have permissions to perform this action."
                );
                return;
              }
            }

            if (cmd.onlydev) {
              if (!user.dev) {
                message.reply(
                  "You do not have permissions to perform this action."
                );
                return;
              }
            }

            var storage = {
              guild: guild,
              user: user,
              prefix: prefix,
              errorEmbed: errorEmbed,
              GuildSchema: GuildSchema,
              UserSchema: UserSchema,
            };

            const cmdCooldown = Math.floor(cmd.cooldown * 1000);
            const endCooldown = Math.floor(Date.now() + cmdCooldown);

            if (!client.cooldowns.has(`${message.author.id}.${cmd.name}`)) {
              client.cooldowns.set(`${message.author.id}.${cmd.name}`, 0);
            }

            const userCooldown = client.cooldowns.get(
              `${message.author.id}.${cmd.name}`
            );

            if (Date.now() < userCooldown) {
              let restCooldown = userCooldown - Date.now();
              let seconds = Math.floor(restCooldown / 9000);
              let cooldownMessage = `Stop there, you must wait ${seconds} before using the ${cmd.name} command again!.`;

              message.reply(cooldownMessage).then((msg) => {
                msg.delete({ timeout: restCooldown });
              });

              return;
            } else {
              try {
                cmd.run(client, message, args, storage);
                client.cooldowns.set(
                  `${message.author.id}.${cmd.name}`,
                  endCooldown
                );
              } catch (err) {
                message.reply({ embeds: [errorEmbed] });
                console.log.error(err);
              }

            }

          }

        );

      }

    );

  },

};