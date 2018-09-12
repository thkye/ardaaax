const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";
const fs = require("fs");
client.login('NDg4NDgwNTAzMzY4OTA4ODEz.DnqEOA.7eqTjriLoNIN1uJh7rn2W7z5WrA');
client.on('ready', () => {
client.user.setGame('!sunucubilgi || !avatar || !ping', 'https://twitch.tv/zorobot0')
  console.log(`${client.user.tag} Olarak basariyla giris yaptiniz.`);
});
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
  if (msg.content === prefix + 'jitemhakkinda') {
    msg.reply('```JITEM aslen Jandarma İstihbarat ve Terörle mücadele anlamına gelmektedir ancak biz aslını yaşatmadığımız için böyle bir isim takınmaktan ziyade JITEM olarak anılmayı tercih eden bireyleriz.\nKlanımız en başında bir sunucu çetesi olarak bizzat Yesil tarafından 2016 yılının başlarında kurulmuş olup XecuKinG (Willy) tarafından yönetilmekte idi.\nKısa bir süre sonra sunucu çetesi olmaktan çıkıp klan haline geldiğimizde klan üyeleri içerisinde sağlam bir temizlik yapmış bulunup yaklaşık 6 7 üye olarak piyasada ismimizi sürdürmüştük.\nUzun süre sahalardan uzak kaldık. Oyun dahi oynamadık. Farklı mecralarda adımızı duyurup iyi bir ortam oluşturduk.\nFarklı farklı sunuculara geçiş yapsakta aradığımızı ve umduğumuzu Inferno da bulduk. Yepyeni bir yönetim ve yönetim anlayışı ile piyasaya adımızı bir nebze de olsa duyurduk.\nSadece DM alanında değil, sistemsel gelişim bakımından da, oyun içi araç uğraşları bakımından ve minigames bakımından da kendimizi sınıflandırdık.\nJITEM in kolları haline bürüdüğümüz birçok topluluk oluşturduk. Bizim sadece bir online oyundan ibaret dediğimiz bir dostluğumuz yok.\nAmacımız çok açık, geniş bir dotluk ortamı kurup hem oyun oynayıp hem sohbet etmektendir ki discord sunucumuz buna çok müsait.\nBizim amacımız DM alanında veya farklı alanlarda en iyisi olmak veya "zirvede" oturmak değil belli başlı bir ortam kurmak ve bunu da başardık diye düşünüyoruz.```');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'komutlar') {
    if (msg.channel.type == "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.');
    msg.author.sendEmbed(ozelmesajkontrol) }
    msg.reply('```/sunucubilgi - Sunucunu Detaylarını gösterir.\n/ping - Pinginizi Gösterir. \n/avatar - Avatarınızı gösterir. \n/rastgelegif - Rastgele Gif gönderir. \n/botbilgi - Botun bilgilerini gösterir. \nKomutlar listesini okuduğun için teşekkürler.```');
  }
});
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