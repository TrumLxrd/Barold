
<p align="center">
  <img src="https://github.com/TrumLxrd/BaroldSlash/blob/c5c36e586135449c07cf8eda1f370469d54616c8/R.jpg" alt="Barold Bot" width="150" height="150" />
</p>

# ⚙️ Barold — Versatile Discord Bot with Prefix & Slash Commands

![Maintenance](https://img.shields.io/badge/Maintained-No-blue)
![Status](https://img.shields.io/badge/Status-Archived-red?style=flat)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

---

## 📝 Overview

**Barold** is a feature-rich Discord bot built with Discord.js that supports both traditional prefix commands and modern slash commands. Designed for utility and entertainment, Barold enhances your server's experience with commands for latency checks, memes, fake tweets, and more.

---

## ⚠️ Maintenance Status

**This project is now archived and unmaintained.**  
The last significant updates were in **February 2024**. The code is provided for educational and reference purposes but no ongoing support or development is planned.

---

## 🛠️ Features

- Dual Command System — Supports both prefix commands and slash commands.
- Modular Event Handlers — Easy to extend and manage interactions.
- Heroku Compatibility — Comes with `Procfile` for deployment.
- Utility & Entertainment Commands — Latency, memes, fake tweets, and more.

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16.9.0+ recommended)
- npm or yarn
- Discord Bot Token (from [Discord Developer Portal](https://discord.com/developers/applications))
- MongoDB connection string (for database features)

### Setup steps
1. Clone the repository:

```
git clone https://github.com/TrumLxrd/Barold.git
cd Barold
```

2. Install dependencies:

```
npm install
```

3. Configure environment variables: Create a `.env` file:

```
TOKEN=your_discord_bot_token
MONGO=your_mongodb_connection_string
PREFIX=!
OWNERID=your_discord_user_id
```

4. Run the bot:

```
npm start
```

or in development:

```
node src/index.js
```

---

## 🗂️ Structure Overview

```
BaroldSlash/
├── src/
│   ├── commands/         # Prefix & slash commands
│   ├── events/           # Event handlers
│   ├── models/           # Database schemas
│   └── utils/            # Utility scripts
├── .env                    # Environment variables (ignored in git)
├── .gitignore
├── LICENSE                 # MIT License
├── package.json
└── Procfile                # Heroku deployment
```

---

## 🔧 Configuration

- `TOKEN`: Bot token (required)  
- `MONGO`: MongoDB connection string (required)  
- `PREFIX`: Command prefix (default: `!`)  
- `OWNERID`: Your Discord User ID (for owner-only commands)

---

## 🚀 Deployment on Heroku

The included `Procfile` allows easy deployment:

```
git push heroku main
heroku ps:scale worker=1
```

Configure environment variables via Heroku Dashboard.

---

## 🛡️ Security & Usage Notes

- `eval` command is owner-only and **restricted**.  
- Never share your bot token. Keep your `.env` secure.  
- This project is **archived**; no bug fixes or new features will be added.  
- For safety, review code before deploying or running sensitive commands.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Author & Acknowledgements

- **Author:** TrumLxrd – [GitHub](https://github.com/TrumLxrd)  
- Special thanks to contributors and testers, including **Cojored, Loze, and thebeast1089**.

---

## 🔗 Useful Links

- [Discord.js Documentation](https://discord.js.org/#/docs)  
- [Discord Developer Portal](https://discord.com/developers/applications)  
- [Discord.js Guide](https://discordjs.guide)  

---

## 🌟 Support & Reviews on Top.gg

[Check Barold on Top.gg](https://top.gg/bot/769998530445312010?s=09e612a2d9b17)

<p align="center">
  <a href="https://top.gg/bot/769998530445312010">
    <img src="https://top.gg/api/widget/769998530445312010.svg" alt="Barold Top.gg widget" />
  </a>
</p>

---

<p align="center">💻 Crafted with ❤️ by trumy</p>
