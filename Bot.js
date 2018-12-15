const Discord = require('discord.js');
const client = new Discord.Client();


/// This Version is Unser Maintinance. !


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




/// Spam Bot.


client.on("ready", () => {
let channel =     client.channels.get("511543388223307787")
setInterval(function() {
channel.send(` **Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , VenoVenom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best .Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best .m is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best .Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , Venom is the Best , ** `);
}, 3000)
})



/// TOken.

client.login(process.env.BOT_TOKEN1);
