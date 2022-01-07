const { Discord, MessageEmbed } = require("discord.js");
const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons");

  module.exports.config = {
  name: "colormenu",
  aliases: ["cm"]
};

module.exports.execute = async(client, message, args) => {
  try {
    if(message.author.id !== conf.owner) return;
    if(message.guild.id !== conf.server) return;
        const Kırmızı = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setDescription(`Kırmızı Renk Rolü Almak İçin Tıkla.`)
        .setValue('kirmizi');

        const Sarı = new MessageMenuOption()
        .setLabel('Sarı')
        .setDescription(`Sarı Renk Rolü Almak İçin Tıkla.`)
        .setValue('sari');

        const Mavi = new MessageMenuOption()
        .setLabel('Mavi')
        .setDescription(`Mavi Renk Rolü Almak İçin Tıkla.`)
        .setValue('mavi');

        const Mor = new MessageMenuOption()
        .setLabel('Mor')
        .setDescription(`Mor Renk Rolü Almak İçin Tıkla.`)
        .setValue('mor');

        const Pembe = new MessageMenuOption()
        .setLabel('Pembe')
        .setDescription(`Pembe Renk Rolü Almak İçin Tıkla.`)
        .setValue('pembe');

        const Temizle = new MessageMenuOption()
        .setLabel('Temizle')
        .setDescription(`Renk Seçimini Temizlemek İçin Tıkla.`)
        .setValue('renktemizle');

        const Color = new MessageMenu()
        .setID("renk")
        .setPlaceholder(`Renk Seçimini Yapmalısın.`)
        .addOption(Kırmızı)
        .addOption(Sarı)
        .addOption(Mavi)
        .addOption(Mor)
        .addOption(Pembe)
        .addOption(Temizle)

        const ColorMenu = new MessageActionRow()
        .addComponent(Color)

message.channel.send(`Renk rolü seçmek için aşağıdaki menüyü kullanabilirsin.`, {components: [ColorMenu]});
} catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}};
