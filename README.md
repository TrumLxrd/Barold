
# Barold

![Barold Bot](https://github.com/TrumLxrd/BaroldSlash/blob/c5c36e586135449c07cf8eda1f370469d54616c8/R.jpg =150x150)

A versatile Discord bot built with Discord.js that supports both **traditional prefix commands** and **modern slash commands**. Barold offers utility and entertainment features to enhance your Discord server experience.

---

## ⚠️ Maintenance Status

**This project is currently archived and unmaintained.**  
The last major updates were in **February 2024**. The code remains available for study and reference but no active development or support will be provided.

---

## 📋 Features

- **Dual Command System**  
  Supports both **prefix commands** and **slash commands** for flexibility.

- **Event-Driven Architecture**  
  Modular event handlers for managing interactions and messages smoothly.

- **Heroku Ready**  
  Comes with a `Procfile` for seamless deployment on Heroku.

- **Utility & Entertainment**  
  Commands include latency checks, meme generation, and fake tweet creation.

---

## 🚀 Installation

### Prerequisites

- Node.js (v16.9.0 or higher recommended)  
- npm or yarn package manager  
- Discord Bot Token (from [Discord Developer Portal](https://discord.com/developers/applications))  
- MongoDB connection string (required for database features)

### Setup Steps

1. **Clone the repository**

   ```
   git clone https://github.com/TrumLxrd/Barold.git
   cd Barold
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```
   TOKEN=your_discord_bot_token
   MONGO=your_mongodb_connection_string
   PREFIX=your_desired_prefix
   OWNERID=your_discord_user_id
   ```

4. **Run the bot**

   ```
   npm start
   ```

   Or for development mode:

   ```
   node src/index.js
   ```

---

## 📦 Dependencies

Key dependencies include:

- `discord.js` — Official Discord API wrapper  
- `mongoose` — MongoDB ORM for database interactions  

(Full list in `package.json`)

---

## 💻 Usage

### Slash Commands

Use slash commands by typing `/` in your Discord chat:

| Command             | Description                                | Example                                      |
|---------------------|--------------------------------------------|----------------------------------------------|
| `/ping`             | Check bot latency and API responsiveness   | `/ping`                                      |
| `/meme [top] [bottom]` | Generate a random meme with custom text     | `/meme When you finish coding It works on my machine` |
| `/tweet [username] [content]` | Create a fake tweet image                  | `/tweet elonmusk Just bought another company` |

### Traditional Prefix Commands

Prefix commands use your chosen prefix (default prefix example: `!`):

| Command               | Description                                 | Example                                         |
|-----------------------|---------------------------------------------|-------------------------------------------------|
| `!ping`               | Check bot latency and API responsiveness    | `!ping`                                         |
| `!meme [top] [bottom]`   | Generate a random meme with custom text      | `!meme Success kid Deployed to production No errors` |
| `!tweet [username] [content]` | Create a fake tweet image                     | `!tweet BaroldBot Hello from Barold!`           |
| `!eval [code]` (Owner only) | Evaluate JavaScript code (restricted)          | `!eval 2 + 2`                                   |

---

## 🗂️ Project Structure

```
BaroldSlash/
├── src/
│   ├── commands/
│   │   ├── normal/           # Prefix commands
│   │   └── slash/            # Slash commands
│   ├── events/               # Event handlers
│   ├── models/               # Database models
│   ├── utils/                # Utility scripts and data
│   └── index.js              # Bot entry point
├── .gitignore
├── LICENSE                   # MIT License
├── package.json
└── Procfile                  # Heroku deployment config
```

---

## 🔧 Configuration

### Environment Variables

- `TOKEN` — Discord bot token (required)  
- `MONGO` — MongoDB connection string (required for database)  
- `PREFIX` — Command prefix for traditional commands (e.g., `!`)  
- `OWNERID` — Discord user ID of the bot owner (for owner-only commands)  

---

## 🚀 Heroku Deployment

The included `Procfile` enables deploying to Heroku easily:

```
worker: node src/index.js
```

Steps:

1. Create a Heroku app.  
2. Add environment variables via the Heroku dashboard.  
3. Push your code to Heroku:  
   ```
   git push heroku master
   ```  
4. Scale the worker:  
   ```
   heroku ps:scale worker=1
   ```

---

## 🛡️ Security Notes

- The `eval` command is restricted to the bot owner only (verified via `OWNERID`).  
- Keep your bot token and environment variables private; do not share.  
- `.env` is gitignored to avoid token leaks.  
- Always review code you run in `eval` for safety.

---

## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for full details.

---

## 🤝 Contributing

This project is archived and unmaintained.  
Pull requests may not be reviewed, but feel free to fork and modify freely.

---

## 👤 Author

**TrumLxrd**  
- GitHub: [@TrumLxrd](https://github.com/TrumLxrd)

---

## 🔗 Useful Links

- [Discord.js Guide](https://discordjs.guide)  
- [Discord Developer Portal](https://discord.com/developers/applications)  
- [Discord.js Documentation](https://discord.js.org/#/docs)  

---

### Notes

- Built as a learning project showcasing Discord.js v13+ capabilities including slash commands.  
- Image generation features require Canvas library and setup.  
- Additional permissions and setup may be needed in your Discord server.

---
```

This markdown uses the GitHub shortcut syntax `=150x150` after the image URL to scale the displayed image smaller while keeping the rest of the formatting intact, ideal for an easy-to-copy README file. If you want the image rendered at another size, just replace the dimensions accordingly.
