var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("476674989:AAGJ-j4SNh5LKYUVgx0quuQRMY7ipBFRxSY", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hay juga");
});

var Clear = require('codeday-clear'),
    // Our sample app token and secret
    clear = new Clear("1YZiGaj3baaLU8IKVsASRIWaNF2oJNg0", "1COMnWyGnGBsNqkhaZ6WMBWB9UWZw6QZ");

// moment is not a class, just a simple function
var moment = require('moment');

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/codeday") === 0){
    clear.getEventById("oo4QIuKQQTYA", (codedayEvent) => {
      var endsAt = moment(codedayEvent.ends_at * 1000);
      telegram.sendMessage(message.chat.id, "CodeDay ends " + endsAt.fromNow() + "!");
    });
  }
});

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/saya") === 0){
      telegram.sendMessage(message.chat.id, "CodeDay ends ");
    });
  }
});
