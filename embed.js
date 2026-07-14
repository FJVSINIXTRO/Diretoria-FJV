const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Envia um embed"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Título")
      .setDescription("Essa é a descrição do embed.")
      .setColor("Red");

    await interaction.reply({
      embeds: [embed]
    });
  }
};
