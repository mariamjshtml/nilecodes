const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const fs = require("fs");
const prefix = "#";
const devs = ['334062602554572800' , '448590558160748545' , '447727056617340928' , '476185102922285066'];
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});

  
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-lua") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()


  .addField("❧  **#help-lua-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
 .setFooter('Script Maker')


   message.channel.send({embed});


    }
});
  
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-lua-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("**#help-lua-source-1  ➺      ⦁ مود الهود**⦁",' ‎ ')

	 
 .setFooter('Script Maker')


   message.channel.send({embed});


    }
});
  
  
  
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-lua-source-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
 https://pastebin.com/xGu8E5jA
`);

    }
});  
  

















 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
