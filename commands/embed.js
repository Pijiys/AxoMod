const Discord = require('discord.js')
module.exports = {
    name : 'embed',
    execute(client, message, args){
        const em = new Discord.MessageEmbed()//if your using version 11 it should be Discord.RichEmbed()
        .setTitle('This part will be the most highlighted')
        .setDescription('Here u type in the description or whatever u want')//Lets just test it quikly
        .addField('THis will the upper part',"and this will be the lower part", true)//this is commonly used to give a subtitle and explain it
        .addField('THis will put em in one line',"if this is empy the lower part will say undefined")
        .setTimestamp()//this will create a a timestamp at the end of the embed when it was used
        .setFooter("if u want anything else at the end in small text use the footer")
        .setAuthor('This will be the second most highlighted part')//this is need not be in order as i did u can do in any order u wish
        .setImage(message.author.displayAvatarURL())//as the name says it is used to put up a image
        //if u want the image at an corner user .setThumbnail
        .setThumbnail(message.author.displayAvatarURL())
        .setURL()//this is to put a url , right now i dont have any url so lets pass that
        .setColor("RANDOM")//as the name says its use to set the color on the side of embed
        //u can use either hexcode or the name in capital, If u want choose between any one just use "RANDOM"
        //oh i forgot the response
        message.channel.send(em);
    }//Thats all about the basic of an embed . I forgot if u want ur fields to line up in a horizontaly put true at the end
}