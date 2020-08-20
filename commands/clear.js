const Discord = require('discord.js');
module.exports = {
    name : 'clear',
    execute(client, message, args){
    let amount = message.content.split(' ').slice(1)
    if(amount.length == 0)return message.channel.send('Silmek istediğiniz mesaj numarasını girin (max 99).')
    amount = parseInt(amount) + 1;
    if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.channel.send('Mesaj silmek için yeterli yetkin yok.')
    if(!message.guild.me.hasPermission('MANAGE_MESSAGES'))return message.channel.send("Bunu yapmak için yeterli yetkim yok.")
    if(isNaN(amount))return message.channel.send("Böyle bir numara yok.")
if(amount < 1 || amount >= 500)return message.channel.send('Bu kadar mesaj silemem. Maksimum aynı anda 99 mesaj silebilirim')
message.channel.bulkDelete(amount,true).catch(err =>{
    message.channel.send('Mesajı silerken bir hata oldu.')
})   
}
}

