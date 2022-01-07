const Discord = require("discord.js");

module.exports = async (menu) => {      
  menu.reply.think(true);

    if (menu.values[0] === 'renktemizle') {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("İsteğin sonucunda üzerindeki renk rolü alındı.")
}
    if (menu.values[0] === 'pembe') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.pembe)) {
        await menu.clicker.member.roles.add(conf.roles.pembe)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.pembe+"> rolü başarıyla verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.pembe+"> rolü üzerinden alındı.")
      }
}
    if (menu.values[0] === 'mor') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.mor)) {
        await menu.clicker.member.roles.add(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.mor+"> rolü başarıyla verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.mor+"> rolü üzerinden alındı.")
      }
}
if (menu.values[0] === 'sari') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sari)) {
    await menu.clicker.member.roles.add(conf.roles.sari)
    await menu.clicker.member.roles.remove(conf.roles.kirmizi)
    await menu.clicker.member.roles.remove(conf.roles.mavi)
    await menu.clicker.member.roles.remove(conf.roles.mor)
    await menu.clicker.member.roles.remove(conf.roles.pembe)
    menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.sari+"> rolü başarıyla verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.kirmizi)
    await menu.clicker.member.roles.remove(conf.roles.sari)
    await menu.clicker.member.roles.remove(conf.roles.mavi)
    await menu.clicker.member.roles.remove(conf.roles.mor)
    await menu.clicker.member.roles.remove(conf.roles.pembe)
    menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.sari+"> rolü üzerinden alındı.")
  }
}
    if (menu.values[0] === 'mavi') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.mavi)) {
        await menu.clicker.member.roles.add(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.mavi+"> rolü başarıyla verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.mavi+"> rolü üzerinden alındı.")
      }
}

    if (menu.values[0] === 'kirmizi') {
      if(!menu.clicker.member.roles.cache.has(conf.roles.kirmizi)) {
        await menu.clicker.member.roles.add(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.kirmizi+"> rolü başarıyla verildi.")
      } else {
        await menu.clicker.member.roles.remove(conf.roles.kirmizi)
        await menu.clicker.member.roles.remove(conf.roles.sari)
        await menu.clicker.member.roles.remove(conf.roles.mavi)
        await menu.clicker.member.roles.remove(conf.roles.mor)
        await menu.clicker.member.roles.remove(conf.roles.pembe)
        menu.reply.edit("Renk seçimin sonucunda <@&"+conf.roles.kirmizi+"> rolü üzerinden alındı.")
      }
}
   }; 
module.exports.config = {
    name: "clickMenu"
  }