require("dotenv").config();

const BOT_API       = process.env.BOT_API || '';
const PORT          = process.env.PORT || 3000;
const URL           = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const { Telegraf, Markup } = require('telegraf')
const bot       = new Telegraf(BOT_API);

const config = require('./config');

// Bota start verdiğinizde atılan ilk mesaj
bot.start((ctx) => {
    return ctx.reply("Okumak istediğiniz Özel Koşul Numarasını Yazınız.");
});


bot.hears(/selam/ig, async (ctx, next) => {
    await ctx.telegram.sendPhoto(ctx.chat.id,
        'https://www.ajanskirim.com/wp-content/uploads/2019/03/1525995635Merhaba.jpg',
        { caption:  `<b>${ctx.from.first_name}</b>`,  parse_mode: 'HTML' })
    return next();
});



bot.hears(/1/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/1.txt'
    }, {
        filename: '1.txt',
        caption: '1.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/3/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/3.txt'
    }, {
        filename: '3.txt',
        caption: '3.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/4/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/4.txt'
    }, {
        filename: '4.txt',
        caption: '4.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/5/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/5.txt'
    }, {
        filename: '5.txt',
        caption: '5.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/6/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/6.txt'
    }, {
        filename: '6.txt',
        caption: '6.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/7/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/7.txt'
    }, {
        filename: '7.txt',
        caption: '7.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/8/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/8.txt'
    }, {
        filename: '8.txt',
        caption: '8.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/9/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/9.txt'
    }, {
        filename: '9.txt',
        caption: '9.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/10/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/10.txt'
    }, {
        filename: '10.txt',
        caption: '10.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/11/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/11.txt'
    }, {
        filename: '11.txt',
        caption: '11.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/12/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/12.txt'
    }, {
        filename: '12.txt',
        caption: '12.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/13/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/13.txt'
    }, {
        filename: '13.txt',
        caption: '13.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/14/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/14.txt'
    }, {
        filename: '14.txt',
        caption: '14.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/15/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/15.txt'
    }, {
        filename: '15.txt',
        caption: '15.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/16/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/16.txt'
    }, {
        filename: '16.txt',
        caption: '16.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/17/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/17.txt'
    }, {
        filename: '17.txt',
        caption: '17.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/18/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/18.txt'
    }, {
        filename: '18.txt',
        caption: '18.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/19/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/19.txt'
    }, {
        filename: '19.txt',
        caption: '19.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/20/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/20.txt'
    }, {
        filename: '20.txt',
        caption: '20.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/21/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/21.txt'
    }, {
        filename: '21.txt',
        caption: '21.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/22/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/22.txt'
    }, {
        filename: '22.txt',
        caption: '22.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/23/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/23.txt'
    }, {
        filename: '23.txt',
        caption: '23.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/24/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/24.txt'
    }, {
        filename: '24.txt',
        caption: '24.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/25/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/25.txt'
    }, {
        filename: '25.txt',
        caption: '25.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/26/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/26.txt'
    }, {
        filename: '26.txt',
        caption: '26.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/27/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/27.txt'
    }, {
        filename: '27.txt',
        caption: '27.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/28/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/28.txt'
    }, {
        filename: '28.txt',
        caption: '28.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/29/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/29.txt'
    }, {
        filename: '29.txt',
        caption: '29.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/30/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/30.txt'
    }, {
        filename: '30.txt',
        caption: '30.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/31/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/31.txt'
    }, {
        filename: '31.txt',
        caption: '31.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/32/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/32.txt'
    }, {
        filename: '32.txt',
        caption: '32.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/33/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/33.txt'
    }, {
        filename: '33.txt',
        caption: '33.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/34/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/34.txt'
    }, {
        filename: '34.txt',
        caption: '34.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/35/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/35.txt'
    }, {
        filename: '35.txt',
        caption: '35.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/36/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/36.txt'
    }, {
        filename: '36.txt',
        caption: '36.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/37/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/37.txt'
    }, {
        filename: '37.txt',
        caption: '37.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/38/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/38.txt'
    }, {
        filename: '38.txt',
        caption: '38.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/39/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/39.txt'
    }, {
        filename: '39.txt',
        caption: '39.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/40/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/40.txt'
    }, {
        filename: '40.txt',
        caption: '40.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/41/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/41.txt'
    }, {
        filename: '41.txt',
        caption: '41.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/42/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/42.txt'
    }, {
        filename: '42.txt',
        caption: '42.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/43/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/43.txt'
    }, {
        filename: '43.txt',
        caption: '43.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/44/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/44.txt'
    }, {
        filename: '44.txt',
        caption: '44.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/45/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/45.txt'
    }, {
        filename: '45.txt',
        caption: '45.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/46/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/46.txt'
    }, {
        filename: '46.txt',
        caption: '46.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/47/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/47.txt'
    }, {
        filename: '47.txt',
        caption: '47.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/48/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/48.txt'
    }, {
        filename: '48.txt',
        caption: '48.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/49/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/49.txt'
    }, {
        filename: '49.txt',
        caption: '49.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/50/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/50.txt'
    }, {
        filename: '50.txt',
        caption: '50.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/51/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/51.txt'
    }, {
        filename: '51.txt',
        caption: '51.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/52/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/52.txt'
    }, {
        filename: '52.txt',
        caption: '52.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/53/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/53.txt'
    }, {
        filename: '53.txt',
        caption: '53.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/54/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/54.txt'
    }, {
        filename: '54.txt',
        caption: '54.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/55/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/55.txt'
    }, {
        filename: '55.txt',
        caption: '55.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/56/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/56.txt'
    }, {
        filename: '56.txt',
        caption: '56.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/57/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/57.txt'
    }, {
        filename: '57.txt',
        caption: '57.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/58/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/58.txt'
    }, {
        filename: '58.txt',
        caption: '58.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/59/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/59.txt'
    }, {
        filename: '59.txt',
        caption: '59.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/60/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/60.txt'
    }, {
        filename: '60.txt',
        caption: '60.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/61/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/61.txt'
    }, {
        filename: '61.txt',
        caption: '61.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/62/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/62.txt'
    }, {
        filename: '62.txt',
        caption: '62.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/63/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/63.txt'
    }, {
        filename: '63.txt',
        caption: '63.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/64/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/64.txt'
    }, {
        filename: '64.txt',
        caption: '64.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/65/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/65.txt'
    }, {
        filename: '65.txt',
        caption: '65.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/66/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/66.txt'
    }, {
        filename: '66.txt',
        caption: '66.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/67/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/67.txt'
    }, {
        filename: '67.txt',
        caption: '67.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/68/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/68.txt'
    }, {
        filename: '68.txt',
        caption: '68.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/69/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/69.txt'
    }, {
        filename: '69.txt',
        caption: '69.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/70/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/70.txt'
    }, {
        filename: '70.txt',
        caption: '70.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/71/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/71.txt'
    }, {
        filename: '71.txt',
        caption: '71.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/72/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/72.txt'
    }, {
        filename: '72.txt',
        caption: '72.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/73/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/73.txt'
    }, {
        filename: '73.txt',
        caption: '73.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/74/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/74.txt'
    }, {
        filename: '74.txt',
        caption: '74.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/75/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/75.txt'
    }, {
        filename: '75.txt',
        caption: '75.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/76/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/76.txt'
    }, {
        filename: '76.txt',
        caption: '76.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/77/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/77.txt'
    }, {
        filename: '77.txt',
        caption: '77.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/78/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/78.txt'
    }, {
        filename: '78.txt',
        caption: '78.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/79/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/79.txt'
    }, {
        filename: '79.txt',
        caption: '79.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/80/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/80.txt'
    }, {
        filename: '80.txt',
        caption: '80.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/81/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/81.txt'
    }, {
        filename: '81.txt',
        caption: '81.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/82/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/82.txt'
    }, {
        filename: '82.txt',
        caption: '82.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/83/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/83.txt'
    }, {
        filename: '83.txt',
        caption: '83.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/84/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/84.txt'
    }, {
        filename: '84.txt',
        caption: '84.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/85/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/85.txt'
    }, {
        filename: '85.txt',
        caption: '85.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/86/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/86.txt'
    }, {
        filename: '86.txt',
        caption: '86.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/87/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/87.txt'
    }, {
        filename: '87.txt',
        caption: '87.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/88/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/88.txt'
    }, {
        filename: '88.txt',
        caption: '88.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/89/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/89.txt'
    }, {
        filename: '89.txt',
        caption: '89.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/90/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/90.txt'
    }, {
        filename: '90.txt',
        caption: '90.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/91/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/91.txt'
    }, {
        filename: '91.txt',
        caption: '91.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/92/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/92.txt'
    }, {
        filename: '92.txt',
        caption: '92.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/93/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/93.txt'
    }, {
        filename: '93.txt',
        caption: '93.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/94/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/94.txt'
    }, {
        filename: '94.txt',
        caption: '94.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/95/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/95.txt'
    }, {
        filename: '95.txt',
        caption: '95.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/96/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/96.txt'
    }, {
        filename: '96.txt',
        caption: '96.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/97/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/97.txt'
    }, {
        filename: '97.txt',
        caption: '97.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/98/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/98.txt'
    }, {
        filename: '98.txt',
        caption: '98.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/99/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/99.txt'
    }, {
        filename: '99.txt',
        caption: '99.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/100/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/100.txt'
    }, {
        filename: '100.txt',
        caption: '100.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/101/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/101.txt'
    }, {
        filename: '101.txt',
        caption: '101.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/102/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/102.txt'
    }, {
        filename: '102.txt',
        caption: '102.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/103/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/103.txt'
    }, {
        filename: '103.txt',
        caption: '103.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/104/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/104.txt'
    }, {
        filename: '104.txt',
        caption: '104.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/105/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/105.txt'
    }, {
        filename: '105.txt',
        caption: '105.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/106/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/106.txt'
    }, {
        filename: '106.txt',
        caption: '106.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/107/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/107.txt'
    }, {
        filename: '107.txt',
        caption: '107.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/108/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/108.txt'
    }, {
        filename: '108.txt',
        caption: '108.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/109/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/109.txt'
    }, {
        filename: '109.txt',
        caption: '109.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/110/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/110.txt'
    }, {
        filename: '110.txt',
        caption: '110.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/111/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/111.txt'
    }, {
        filename: '111.txt',
        caption: '111.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/112/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/112.txt'
    }, {
        filename: '112.txt',
        caption: '112.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/113/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/113.txt'
    }, {
        filename: '113.txt',
        caption: '113.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/114/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/114.txt'
    }, {
        filename: '114.txt',
        caption: '114.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/115/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/115.txt'
    }, {
        filename: '115.txt',
        caption: '115.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/116/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/116.txt'
    }, {
        filename: '116.txt',
        caption: '116.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/117/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/117.txt'
    }, {
        filename: '117.txt',
        caption: '117.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/118/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/118.txt'
    }, {
        filename: '118.txt',
        caption: '118.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/119/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/119.txt'
    }, {
        filename: '119.txt',
        caption: '119.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/120/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/120.txt'
    }, {
        filename: '120.txt',
        caption: '120.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/121/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/121.txt'
    }, {
        filename: '121.txt',
        caption: '121.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/122/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/122.txt'
    }, {
        filename: '122.txt',
        caption: '122.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/123/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/123.txt'
    }, {
        filename: '123.txt',
        caption: '123.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/124/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/124.txt'
    }, {
        filename: '124.txt',
        caption: '124.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/125/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/125.txt'
    }, {
        filename: '125.txt',
        caption: '125.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/126/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/126.txt'
    }, {
        filename: '126.txt',
        caption: '126.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/127/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/127.txt'
    }, {
        filename: '127.txt',
        caption: '127.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/128/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/128.txt'
    }, {
        filename: '128.txt',
        caption: '128.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/129/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/129.txt'
    }, {
        filename: '129.txt',
        caption: '129.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/130/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/130.txt'
    }, {
        filename: '130.txt',
        caption: '130.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/131/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/131.txt'
    }, {
        filename: '131.txt',
        caption: '131.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/132/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/132.txt'
    }, {
        filename: '132.txt',
        caption: '132.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/133/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/133.txt'
    }, {
        filename: '133.txt',
        caption: '133.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/134/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/134.txt'
    }, {
        filename: '134.txt',
        caption: '134.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/135/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/135.txt'
    }, {
        filename: '135.txt',
        caption: '135.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/136/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/136.txt'
    }, {
        filename: '136.txt',
        caption: '136.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/137/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/137.txt'
    }, {
        filename: '137.txt',
        caption: '137.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/138/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/138.txt'
    }, {
        filename: '138.txt',
        caption: '138.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/139/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/139.txt'
    }, {
        filename: '139.txt',
        caption: '139.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/140/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/140.txt'
    }, {
        filename: '140.txt',
        caption: '140.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/141/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/141.txt'
    }, {
        filename: '141.txt',
        caption: '141.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/142/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/142.txt'
    }, {
        filename: '142.txt',
        caption: '142.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/143/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/143.txt'
    }, {
        filename: '143.txt',
        caption: '143.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/144/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/144.txt'
    }, {
        filename: '144.txt',
        caption: '144.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/145/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/145.txt'
    }, {
        filename: '145.txt',
        caption: '145.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/146/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/146.txt'
    }, {
        filename: '146.txt',
        caption: '146.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/147/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/147.txt'
    }, {
        filename: '147.txt',
        caption: '147.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/148/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/148.txt'
    }, {
        filename: '148.txt',
        caption: '148.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/149/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/149.txt'
    }, {
        filename: '149.txt',
        caption: '149.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/150/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/150.txt'
    }, {
        filename: '150.txt',
        caption: '150.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/151/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/151.txt'
    }, {
        filename: '151.txt',
        caption: '151.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/152/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/152.txt'
    }, {
        filename: '152.txt',
        caption: '52.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/153/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/153.txt'
    }, {
        filename: '153.txt',
        caption: '53.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/154/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/154.txt'
    }, {
        filename: '154.txt',
        caption: '154.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/155/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/155.txt'
    }, {
        filename: '155.txt',
        caption: '155.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/156/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/156.txt'
    }, {
        filename: '156.txt',
        caption: '56.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/157/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/157.txt'
    }, {
        filename: '157.txt',
        caption: '157.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/158/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/158.txt'
    }, {
        filename: '158.txt',
        caption: '158.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/159/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/159.txt'
    }, {
        filename: '159.txt',
        caption: '159.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/160/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/160.txt'
    }, {
        filename: '160.txt',
        caption: '160.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/161/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/161.txt'
    }, {
        filename: '161.txt',
        caption: '161.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/162/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/162.txt'
    }, {
        filename: '162.txt',
        caption: '162.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/163/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/163.txt'
    }, {
        filename: '163.txt',
        caption: '163.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/164/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/164.txt'
    }, {
        filename: '164.txt',
        caption: '164.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/165/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/165.txt'
    }, {
        filename: '165.txt',
        caption: '165.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/166/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/166.txt'
    }, {
        filename: '166.txt',
        caption: '166.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/167/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/167.txt'
    }, {
        filename: '167.txt',
        caption: '167.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/168/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/168.txt'
    }, {
        filename: '168.txt',
        caption: '168.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/169/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/169.txt'
    }, {
        filename: '169.txt',
        caption: '169.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/170/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/170.txt'
    }, {
        filename: '170.txt',
        caption: '170.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/171/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/171.txt'
    }, {
        filename: '171.txt',
        caption: '171.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/172/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/172.txt'
    }, {
        filename: '172.txt',
        caption: '172.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/173/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/173.txt'
    }, {
        filename: '173.txt',
        caption: '173.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/174/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/174.txt'
    }, {
        filename: '174.txt',
        caption: '174.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/175/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/175.txt'
    }, {
        filename: '175.txt',
        caption: '175.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/176/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/176.txt'
    }, {
        filename: '176.txt',
        caption: '176.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/177/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/177.txt'
    }, {
        filename: '177.txt',
        caption: '177.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/178/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/178.txt'
    }, {
        filename: '178.txt',
        caption: '178.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/179/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/179.txt'
    }, {
        filename: '179.txt',
        caption: '179.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/180/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/180.txt'
    }, {
        filename: '180.txt',
        caption: '180.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/181/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/181.txt'
    }, {
        filename: '181.txt',
        caption: '181.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/182/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/182.txt'
    }, {
        filename: '182.txt',
        caption: '182.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/183/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/183.txt'
    }, {
        filename: '183.txt',
        caption: '183.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/184/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/184.txt'
    }, {
        filename: '184.txt',
        caption: '184.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/85/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/85.txt'
    }, {
        filename: '85.txt',
        caption: '85.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/186/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/186.txt'
    }, {
        filename: '186.txt',
        caption: '186.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/187/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/187.txt'
    }, {
        filename: '187.txt',
        caption: '187.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/188/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/188.txt'
    }, {
        filename: '188.txt',
        caption: '188.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/189/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/189.txt'
    }, {
        filename: '189.txt',
        caption: '189.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/190/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/190.txt'
    }, {
        filename: '190.txt',
        caption: '190.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/191/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/191.txt'
    }, {
        filename: '191.txt',
        caption: '191.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/192/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/192.txt'
    }, {
        filename: '192.txt',
        caption: '192.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/193/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/193.txt'
    }, {
        filename: '193.txt',
        caption: '193.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/194/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/194.txt'
    }, {
        filename: '194.txt',
        caption: '194.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/195/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/195.txt'
    }, {
        filename: '195.txt',
        caption: '195.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/196/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/196.txt'
    }, {
        filename: '196.txt',
        caption: '196.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/197/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/197.txt'
    }, {
        filename: '197.txt',
        caption: '197.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/198/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/198.txt'
    }, {
        filename: '198.txt',
        caption: '198.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/199/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/199.txt'
    }, {
        filename: '199.txt',
        caption: '199.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/200/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/200.txt'
    }, {
        filename: '200.txt',
        caption: '200.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/201/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/201.txt'
    }, {
        filename: '201.txt',
        caption: '201.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/202/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/202.txt'
    }, {
        filename: '202.txt',
        caption: '202.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/203/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/203.txt'
    }, {
        filename: '203.txt',
        caption: '203.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/204/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/204.txt'
    }, {
        filename: '204.txt',
        caption: '204.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/205/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/205.txt'
    }, {
        filename: '205.txt',
        caption: '205.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/206/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/206.txt'
    }, {
        filename: '206.txt',
        caption: '206.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/207/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/207.txt'
    }, {
        filename: '207.txt',
        caption: '207.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/208/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/208.txt'
    }, {
        filename: '208.txt',
        caption: '208.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/209/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/209.txt'
    }, {
        filename: '209.txt',
        caption: '209.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/210/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/210.txt'
    }, {
        filename: '210.txt',
        caption: '210.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/211/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/211.txt'
    }, {
        filename: '211.txt',
        caption: '211.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/212/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/212.txt'
    }, {
        filename: '212.txt',
        caption: '212.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/213/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/213.txt'
    }, {
        filename: '213.txt',
        caption: '213.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/214/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/214.txt'
    }, {
        filename: '214.txt',
        caption: '214.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/215/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/215.txt'
    }, {
        filename: '215.txt',
        caption: '215.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/216/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/216.txt'
    }, {
        filename: '216.txt',
        caption: '216.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/217/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/217.txt'
    }, {
        filename: '217.txt',
        caption: '217.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/218/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/218.txt'
    }, {
        filename: '218.txt',
        caption: '218.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/219/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/219.txt'
    }, {
        filename: '219.txt',
        caption: '219.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/220/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/220.txt'
    }, {
        filename: '220.txt',
        caption: '220.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/221/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/221.txt'
    }, {
        filename: '221.txt',
        caption: '221.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/222/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/222.txt'
    }, {
        filename: '222.txt',
        caption: '222.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/223/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/223.txt'
    }, {
        filename: '223.txt',
        caption: '223.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/224/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/224.txt'
    }, {
        filename: '224.txt',
        caption: '224.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/225/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/225.txt'
    }, {
        filename: '225.txt',
        caption: '225.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/226/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/226.txt'
    }, {
        filename: '226.txt',
        caption: '226.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/227/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/227.txt'
    }, {
        filename: '227.txt',
        caption: '227.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/228/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/228.txt'
    }, {
        filename: '228.txt',
        caption: '228.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/229/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/229.txt'
    }, {
        filename: '229.txt',
        caption: '229.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/230/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/230.txt'
    }, {
        filename: '230.txt',
        caption: '230.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/231/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/231.txt'
    }, {
        filename: '231.txt',
        caption: '231.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/232/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/232.txt'
    }, {
        filename: '232.txt',
        caption: '232.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/233/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/233.txt'
    }, {
        filename: '233.txt',
        caption: '233.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/234/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/234.txt'
    }, {
        filename: '234.txt',
        caption: '234.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/235/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/235.txt'
    }, {
        filename: '235.txt',
        caption: '235.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/236/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/236.txt'
    }, {
        filename: '236.txt',
        caption: '236.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/237/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/237.txt'
    }, {
        filename: '237.txt',
        caption: '237.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/238/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/238.txt'
    }, {
        filename: '238.txt',
        caption: '238.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/239/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/239.txt'
    }, {
        filename: '239.txt',
        caption: '239.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/240/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/240.txt'
    }, {
        filename: '240.txt',
        caption: '240.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/241/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/241.txt'
    }, {
        filename: '241.txt',
        caption: '241.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/242/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/242.txt'
    }, {
        filename: '242.txt',
        caption: '242.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/243/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/243.txt'
    }, {
        filename: '243.txt',
        caption: '243.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/244/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/244.txt'
    }, {
        filename: '244.txt',
        caption: '244.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/245/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/245.txt'
    }, {
        filename: '245.txt',
        caption: '245.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/246/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/246.txt'
    }, {
        filename: '246.txt',
        caption: '246.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/247/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/247.txt'
    }, {
        filename: '247.txt',
        caption: '247.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/248/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/248.txt'
    }, {
        filename: '248.txt',
        caption: '248.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/249/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/249.txt'
    }, {
        filename: '249.txt',
        caption: '249.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/250/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/250.txt'
    }, {
        filename: '250.txt',
        caption: '250.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/251/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/251.txt'
    }, {
        filename: '251.txt',
        caption: '251.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/252/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/252.txt'
    }, {
        filename: '252.txt',
        caption: '252.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/253/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/253.txt'
    }, {
        filename: '253.txt',
        caption: '253.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/254/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/254.txt'
    }, {
        filename: '254.txt',
        caption: '254.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/255/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/255.txt'
    }, {
        filename: '255.txt',
        caption: '255.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/256/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/256.txt'
    }, {
        filename: '256.txt',
        caption: '256.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/257/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/257.txt'
    }, {
        filename: '257.txt',
        caption: '257.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/258/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/258.txt'
    }, {
        filename: '258.txt',
        caption: '258.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/259/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/259.txt'
    }, {
        filename: '259.txt',
        caption: '259.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/260/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/260.txt'
    }, {
        filename: '260.txt',
        caption: '260.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/261/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/261.txt'
    }, {
        filename: '261.txt',
        caption: '61.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/262/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/262.txt'
    }, {
        filename: '262.txt',
        caption: '262.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/263/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/263.txt'
    }, {
        filename: '263.txt',
        caption: '263.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/264/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/264.txt'
    }, {
        filename: '264.txt',
        caption: '264.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/265/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/265.txt'
    }, {
        filename: '265.txt',
        caption: '265.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/266/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/266.txt'
    }, {
        filename: '266.txt',
        caption: '266.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/267/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/267.txt'
    }, {
        filename: '267.txt',
        caption: '267.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/268/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/268.txt'
    }, {
        filename: '268.txt',
        caption: '268.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/269/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/269.txt'
    }, {
        filename: '269.txt',
        caption: '269.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/270/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/270.txt'
    }, {
        filename: '270.txt',
        caption: '270.Nolu Koşul'
    })
    return next()
    
})

