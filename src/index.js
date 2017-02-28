const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'your token'
var msg = 'あああああああああああああああああああああああああああああああ！！！！！！！！！！！（ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！ﾌﾞﾂﾁﾁﾌﾞﾌﾞﾌﾞﾁﾁﾁﾁﾌﾞﾘﾘｲﾘﾌﾞﾌﾞﾌﾞﾌﾞｩｩｩｩｯｯｯ！！！！！！！ ）'

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.author.id != client.user.id) {
	if(message.content == '!unko'){
	    message.reply(msg)
	} else if (message.content == '!unkov') {
	    const channel = message.member.voiceChannel;

	    channel.join()
		.then(connection => console.log('Connected!'))
		.catch(console.error)
	} else if (message.content == '!d') {
	    const channel = message.member.voiceChannel;

	    channel.leave();
	    console.log('Disconnect!');
	}
    }
});

client.login(token);
