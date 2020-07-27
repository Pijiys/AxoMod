
const Discord = require('discord.js')
module.exports = {
    name: 'ticket',
    execute(client, message, args){
        
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("You have already opened a ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
message.channel.send("I have created a ticket for you").then(message.reply('We\'ll message you shortly give us just 5 minutes.'));
chan.send(`${message.author} needs help.`).then((m)=>{
    
})
})   
 }
    }
}