const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fundador")
    .setDescription("Exibe a homenagem ao Fundador Xaruto"),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#000000")
      .setTitle("🏴 FUNDADOR - XARUTO")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

__**FUNDADOR - XARUTO**__  
<@1402095058299129918>

*__Nosso fundador e atual presidente, Xaruto, ficará eternizado na história da FJV. O mesmo foi o responsável por comandar a torcida em diversos xbondes e pistas.__*

-# 📅 06/07/26 • Honrarias FJV
`)
      .setImage("https://cdn.discordapp.com/attachments/1521134713111052298/1523857189654237317/file_000000007390720e85b50d99a7711a5d.png?ex=6a578559&is=6a5633d9&hm=f1db048c8737e66fcdc079507faee6f58addfb493d86dd3f73dce7f5892feaea&")
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
