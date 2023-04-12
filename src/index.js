const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
  shards: "auto",
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
});
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const moment = require("moment");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const data = require("./utils/data.json");

client.commands = new Collection();
client.cooldowns = new Collection();
client.slashcommands = new Collection();
client.commandaliases = new Collection();

const rest = new REST({ version: "10" }).setToken(data.token.discord);
const log = (x) => {
  console.log(`[${moment().format("DD-MM-YY HH:mm")}] ${x}`);
};

//command-handler
const commands = [];
readdirSync("./commands/normal").forEach(async (file) => {
  try {
    const command = await require(`./commands/normal/${file}`);
    if (command) {
      console.log(`[FILE] Loaded command ${command.name}.js!`);
      client.commands.set(command.name, command);
      commands.push(command.name, command);
      if (command.aliases && Array.isArray(command.aliases)) {
        command.aliases.forEach((alias) => {
          client.commandaliases.set(alias, command.name);
        });
      }
    }
  } catch (error) {
    console.error(error);
    console.error(
      `[ERROR] Error encountered while attempting to read file ${file}`
    );
  }
});

//slash-command-handler
const slashcommands = [];
try {
  readdirSync("./commands/slash").forEach(async (file) => {
    try {
      const command = await require(`./commands/slash/${file}`);
      slashcommands.push(command.data.toJSON());
      client.slashcommands.set(command.data.name, command);
      console.log(`[FILE] Loaded slash command ${file}!`);
    } catch (err) {
      console.error(`[ERROR] Error loading command ${file}: ${err}`);
    }
  });
} catch (err) {
  console.error(`[ERROR] Error reading commands directory: ${err}`);
}

client.on("ready", async () => {
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: slashcommands,
    });
  } catch (error) {
    console.error(error);
  }
});

//event-handler
readdirSync("./events").forEach(async (file) => {
  try {
    const event = await require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.run(...args));
    } else {
      client.on(event.name, (...args) => event.run(...args));
    }
  } catch (error) {
    console.error(`[ERROR] Error loading event ${file}: ${error.message}`);
    process.exit(1);
  }
});

//nodejs-events
process.on("unhandledRejection", (e) => {
  log(e);
});
process.on("uncaughtException", (e) => {
  log(e);
});
process.on("uncaughtExceptionMonitor", (e) => {
  log(e);
});

let uri = `mongodb+srv://${data.database.username}:${data.database.password}@${data.database.url}`;

//mongo-db
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.error(
        `[ERROR] An error occurred connecting to the database.\n${err}`
      );
      process.exit(1);
    }
    log(`[DATABASE] Connected to ${data.database.url} (MongoDB)`);
  }
);

client.on("ready", () => {
  try {
    log(
      `[INFO] Barold is up, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
    );
  } catch (error) {
    console.error(
      `[ERROR] Error when attempting to log Barold stats: ${error.message}`
    );
  }
});

client.on("guildCreate", (guild) => {
  log(
    `[GUILD] I have been added to: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
});

client.on("guildDelete", (guild) => {
  log(`[GUILD] I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client
  .login(data.token.discord)
  .then(() => {
    log(`[INFO] Logged in ${client.user.tag}.`);
  })
  .catch((err) => {
    console.error(`[ERROR] Can't login. \n${err}`);
  });
