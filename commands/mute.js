module.exports = {
  name: 'mute',
  description: 'A temp mute command',
  category: 'moderation',
  execute(client, message, args){
    const ms = require('ms');

    if(message.content.startsWith('!mute')) {
      if(message.member.hasPermission('MUTE_MEMBERS')) {


        let person = message.guild.member(message.mentions.users.first() || message.guild.cache.get(args[1]))

        if(!person) return message.reply('Bu kullanici yok');

        let mainrole = message.guild.roles.find(role = role.name === 'Kullanici');
        let muterole = message.guild.roles.find(role = role.name === 'Sessiz');
        let time = args[1];

        if(mainrole) {
          message.guild.defaultRole.setPermissions(0);
        }


        if(!muterole) {

            message.channel.send('Bisey bisey');
            console.log('sessiz yok');
            message.guild.createRole({
              name: 'Muted',
              color: 'GREY',
              permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'READ_MESSAGE_HISTORY']
            }).then(role = console.log(`Created mute role for ${message.guild.name}.`)).catch(console.error);
            message.channel.send('Mute role has been created\n Retype the command to mute the fuckwit')
        } else {
          if(!time) {
            return message.reply('Please enter the years to mute');
            setTimeout(function () {
              person.addRole(mainrole);
              person.removeRole(muterole);
              message.channel.send(`@${person.user.username} is unmuted`)

            }, ms(time));
          }

          person.remove(mainrole.id);
          person.addRole(muterole.id);

          message.channel.send(`@${person.user.username} has been muted for ${ms(ms(time))}`);

        }


      } else {
        message.reply('Bu komutu gerceklestirmek icin yeterli yetkin yok!')
      }
    }

  }
}