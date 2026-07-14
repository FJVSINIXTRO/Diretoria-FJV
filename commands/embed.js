const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Envia um embed"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("FUNDADOR XARUTO")
      .setDescription("# FUNDADOR - XARUTO - <@1402095058299129918> 

**__Nosso Fundador é atual presidente xaruto__**, *__que ficará eternizado na história da FJV o mesmo foi o responsável por comandar a torcida em diversos xbondes e pistas.__*

-# 06/07/26 Honrarias FJV.

@everyone.")
      .setColor("Red");

    await interaction.reply({
      embeds: [embed]
    });
  }
};
