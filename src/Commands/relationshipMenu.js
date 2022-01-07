const { Discord, MessageEmbed } = require("discord.js");
const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons");

  module.exports.config = {
  name: "relationshipmenu",
  aliases: ["rs"]
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

        const Temizle = new MessageMenuOption()
        .setLabel('Temizle')
        .setDescription(`İlişki Seçimini Temizlemek İçin Tıkla.`)
        .setValue('iliskitemizle');
      
        const Iliski = new MessageMenu()
        .setID("relation")
        .setPlaceholder("İlişki Seçimini Yapmalısın.")
        .addOption(friends)
        .addOption(nofriends)
        .addOption(LGBT)
        .addOption(Temizle)

        const IliskiSecim = new MessageActionRow()
        .addComponent(Iliski)

message.channel.send(`İlişki rolünü seçmek için aşağıdaki menüyü kullanabilirsin.`, {components: [IliskiSecim]});
} catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}};
