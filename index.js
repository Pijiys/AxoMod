const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('config');

const token = config.get('token');

console.log('token = '+token);


client.on('ready', () => {
    console.log('Bot is up and running!');
    console.log(`Logged in as ${client.user.username}`);
});
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.on('message', async message => {
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.substring(config.prefix.length).split(" ");
    const command = args.shift().toLowerCase()
    switch (command) {
        case "ping":
            client.commands.get('ping').execute(client, message, args);
            break;
        case "avatar":
            client.commands.get('avatar').execute(client, message, args);
            break;
        case "embed":
            client.commands.get('embed').execute(client, message, args);
            break;
        case "kick":
            client.commands.get('kick').execute(client, message, args);
            break;
        case "ban":
            client.commands.get('ban').execute(client, message, args);
            break;
        case "unban":
            client.commands.get('unban').execute(client, message, args);
            break;
        case "ticket":
            client.commands.get('ticket').execute(client, message, args);
            break;
        case "close":
            client.commands.get('close').execute(client, message, args);
            break;
        case "snipe":
            client.commands.get('snipe').execute(client, message, args);
            break;
        case "clear":
            client.commands.get('clear').execute(client, message, args);
            break;
        case "joke":
            client.commands.get('joke').execute(client, message, args);
            break;
        case "dm":
            client.commands.get('dm').execute(client, message, args);
            break;
    }
})
client.snipes = new Map();
client.on('messageDelete', function (message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})
client.login(config.token);
