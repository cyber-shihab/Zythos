const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('MTUxMzg2Mzg0Njc3Nzk3OTAyMQ.GJY8DZ.DMqgZx-jfE-pW0EZ7Juj1yxALvzUv87UjWcSng');
