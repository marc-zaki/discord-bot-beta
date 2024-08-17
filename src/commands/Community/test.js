const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName ('test')
    .setDescription ('This is the test command!'),
    async execute(interaction, client ) {
        await interaction.reply({ content: 'The bot is working'});
    }
}
const {client.on}
client.on('message', message=>{
    console.log(message.content);
    if(message.content === 'hi'){
        message.channel.send('hi ya5oia')
    }
});
