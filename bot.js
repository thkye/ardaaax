const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";
const fs = require("fs");
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
client.user.setGame('!sunucubilgi || !avatar || !ping', 'https://twitch.tv/zorobot0')
  console.log(`${client.user.tag} Olarak basariyla giris yaptiniz.`);
client.on('message', msg => {
  if (msg.content === 'Selamun aleyküm') {
    msg.reply('Aleyküm selam hoş geldin.');
  }
});
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm selam hoş geldin.');
  }
});
client.on('message', msg => {
  if (msg.content === 'İyi geceler') {
    msg.reply('Herkese iyi geceler dilerim. Good night dudes. <3 :)');
  }
});
client.on('message', msg => {
  if (msg.content === 'Merhaba') {
    msg.reply('Merhaba nasılsın');
  }
});
client.on('message', msg => {
  if (msg.content === 'İyiyim sen') {
    msg.reply('İyiyim sağol.');
  }
});
client.on('message', msg => {
  if (msg.content === 'iyi') {
    msg.reply('Sevindim.');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'JITEM') {
    msg.reply('`Yeşil tarafında kurulan bir klandır, Willy ve Cerberus ile yönetilmektedir.\n Şuan İnferno Freeroam serverinde oynamaktadırlar. Klanda toplam 19 kişi bulunmaktadır.\n Jiteme sizde katılmak isterseniz` https://www.forum.infernotr.com `adresinizi ziyaret edebilirsiniz.\n İnferno Freeroam Discord Sunucusuna katılmayı unutmayın!` https://www.infernotr.com/dc');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'komutlar') {
    if (msg.channel.type == "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.');
    msg.author.sendEmbed(ozelmesajkontrol) }
    if (msg.channel.type !== "dm") {
    msg.reply('```/sunucubilgi - Sunucunu Detaylarını gösterir.\n/ping - Pinginizi Gösterir. \n/avatar - Avatarınızı gösterir. \n/rastgelegif - Rastgele Gif gönderir. \n/botbilgi - Botun bilgilerini gösterir. \nKomutlar listesini okuduğun için teşekkürler. Orange```');
  }
}});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ping') {
    if (msg.channel.type == "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.');
    msg.author.sendEmbed(ozelmesajkontrol) }
    if (msg.channel.type !== "dm") {
      const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('Ping:', '**' + client.ping + '**')
    return msg.channel.sendEmbed(pingozel);
    }
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    if  (msg.channel.type === 'dm') {
      const ozelmesajuyarii = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyarii); }
    if (msg.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Ana kanal:', msg.guild.defaultChannel)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt)
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }
});