bot.hears(/271/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/271.txt'
    }, {
        filename: '271.txt',
        caption: '271.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/272/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/272.txt'
    }, {
        filename: '272.txt',
        caption: '272.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/273/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/273.txt'
    }, {
        filename: '273.txt',
        caption: '273.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/274/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/274.txt'
    }, {
        filename: '274.txt',
        caption: '274.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/275/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/275.txt'
    }, {
        filename: '275.txt',
        caption: '275.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/276/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/276.txt'
    }, {
        filename: '276.txt',
        caption: '276.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/277/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/277.txt'
    }, {
        filename: '277.txt',
        caption: '277.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/278/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/278.txt'
    }, {
        filename: '278.txt',
        caption: '278.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/279/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/279.txt'
    }, {
        filename: '279.txt',
        caption: '279.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/280/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/280.txt'
    }, {
        filename: '280.txt',
        caption: '280.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/281/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/281.txt'
    }, {
        filename: '281.txt',
        caption: '281.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/282/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/282.txt'
    }, {
        filename: '282.txt',
        caption: '282.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/283/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/283.txt'
    }, {
        filename: '283.txt',
        caption: '283.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/284/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/284.txt'
    }, {
        filename: '284.txt',
        caption: '284.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/285/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/285.txt'
    }, {
        filename: '285.txt',
        caption: '285.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/286/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/286.txt'
    }, {
        filename: '286.txt',
        caption: '286.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/287/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/287.txt'
    }, {
        filename: '287.txt',
        caption: '287.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/288/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/288.txt'
    }, {
        filename: '288.txt',
        caption: '288.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/289/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/289.txt'
    }, {
        filename: '289.txt',
        caption: '289.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/290/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/290.txt'
    }, {
        filename: '290.txt',
        caption: '290.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/291/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/291.txt'
    }, {
        filename: '291.txt',
        caption: '291.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/292/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/292.txt'
    }, {
        filename: '292.txt',
        caption: '292.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/293/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/293.txt'
    }, {
        filename: '293.txt',
        caption: '293.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/294/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/294.txt'
    }, {
        filename: '294.txt',
        caption: '294.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/295/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/295.txt'
    }, {
        filename: '295.txt',
        caption: '295.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/296/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/296.txt'
    }, {
        filename: '296.txt',
        caption: '296.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/297/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/297.txt'
    }, {
        filename: '297.txt',
        caption: '297.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/298/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/298.txt'
    }, {
        filename: '298.txt',
        caption: '298.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/299/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/299.txt'
    }, {
        filename: '299.txt',
        caption: '299.Nolu Koşul'
    })
    return next()
    
})
bot.hears(/300/ig, async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/300.txt'
    }, {
        filename: '300.txt',
        caption: '300.Nolu Koşul'
    })
    return next()
    
})

