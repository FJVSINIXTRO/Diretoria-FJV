const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Envia o painel de honrarias da FJV"),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#8B0000")
      .setTitle("🏴 FUNDADOR - XARUTO")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

__**FUNDADOR - XARUTO**__  
<@1402095058299129918>

Nosso fundador e atual presidente, **Xaruto**, ficará eternizado na história da FJV. O mesmo foi o responsável por comandar a torcida em diversos xbondes e pistas.

-# 📅 06/07/26 • Honrarias FJV
`)
      .setFooter({
        text: "Força Jovem Vasco • Diretoria"
      })
      .setTimestamp();

    await interaction.reply({
      content: "@everyone",
      embeds: [embed]
    });

  },
};
