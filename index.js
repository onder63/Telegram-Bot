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