bot.command('komut', async (ctx, next) => {
    await ctx.telegram.sendMessage(ctx.chat.id, `<b>${ctx.from.first_name}</b>`, { parse_mode: 'HTML' })
    return next();
});


async function searchMessage(ctx){
    await ctx.reply('<b>Hangi arama motorunu kullanmak istiyorsunuz?</b>', {
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
            [Markup.button.url('Google', 'www.google.com')],
            [ Markup.button.callback('Yok ben almıyım.', 'kapat'), Markup.button.callback('Diğer', 'all')]
        ])
    })
}


bot.action('all', async (ctx) => {
    await ctx.answerCbQuery()
    await ctx.editMessageText('Yandex, DuckDuckGo, Yahoo ?', Markup.inlineKeyboard([
        [Markup.button.url('Yandex', 'https://yandex.com.tr/'), Markup.button.url('DuckDuckGo', 'https://duckduckgo.com/')],
        [Markup.button.url('Yahoo', 'https://www.yahoo.com/')],
        [Markup.button.callback('Geri', 'geri')]
    ]))
})


bot.action('geri', ctx => {
    ctx.deleteMessage()
    searchMessage(ctx)
})


bot.action('kapat', ctx => {
    ctx.answerCbQuery()
    ctx.deleteMessage()
});


