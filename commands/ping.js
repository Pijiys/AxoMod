
const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    execute(client, message, args){
        message.channel.send(`Ping is ${client.ws.ping}ms`);
    }
}