const Discord = require('discord.js');

const cevaplar = [
    "Evet kesinlikle!",
    "Hayır Olamaz!",
    "Belki olabilir...",
    "Olabilir Şansını Dene ^-^",
    "Kürem biraz fazla ısındı sanırım bir daha tekrarlar mısın?",
    "İmkansız Bunun gerçekleşmesi.!"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Öncelikle sormak istediğin soruyu belirlemelisin. **İPUCU: Doğru Kullanımı**: -tahminet <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tahminet',
  description: 'Sorduğunuz soruya sihirli küreden cevap verir.',
  usage: 'tahminet <soru>'
};
