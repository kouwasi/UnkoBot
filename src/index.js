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

	    if (channel != undefined && channel.joinable) {
		channel.join()
		    .then(connection => {
			console.log('Connected!')
			const dispatcher = connection.playFile('./voice.mp3')

			dispatcher.on("end", end => {channel.leave()})
		    })
		    .catch(console.error)
	    } else if (channel == undefined) {
		message.reply('channel is undefined')
	    } else {
		message.reply('You do not have permission to join this voice channel.')
	    }
	}
    }
});

client.login(token);
