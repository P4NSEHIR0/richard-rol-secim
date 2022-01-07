const { Discord, MessageEmbed } = require("discord.js");
const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons");

  module.exports.config = {

  name: "menusetup",
  aliases: ["ms"],
  usage: "menusetup",
  
                          };

module.exports.execute = async(client, message, args) => {
  try {
    if(message.author.id !== conf.owner) return;
    if(message.guild.id !== conf.server) return;

        const friends = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setDescription(`Sevgilim Var Rolünü Almak İçin Tıkla.`)
        .setValue('couple');
   
        const nofriends = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setDescription(`Sevgilim Yok Rolünü Almak İçin Tıkla.`)
        .setValue('alone');

        const LGBT = new MessageMenuOption()
        .setLabel('LGBT')
        .setDescription(`LGBT Rolünü Almak İçin Tıkla.`)
        .setValue('lgbt');

        const Temizle1 = new MessageMenuOption()
        .setLabel('Temizle')
        .setDescription(`İlişki Seçimini Temizlemek İçin Tıkla.`)
        .setValue('iliskitemizle');
  
        const Iliski = new MessageMenu()
        .setID("relation")
        .setPlaceholder("İlişki Seçimini Yapmalısın.")
        .addOption(friends)
        .addOption(nofriends)
        .addOption(LGBT)
        .addOption(Temizle1)
    
/////////////////////////////////////////////////

        const Kırmızı = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setDescription(`Kırmızı Rolünü Almak İçin Tıkla.`)
        .setValue('kirmizi');

        const Sarı = new MessageMenuOption()
        .setLabel('Sarı')
        .setDescription(`Sarı Rolünü Almak İçin Tıkla.`)
        .setValue('sari');

        const Mavi = new MessageMenuOption()
        .setLabel('Mavi')
        .setDescription(`Mavi Rolünü Almak İçin Tıkla.`)
        .setValue('mavi');

        const Mor = new MessageMenuOption()
        .setLabel('Mor')
        .setDescription(`Mor Rolünü Almak İçin Tıkla.`)
        .setValue('mor');

        const Pembe = new MessageMenuOption()
        .setLabel('Pembe')
        .setDescription(`Pembe Rolünü Almak İçin Tıkla.`)
        .setValue('pembe');

        const Temizle2 = new MessageMenuOption()
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
        .addOption(Temizle2)
    
/////////////////////////////////////////////////

        const İkizler = new MessageMenuOption()
        .setLabel('İkizler')
        .setDescription(`İkizler Rolünü Almak İçin Tıkla.`)
        .setValue('ikizler');
 
        const Yengeç = new MessageMenuOption()
        .setLabel('Yengeç')
        .setDescription(`Yengeç Rolünü Almak İçin Tıkla.`)
        .setValue('yengeç');
 
        const Boğa = new MessageMenuOption()
        .setLabel('Boğa')
        .setDescription(`Boğa Rolünü Almak İçin Tıkla.`)
        .setValue('boğa');
 
        const Koç = new MessageMenuOption()
        .setLabel('Koç')
        .setDescription(`Koç Rolünü Almak İçin Tıkla.`)
        .setValue('koç');
 
        const Akrep = new MessageMenuOption()
        .setLabel('Akrep')
        .setDescription(`Akrep Rolünü Almak İçin Tıkla.`)
        .setValue('akrep');
 
        const Terazi = new MessageMenuOption()
        .setLabel('Terazi')
        .setDescription(`Terazi Rolünü Almak İçin Tıkla.`)
        .setValue('terazi');
 
        const Başak = new MessageMenuOption()
        .setLabel('Başak')
        .setDescription(`Başak Rolünü Almak İçin Tıkla.`)
        .setValue('başak');
 
        const Aslan = new MessageMenuOption()
        .setLabel('Aslan')
        .setDescription(`Aslan Rolünü Almak İçin Tıkla.`)
        .setValue('aslan');
 
        const Balık = new MessageMenuOption()
        .setLabel('Balık')
        .setDescription(`Balık Rolünü Almak İçin Tıkla.`)
        .setValue('balık');
 
        const Kova = new MessageMenuOption()
        .setLabel('Kova')
        .setDescription(`Kova Rolünü Almak İçin Tıkla.`)
        .setValue('kova');
 
        const Oğlak = new MessageMenuOption()
        .setLabel('Oğlak')
        .setDescription(`Oğlak Rolünü Almak İçin Tıkla.`)
        .setValue('oğlak');
 
        const Yay = new MessageMenuOption()
        .setLabel('Yay')
        .setDescription(`Yay Rolünü Almak İçin Tıkla.`)
        .setValue('yay');

        const Temizle3 = new MessageMenuOption()
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
        .addOption(Temizle3)

  const BurcMenu = new MessageActionRow()
  .addComponent(Burc)

  const IliskiMenu = new MessageActionRow()
  .addComponent(Iliski)

  const ColorMenu = new MessageActionRow()
  .addComponent(Color)

message.channel.send(`İstediğin rolleri almak için aşağıdaki menüyü kullanabilirsin.`, {components: [ColorMenu,IliskiMenu,BurcMenu]});
} catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}};
