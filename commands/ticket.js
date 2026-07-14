const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Envia o painel de tickets"),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#000000")
      .setTitle("⚫⚪ TICKET FJV ⚪⚫")
      .setDescription(`
━━━━━━━━━━━━━━━━━━━━━━

# **BEM-VINDO(A)!**

Abra um ticket para entrar em contato com nossa equipe.

**📂 Opções disponíveis**
> ⚪ Suporte
> ⚫ Dúvidas
> ⚪ Denúncias
> ⚫ Parcerias

━━━━━━━━━━━━━━━━━━━━━━

> **Clique no botão abaixo para abrir um ticket.**
`)
      .setFooter({
        text: "⚫⚪ Sistema de Tickets • FJV"
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });

  },
};
