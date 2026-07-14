require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
  REST,
  Routes,
  EmbedBuilder,
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", async () => {
  console.log(`Bot ligado como ${client.user.tag}`);

  const commands = [
    new SlashCommandBuilder()
      .setName("embed")
      .setDescription("Envia um comunicado")
      .addStringOption(option =>
        option
          .setName("titulo")
          .setDescription("Título")
          .setRequired(true)
      )
      .addStringOption(option =>
        option
          .setName("mensagem")
          .setDescription("Mensagem")
          .setRequired(true)
      ),
  ].map(command => command.toJSON());

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(
