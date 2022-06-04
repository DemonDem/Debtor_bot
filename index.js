const TelegramApi = require('node-telegram-bot-api')
const token = "5445621269:AAFNNTJDLbBT5i_HuZR_dy7tbmQAfHvdadQ"

const bot = new TelegramApi(token, {polling: true})
const start =() => {
    bot.setMyCommands([
        {command: '/start', description: 'Початок'},
        {command: '/info', description: 'Інформація про вас'},
        {command: '/get1', description: 'Інформація про борги з предметів'},
        {command: '/get2', description: 'Інформація про борги по оплаті'}
    ])

    bot.on('message',   async msg => {
        const  text = msg.text;
        const  chatId = msg.chat.id;
        if (text === '/start'){
            return  bot.sendMessage(chatId, `Бот допомагає переглянути ваші борги по навчанню`);
        }
        if (text === '/info'){
            return  bot.sendMessage(chatId, `Твоя сторінка  ${msg.from.first_name} ${msg.from.last_name}`);
        }
        return bot.sendMessage(chatId, 'Виберіть пункт меню')
    })
}
start()
