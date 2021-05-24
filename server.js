require('dotenv').config(); 

const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.TWITCH_BOT_NAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'your channel name' ]
});


client.connect();

client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('!')) return;

        const args = message.slice(1).split(' ');
        const command = args.shift();
        //console.log(args);


    if(command === 'SimpleCommand') {
		client.say(channel, `simple answer`);
	}
    if(command === 'CommandsWithArguments') {
            if(args[0]){
		client.say(channel, `${args[0]} est CRINGE`);
	    }
    }

	
});
	
