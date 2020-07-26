const Discord = require('discord.js');
module.exports = {
    name : 'close',
    execute(client, message, args){
if(!message.channel.name.startsWith("ticket-"))return message.channel.send("This is not a valid ticket")
if(!message.member.hasPermission("MANAGE_CHANNELS"))return message.channel.send("You need MANAGE_CHANNELS permission to use thsi command")
message.channel.send("Are you sure you want to close this ticket? `yes`.If not it will automatticaly close within  1 minute").then((m)=>{
    message.channel.awaitMessages(response => response.content == "yes",{
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(()=>{
        message.channel.delete()
    }).catch(()=>{
        m.edit("Closing cancelled")
    })
})
    }
}