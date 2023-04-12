module.exports = {
  name: "ready",
  once: true,
  run(client) {
    const { ActivityType } = require("discord.js");
    let activities = [`im bored`, `still bored`],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity({
          name: `${activities[i++ % activities.length]}`,
          type: ActivityType.Listening,
        }),
      22000
    );

  },
  
};
