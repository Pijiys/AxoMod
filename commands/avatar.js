const Discord = require('discord.js');
module.exports = {
    name : 'avatar',
    execute(client, message, args){
        let member = message.mentions.users.first() || message.author;
        message.channel.send( new Discord.MessageEmbed() .setColor("RANDOM") .setImage(member.displayAvatarURL()))
    }
}