const { Discord, MessageEmbed } = require("discord.js");
const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons");

  module.exports.config = {
  name: "horoscopemenu",
  aliases: ["hs"]
};

module.exports.execute = async(client, message, args) => {
  try {
    if(message.author.id !== conf.owner) return;
    if(message.guild.id !== conf.server) return;
    
       const İkizler = new MessageMenuOption()
       .setLabel('İkizler')
       .setDescription(`İkizler Burç Rolü Almak İçin Tıkla.`)
       .setValue('ikizler');

       const Yengeç = new MessageMenuOption()
       .setLabel('Yengeç')
       .setDescription(`Yengeç Burç Rolü Almak İçin Tıkla.`)
       .setValue('yengeç');

       const Boğa = new MessageMenuOption()
       .setLabel('Boğa')
       .setDescription(`Boğa Burç Rolü Almak İçin Tıkla.`)
       .setValue('boğa');

       const Koç = new MessageMenuOption()
       .setLabel('Koç')
       .setDescription(`Koç Burç Rolü Almak İçin Tıkla.`)
       .setValue('koç');

       const Akrep = new MessageMenuOption()
       .setLabel('Akrep')
       .setDescription(`Akrep Burç Rolü Almak İçin Tıkla.`)
       .setValue('akrep');

       const Terazi = new MessageMenuOption()
       .setLabel('Terazi')
       .setDescription(`Terazi Burç Rolü Almak İçin Tıkla.`)
       .setValue('terazi');

       const Başak = new MessageMenuOption()
       .setLabel('Başak')
       .setDescription(`Başak Burç Rolü Almak İçin Tıkla.`)
       .setValue('başak');

       const Aslan = new MessageMenuOption()
       .setLabel('Aslan')
       .setDescription(`Aslan Burç Rolü Almak İçin Tıkla.`)
       .setValue('aslan');

       const Balık = new MessageMenuOption()
       .setLabel('Balık')
       .setDescription(`Balık Burç Rolü Almak İçin Tıkla.`)
       .setValue('balık');

       const Kova = new MessageMenuOption()
       .setLabel('Kova')
       .setDescription(`Kova Burç Rolü Almak İçin Tıkla.`)
       .setValue('kova');

       const Oğlak = new MessageMenuOption()
       .setLabel('Oğlak')
       .setDescription(`Oğlak Burç Rolü Almak İçin Tıkla.`)
       .setValue('oğlak');

       const Yay = new MessageMenuOption()
       .setLabel('Yay')
       .setDescription(`Yay Burç Rolü Almak İçin Tıkla.`)
       .setValue('yay');

       const Temizle = new MessageMenuOption()
       .setLabel('Temizle')
       .setDescription(`Burç Seçimini Temizlemek İçin Tıkla.`)
       .setValue('burctemizle');

       const Burc = new MessageMenu()
       .setID("burç")
       .setPlaceholder(`Burç Seçimini Yapmalısın.`)
       .addOption(İkizler)
       .addOption(Yengeç)
       .addOption(Boğa)
       .addOption(Koç)
       .addOption(Akrep)
       .addOption(Terazi)
       .addOption(Başak)
       .addOption(Aslan)
       .addOption(Balık)
       .addOption(Kova)
       .addOption(Oğlak)
       .addOption(Yay)
       .addOption(Temizle)

        const BurcMenu = new MessageActionRow()
        .addComponent(Burc)

message.channel.send(`Burç rolünü seçmek için aşağıdaki menüyü kullanabilirsin.`, {components: [BurcMenu]});
} catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}};
