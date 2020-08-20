
const Discord = require('discord.js')
module.exports = {
    name: 'ping',
    execute(client, message, args){
        message.channel.send(`Server pingi budur ${client.ws.ping}ms`);
    }
}