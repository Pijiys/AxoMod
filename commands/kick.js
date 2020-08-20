const Discord = require('discord.js');
module.exports = {
    name : 'kick',
    execute(client, message, args){
        if (!message.guild) return;

        // If the message content starts with "!kick"
        if (message.content.startsWith('dogge!kick')) {
          // Assuming we mention someone in the message, this will return the user
          // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
          const user = message.mentions.users.first();
          // If we have a user mentioned
          if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
              /**
               * Kick the member
               * Make sure you run this on a member, not a user!
               * There are big differences between a user and a member
               */
              member
                .kick('Kicklenmeyi Hak etti.')
                .then(() => {
                  // We let the message author know we were able to kick the person
                  message.reply(`Başarıyla ${user.tag} kullanıcısını kickledim!`);
                })
                .catch(err => {
                  // An error happened
                  // This is generally due to the bot not being able to kick the member,
                  // either due to missing permissions or role hierarchy
                  message.reply('Bu kullanıcıyı kicklerken bir hata oldu!');
                  // Log the error
                  console.error(err);
                });
            } else {
              // The mentioned user isn't in this guild
              message.reply("Bu kullanıcı server da değil!");
            }
            // Otherwise, if no user was mentioned
          } else {
            message.reply("Kicklemek istediğiniz kullanıcıyı etiketlemediniz!");
          }
        }
      }}