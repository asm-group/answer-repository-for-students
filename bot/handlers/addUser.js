let botUtils = require('../botUtils');
let userService = require('../../services/userService');

function addStartHandler(bot) {
    let clientMessage = new RegExp('\/start');


    bot.on('message',(msg)=>{
        console.log(msg)
    })
// test git pull

// Конфиг клавиатуры
    const keyboard = [
        [
            {
                text: '1 курс', // текст на кнопке
            }
        ],
         [
             {
                text: '2 курс',
             }
         ],
        ];

    bot.on('message', (msg) => {
        const chatId = msg.chat.id; //получаем идентификатор диалога

        let message = '';

        //отправляем сообщение
        if (msg.text === '/start') {
            message = 'Привет, Друг! чего хочешь?';
        }

        if (msg.text === '1 курс') { // если 1 курс
            message = 'Первый курс';
        }

        if (msg.text === '2 курс') { // если 2 курс
            message = 'Второй курс';
        }

        if (message) {
            bot.sendMessage(chatId, message, { // прикрутим клаву
                reply_markup: {
                    keyboard: keyboard,
                    resize_keyboard: true,
                }
            });
        } else {
            bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
                // прикрутим клаву
                reply_markup: {
                    keyboard: keyboard,
                    resize_keyboard: true,
                }
            });
        }
    });
}

module.exports = addStartHandler
