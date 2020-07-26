const Discord = require('discord.js');
module.exports = {
    name : 'kick',
    execute(client, message, args){
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("You need to mention a member to kick")
        let reason;
        let arg = message.content.split(" ").slice(2)
        if(arg.length == 0){
            reason = "No reason specified"
        }else{
            reason = arg.join(' ')
        }
        if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send("You dont have the right permission")
        if(!message.guild.member(member).kickable)return message.channel.send("I cant kick that user")
    member.send(`You have been kicked from ${message.guild.name} Reason: ${reason}`).then(()=>{
        message.guild.member(member).kick()
    }).then(()=>{
        message.channel.send(`${member.user.tag} has been kicked`)
    })
    }
}