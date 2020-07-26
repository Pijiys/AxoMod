module.exports = {
    name: 'dm',
    description: 'Dm a user on the guild',
    category: "Moderation",
    execute(client, message, args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have enough permissions!")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`You did not mention a user, or you gave a invaild user id.`);
        if(!args.slice(1).join(" ")) return message.channel.send("You did not specify your message");
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user cannot be messaged")).then(() => message.channel.send(`Sent a message to ${user.user.tag}`))
    }
}
