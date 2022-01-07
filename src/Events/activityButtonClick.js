const Discord = require("discord.js");

module.exports = async (button) => {
    if (button.id === 'cekilis') {
      await button.reply.think(true);
      if(!button.clicker.member.roles.cache.has(conf.roles.cekilis)) {
        await button.clicker.member.roles.add(conf.roles.cekilis)
        await button.reply.edit("Buton seçimin sonucunda <@&"+conf.roles.cekilis+"> rolü başarıyla verildi.")
      } else {
        await button.clicker.member.roles.remove(conf.roles.cekilis)
        await button.reply.edit("Buton seçimin sonucunda <@&"+conf.roles.cekilis+"> rolü üzerinden alındı.")
      }
}
    if (button.id === 'etkinlik') {
      await button.reply.think(true);
      if(!button.clicker.member.roles.cache.has(conf.roles.etkinlik)) {
        await button.clicker.member.roles.add(conf.roles.etkinlik)
        await button.reply.edit("Buton seçimin sonucunda <@&"+conf.roles.etkinlik+"> rolü başarıyla verildi.")
      } else {
        await button.clicker.member.roles.remove(conf.roles.etkinlik)
        await button.reply.edit("Buton seçimin sonucunda <@&"+conf.roles.etkinlik+"> rolü üzerinden alındı.")
      }
}
   }; 
module.exports.config = {
    name: "clickButton"
  }