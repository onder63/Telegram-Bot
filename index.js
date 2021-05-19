require("dotenv").config();

const BOT_API       = process.env.BOT_API || '';
const PORT          = process.env.PORT || 3000;
const URL           = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const { Telegraf } = require('telegraf')
const bot       = new Telegraf(BOT_API);

const config = require('./config');


////////////////////////////OTOMATİK MESAJ ATMA KODU ÇALIŞTIRMAK İÇİN BAŞLANRINDAKİ // İŞARETİNİ KALDIRIN VE config.js DOSYASINA KENDİ ID NUMARANIZI EKLEYİN//////////////
//async function SendMessage(message) {
//    await bot.telegram.sendMessage(config.chat_id, `${message}`, { parse_mode: 'HTML'});
//}

//var AutoPost = function() {
//  SendMessage('Test123')
//}

//var CronJob = require('cron').CronJob;
//new CronJob({
//  cronTime: "00 12,18 * * *", // Hergün öğlen 12 ve akşam 18′de Çalışacak Crontab Girdisi
//  onTick: AutoPost,
//  start: true,
//  timeZone: "Europe/Moscow" // Buna dokunmayın Türkiye saati ile uyumlu
//})

bot.start((ctx) => {
    return ctx.reply("Hey");
});

bot.hears(/selam/ig, async (ctx, next) => {
        ctx.telegram.sendPhoto(ctx.chat.id, 'https://www.ajanskirim.com/wp-content/uploads/2019/03/1525995635Merhaba.jpg', { caption:  `<b>${ctx.from.first_name}</b>`,  parse_mode: 'HTML' })
    return next();
});

bot.command('komut', async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, `<b>${ctx.from.first_name}</b>`, { parse_mode: 'HTML' })
    return next();
});


bot.use(
    require('./handlers/middlewares'),
    require('./plugin')
);


bot.telegram.getMe().then(me => {
    console.log(`Bot Başlatıldı! => ${me.username}`);
});


bot.catch((err) => {
    console.log('Error: ', err)
})

bot.launch({
  webhook: {
    domain: `${URL}`,
    port: `${PORT}`
  }
})
