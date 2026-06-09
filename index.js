const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('MTUxMzg2Mzg0Njc3Nzk3OTAyMQ.Gj5KmG.EqzuW7q4nQ6FJ_NckCK7__AWNDL4KTLvU1GFxg');