bot.command("buton", ctx => {
    ctx.deleteMessage()
    searchMessage(ctx)
})


function getUserLink(user) {
    const lastName = user.last_name ? ` ${user.last_name}` : '';
    const username = user.username ? ` \nKullanıcı Adı: @${user.username}` : '';
    const userBio = user.bio ? ` \nBio: ${user.bio}` : '';
    return `<a href="tg://user?id=${user.id}">${user.first_name}${lastName}</a>${username}${userBio}\nID: <code>${user.id}</code>`;
}


bot.command("who", async (ctx) => {
    const Id = ctx.message.reply_to_message ? ctx.message.reply_to_message.from.id : ctx.message.from.id;
    const messageId = ctx.message.reply_to_message ? ctx.message.reply_to_message.message_id : null;
    const getUserInfo = await ctx.telegram.getChat(Id);
    const getUser = [getUserInfo].map(getUserLink).join(', ')
    return ctx.replyWithHTML(getUser,  { reply_to_message_id: messageId })
});


bot.use(
    require('./handlers/middlewares'),
    require('./plugin')
);

// Kodlarda hata çıkarsa bunun sayesinde çalışmaya devam eder.
bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun kullanıcı adını alan bir kod.
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Başlatıldı! => ${bot.options.username}`)
})

// Heroku sitesinde botunuzun kullanıcı adı gözükür -> deneyselbot.herokuapp.com
const cb = function(req, res) {
    res.end(`${bot.options.username}`)
}

// Botun webhook ile çalışmasını sağlar.
bot.launch({
    webhook: {
        domain: `${URL}`,
        port: `${PORT}`,
        cb
    }
})

// Bu botumuzu nazikçe durdurmayı etkinleştirir.
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
