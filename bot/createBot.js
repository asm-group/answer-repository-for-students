let TelegramBot = require('node-telegram-bot-api');
let addStartHandler = require('./handlers/addUser');
// var botUtils = require('./botUtils');
// var addCalendarHandler = require('./bot/addCalendarHand
// ler');
// var addStartHandler = require('./bot/addStartHandler');
// var addVoteHandler = require('./bot/addVoteHandler');

function createBot(token) {
    let bot = new TelegramBot(token, { polling: true });

    bot.on("polling_error", (m) => console.log(m));

    addStartHandler(bot);


    return bot;
}

module.exports = createBot
