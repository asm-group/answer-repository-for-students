let botUtils = require('../botUtils');
let userService = require('../../services/userService');
let {course} = require('../../models/dicts')
function addStartHandler(bot) {
    let clientMessage = new RegExp('\/start');


    bot.on('message',(msg)=>{
        console.log(msg)
    })
// test git pull

// Конфиг клавиатуры
    const keyboard = [course];

    bot.on('message', (msg) => {
        const chatId = msg.chat.id; //получаем идентификатор диалога

        let message = '';
        //TODO: Сначала выводим предметы позже тип задач(пс написал потому что хз мб правильно по другому тк в некоторых предметах нет лаб или еще какой либо хуеты)

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
