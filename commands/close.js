const Discord = require('discord.js');
module.exports = {
    name : 'close',
    execute(client, message, args){
if(!message.channel.name.startsWith("ticket-"))return message.channel.send("Böyle bit dava yok.")
if(!message.member.hasPermission("MANAGE_CHANNELS"))return message.channel.send("Bu komutu gerçekleştirmek için Kanalları Editle yetkisi lazım.")
message.channel.send("Bu davayı kapatmak istediğine eminmisin. Kapatmak için **evet** yazın. Eğer evet yazmazsanız 1 dakika içinde kapanacaktır.").then((m)=>{
    message.channel.awaitMessages(response => response.content == "evet",{
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(()=>{
        message.channel.delete()
    }).catch(()=>{
        m.edit("Kapanma Bitti.")
    })
})
    }
}