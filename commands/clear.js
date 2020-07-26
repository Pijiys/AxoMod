const Discord = require('discord.js');
module.exports = {
    name : 'clear',
    execute(client, message, args){
    let amount = message.content.split(' ').slice(1)
    if(amount.length == 0)return message.channel.send('Enter number of messages to delete')
    amount = parseInt(amount) + 1;
    if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.channel.send('You need MANAGE_MESSAGES permission to perform this command')
    if(!message.guild.me.hasPermission('MANAGE_MESSAGES'))return message.channel.send("I dont have the right permission")
    if(isNaN(amount))return message.channel.send("That is not a valid number of messages to delete")
if(amount < 1 || amount >= 500)return message.channel.send('The inputted number of messages cannot be deleted')
message.channel.bulkDelete(amount,true).catch(err =>{
    message.channel.send('Err clearing messaged')
})   
}
}

