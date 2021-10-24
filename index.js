const Discord = require('discord.js');
const client = new Discord.Client();
const server = require("./keep_alive");

client.on('ready', () => {
  console.log("Backward writer is here");
  console.log(client.user.username);
});

client.on("message", async message => {

    const prefix = "b!";
    if (message.author.bot) return;

    let args = message.content.slice(prefix.length).split(' ');
    let command = args.shift().toLowerCase();


    if(message.channel.name == "backwardtyping") {
		message.channel.send(message.content.split('').reverse().join(''));
		} else return;

	if(message.author.id == "825044150499016755") {
		message.channel.send("Blah blah blah")
	} else return;

	if(message.guild){
		if(command == "hi") {
			message.channel.send(`Hey there, how you doin?`);
		}
	}
	});

server();
client.login(process.env.Token);
