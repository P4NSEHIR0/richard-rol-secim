const Discord = require("discord.js");

module.exports = async (menu) => {      
  menu.reply.think(true);

    if (menu.values[0] === 'iliskitemizle') {
        await menu.clicker.member.roles.remove(conf.roles.lgbt)
        await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
        await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
        menu.reply.edit("İsteğin sonucunda üzerindeki ilişki rolü alındı.")
}
if (menu.values[0] === 'lgbt') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.lgbt)) {
    await menu.clicker.member.roles.add(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.lgbt+"> rolü başarıyla verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.lgbt+"> rolü üzerinden alındı.")
  }
}
if (menu.values[0] === 'alone') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sevgilimyok)) {
    await menu.clicker.member.roles.add(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.lgbt+"> rolü başarıyla verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.sevgilimyok+"> rolü üzerinden alındı.")
  }
}
if (menu.values[0] === 'couple') {
  if(!menu.clicker.member.roles.cache.has(conf.roles.sevgilimvar)) {
    await menu.clicker.member.roles.add(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.sevgilimvar+"> rolü başarıyla verildi.")
  } else {
    await menu.clicker.member.roles.remove(conf.roles.sevgilimyok)
    await menu.clicker.member.roles.remove(conf.roles.sevgilimvar)
    await menu.clicker.member.roles.remove(conf.roles.lgbt)
    menu.reply.edit("İlişki seçimin sonucunda <@&"+conf.roles.sevgilimvar+"> rolü üzerinden alındı.")
  }
}
   }; 
module.exports.config = {
    name: "clickMenu"
  }
