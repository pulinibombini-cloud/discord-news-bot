const { Client, GatewayIntentBits, Partials } = require("discord.js");
const keepAlive = require("./server.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User],
});

client.once("ready", () => {
  console.log(`✅ Bot online come ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.on("error", (err) => console.error("Discord error:", err));
process.on("unhandledRejection", (err) => console.error("Unhandled:", err));

keepAlive();

client.login(process.env.DISCORD_TOKEN);
