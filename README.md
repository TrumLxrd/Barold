# BaroldSlash

A Discord bot built with Discord.js that supports both traditional prefix commands and modern slash commands. BaroldSlash provides utility commands and entertainment features for Discord servers.

## ⚠️ Maintenance Status

**This project is currently archived/unmaintained.** The last major updates were made in February 2024. While the code remains available for reference and learning purposes, active development and support are not provided.

## 📋 Features

- **Dual Command System**: Supports both traditional prefix commands and Discord slash commands
- **Meme Generation**: Generate random memes with customizable text
- **Tweet Generation**: Create fake tweet images with custom content
- **Ping Command**: Check bot latency and response time
- **Code Evaluation**: Developer-only eval command for debugging (restricted access)
- **Event-Driven Architecture**: Modular event handlers for interactions and messages
- **Heroku Ready**: Includes Procfile for easy deployment

## 🚀 Installation

### Prerequisites

- Node.js (v16.9.0 or higher recommended)
- npm or yarn package manager
- A Discord Bot Token (from [Discord Developer Portal](https://discord.com/developers/applications))
- MongoDB connection string (for database features)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/TrumLxrd/BaroldSlash.git
   cd BaroldSlash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   TOKEN=your_discord_bot_token
   MONGO=your_mongodb_connection_string
   PREFIX=your_desired_prefix
   OWNERID=your_discord_user_id
   ```

4. **Run the bot**
   ```bash
   npm start
   ```
   
   Or for development:
   ```bash
   node src/index.js
   ```

## 📦 Dependencies

Key dependencies include:
- `discord.js` - Discord API wrapper
- `mongoose` - MongoDB object modeling
- `dotenv` - Environment variable management
- `canvas` - Image manipulation for meme/tweet generation

(See `package.json` for complete dependency list)

## 💻 Usage

### Slash Commands

Slash commands are the modern Discord command interface. Use them by typing `/` in any channel where the bot has permissions:

- `/ping` - Check the bot's latency and API response time
- `/meme [top text] [bottom text]` - Generate a random meme with custom text
- `/tweet [username] [content]` - Create a fake tweet image

### Traditional Prefix Commands

Prefix commands use your configured prefix (default in code examples below shows typical usage):

- `!ping` - Check the bot's latency and API response time
- `!meme [top text] [bottom text]` - Generate a random meme with custom text
- `!tweet [username] [content]` - Create a fake tweet image
- `!eval [code]` - **Owner only** - Evaluate JavaScript code (restricted to bot owner)

### Command Examples

```
/ping
/meme When you finish coding It works on my machine
/tweet elonmusk Just bought another company

!ping
!meme Success kid Deployed to production No errors
!tweet BaroldBot Hello from BaroldSlash!
```

## 🗂️ Project Structure

```
BaroldSlash/
├── src/
│   ├── commands/
│   │   ├── normal/          # Traditional prefix commands
│   │   │   ├── eval.js      # Code evaluation (owner only)
│   │   │   ├── meme.js      # Meme generation
│   │   │   ├── ping.js      # Latency check
│   │   │   └── tweet.js     # Tweet generation
│   │   └── slash/           # Slash commands
│   │       ├── meme.js      # Meme generation
│   │       ├── ping.js      # Latency check
│   │       └── tweet.js     # Tweet generation
│   ├── events/              # Event handlers
│   │   ├── interactionCreate.js  # Slash command handler
│   │   ├── messageCreate.js      # Message/prefix command handler
│   │   └── ready.js              # Bot startup event
│   ├── models/              # Database models
│   ├── utils/               # Utility files
│   │   ├── codeGenerator.js # Code generation utilities
│   │   ├── data.json        # Meme templates and data
│   │   └── misc.json        # Miscellaneous configuration
│   └── index.js             # Main bot entry point
├── .gitignore
├── LICENSE                  # MIT License
├── package.json
└── Procfile                 # Heroku deployment configuration
```

## 🔧 Configuration

### Environment Variables

- `TOKEN` - Your Discord bot token (required)
- `MONGO` - MongoDB connection string (required for database features)
- `PREFIX` - Command prefix for traditional commands (e.g., `!`, `?`, `.`)
- `OWNERID` - Your Discord user ID for owner-only commands

### Heroku Deployment

The repository includes a `Procfile` for easy deployment to Heroku:

```
worker: node src/index.js
```

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Push to Heroku:
   ```bash
   git push heroku master
   ```
4. Scale the worker:
   ```bash
   heroku ps:scale worker=1
   ```

## 📝 Main Commands Details

### Ping Command
Checks the bot's latency and responsiveness. Useful for monitoring bot health and connection quality.

### Meme Command
Generates memes using predefined templates from the `data.json` file. Users can specify top and bottom text to customize the meme. The bot uses Canvas to render text on random meme templates.

### Tweet Command
Creates realistic-looking fake tweet images. Users specify a username and tweet content, and the bot generates an image resembling a Twitter/X post.

### Eval Command (Owner Only)
A powerful developer command that allows the bot owner to execute arbitrary JavaScript code. This is restricted to the owner ID specified in the environment variables for security reasons.

## 🛡️ Security Notes

- The `eval` command is restricted to the bot owner only (checked via `OWNERID` environment variable)
- Never share your bot token or environment variables
- The `.env` file is gitignored to prevent accidental token exposure
- Review and understand any code before running eval commands

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

As this project is no longer actively maintained, pull requests may not be reviewed. However, you are welcome to fork the repository and make your own modifications.

## 👤 Author

**TrumLxrd**
- GitHub: [@TrumLxrd](https://github.com/TrumLxrd)

## 🔗 Useful Links

- [Discord.js Guide](https://discordjs.guide/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord.js Documentation](https://discord.js.org/)

## 📌 Notes

- This bot was created as a learning project and demonstration of Discord.js capabilities
- The bot uses Discord.js v13+ features including slash commands
- Image generation features require the Canvas library and its dependencies
- Some features may require additional setup or permissions in your Discord server

---

**Last Updated:** October 2025  
**Status:** Archived/Unmaintained  
**Discord.js Version:** v13+
