const Dic = require('discord.js');
const stuart = new Dic.Client();
const tok = "NDQzNjkwMTEwMjE5OTc2NzE2.DdRCLw.Gs-plP1G4EFCqnbt6i2CAkr0Fik";

stuart.on('ready', function (){
    console.log("Litle high, little low !");
})

stuart.login(tok);

stuart.on('message', message =>{
   if (message.content.toLowerCase().includes("stuart")){
       var mess = message.content.toLowerCase().replace("stuart","");
       if(mess.includes("petit")) {
           message.reply("Ce qui est petit est mignon");
       }
       switch (mess){
           case "little high, little low !":
               message.reply("Little Hey Little Hoe !");
               break;
           case "":
               message.reply("C'est pour quoi ?");
               break;
        };
    });
};