import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'create',
      description: 'Creates a new short URL',
    },
];

const rest = new REST({ version: '10' }).setToken(
    "MTM1OTAyNTY2NzAzNDg0MTE3OQ.GMtuNQ.OnnNDDlQjqu5XDn3nkVFMkCrolN4AhI5dV-vsE"
);

(async () => {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1359025667034841179"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}
}) ();
