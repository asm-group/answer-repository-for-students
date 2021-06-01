const TelegramBot = require('node-telegram-bot-api')

const Token = ''

const bot = new TelegramBot(Token, {
    polling: true
})

bot.on('message',(msg)=>{
    console.log(msg)
})
