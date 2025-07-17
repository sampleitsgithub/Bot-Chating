const  { Client, GatewayIntentBits, Message } = require("discord.js");

const client = new Client({
    intents:  [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ],
});

client.on("messageCreate", (message) => {
    // console.log(message.content);
    // console.log(message);
    if (message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generting Short ID for" + url,
        });
    }
    message.reply({
        content: "Hi From Bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("You!!");
});

require("dotenv").config();
client.login(ProcessingInstruction.env.Discord_Bot_TOKEN);