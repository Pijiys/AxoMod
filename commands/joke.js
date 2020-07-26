const Discord = require('discord.js')
module.exports = {
    name: 'joke',
    execute(client, message, args) {
        var customDiscordJokes = require('custom-discord-jokes');

        customDiscordJokes.getRandomDadJoke (function(joke) {
            message.channel.send(joke)
        });
    }
}