const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons');

  module.exports.config = {

  name: "activitysetup",
  aliases: ["as"],
  usage: "activitysetup",
  
                          };

module.exports.execute = async(client, message, args) => {
  try {
    if(message.author.id !== conf.owner) return;
    if(message.guild.id !== conf.server) return;
    let Button1 = new MessageButton()
    .setStyle("red") 
    .setLabel('🎉 Çekiliş Katılımcısı')
    .setID('cekilis'); 
  
  let Button2 = new MessageButton()
    .setStyle("blurple")
    .setLabel('🎉 Etkinlik Katılımcısı')
    .setID('etkinlik');
  
  message.channel.send(`Merhaba \`${message.guild.name}\` üyeleri, 
      
  Aşağıda bulunan butonlardan **Çekiliş Katılımcısı** alarak çekilişlere katılıp ***Netflix, Spotify, Nitro*** ve benzeri ödüllerin sahibi olabilirsiniz.
      
  Aşağıda bulunan butonlardan **Etkinlik Katılımcısı** alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden faydalanabilirsiniz.
    
  **NOT:** Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın!
  `, { buttons: [ Button1, Button2] });
} catch (err) {
  message.channel.send("KOMUTA HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}
};
