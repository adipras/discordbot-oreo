// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);

client.on('messageCreate', msg => {
    // You can view the msg object here with console.log(msg)
    if (msg.content === 'Hello') {
        msg.reply(`Hello ${msg.author.username}`);
    }
});