const TelegramApi = require('node-telegram-bot-api')
const token = "5445621269:AAFNNTJDLbBT5i_HuZR_dy7tbmQAfHvdadQ"

const bot = new TelegramApi(token, {polling: true})
const groupOptions = {
    reply_markup: JSON.stringify(
        {
            inline_keyboard: [
                [{text: '11ІПЗ', callback_data: '1'}, {text: '12ІПЗ', callback_data: '2'}, {text: '21ІПЗ', callback_data: '3'}, {text: '22ІПЗ', callback_data: '4'}],
                [{text: '31ІПЗ', callback_data: '5'}, {text: '32ІПЗ', callback_data: '6'}, {text: '41ІПЗ', callback_data: '7'},{text: '42ІПЗ', callback_data: '8'} ],
            ]
        }
    )
}
const start =() => {
    bot.setMyCommands([
        {command: '/start', description: 'Початок'},
        {command: '/info', description: 'Інформація про вас'},
        {command: '/get1', description: 'Інформація про борги з предметів'}
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
        if (text === '/get1') {
            await bot.sendMessage(chatId, 'Вибери свою групу', groupOptions);
        }
        return bot.sendMessage(chatId, 'Виберіть пункт меню')
    })
    bot.on('callback_query', msg => {
       const data = msg.data;
       const  chatId = msg.message.chat.id;

       // bot.sendMessage(chatId, `Ви вибрали групу ${data}`)
        if(data === '1'){
            return  bot.sendMessage(chatId, 'Боржники:      ' +
                'Петренко Петро Петрович - борг з Охорони праці ' +
                'Кравчук Іван Степанович - борг з Програмування в інтернеті')
        }
        if(data === '2'){
            return  bot.sendMessage(chatId, 'Боржники: 1 1 1 1 ')
            console.log(msg)
        }
        if(data === '3'){
            return  bot.sendMessage(chatId, 'Боржники: відсутні ')
            console.log(msg)
        }
        if(data === '4'){
            return  bot.sendMessage(chatId, 'Боржники: 99999999999')
            console.log(msg)
        }
        if(data === '5'){
            return  bot.sendMessage(chatId, 'Боржники: ' +
                'відсутні')
            console.log(msg)
        }
        if(data === '6'){
            return  bot.sendMessage(chatId, 'Боржники: ' +
                'інформація уточнюється')
            console.log(msg)
        }
        if(data === '7'){
            return  bot.sendMessage(chatId, 'Боржники: ' +
                'інформація відсутня ')
            console.log(msg)
        }
        if(data === '8'){
            return  bot.sendMessage(chatId, 'Боржники:' +
                'відсутні')
            console.log(msg)
        }
        console.log(msg)
    })
}
start()
