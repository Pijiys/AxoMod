const Discord = require('discord.js');
module.exports = {
    name : 'ban',
    execute(client, message, args){
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Banlamak istediğin kişiyi etiketlemen lazım!")
        let reason;
        let arg = message.content.split(" ").slice(2)
        if(arg.length == 0){
            reason = "Banlanmayı hakettiricek birşey yaptı demek ki. 🔨"
        }else{
            reason = arg.join(' ')
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("Yeterli Yetkin Yok!")
        if(!message.guild.member(member).bannable)return message.channel.send("Bu kişiyi banlayamam!")
   
        message.guild.member(member).ban().then(()=>{
        message.channel.send(`${member.user.tag} banlandı`)
    })
    }
}