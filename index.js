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
bot.hears(/merhaba/ig, async (ctx, next) => {
    await ctx.telegram.sendPhoto(ctx.chat.id,{
         source: './dosyalar/51.txt'
    }, {
        filename: '51.txt',
        caption: '51.Nolu Koşul'
    })
    return next()
});


bot.command('1', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/1.txt'
    }, {
        filename: '1.txt',
        caption: '1.Nolu Koşul'
    })
    return next()
    
})
bot.command('3', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/3.txt'
    }, {
        filename: '3.txt',
        caption: '3.Nolu Koşul'
    })
    return next()
    
})
bot.command('4', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/4.txt'
    }, {
        filename: '4.txt',
        caption: '4.Nolu Koşul'
    })
    return next()
    
})
bot.command('5', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/5.txt'
    }, {
        filename: '5.txt',
        caption: '5.Nolu Koşul'
    })
    return next()
    
})
bot.command('6', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/6.txt'
    }, {
        filename: '6.txt',
        caption: '6.Nolu Koşul'
    })
    return next()
    
})
bot.command('7', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/7.txt'
    }, {
        filename: '7.txt',
        caption: '7.Nolu Koşul'
    })
    return next()
    
})
bot.command('8', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/8.txt'
    }, {
        filename: '8.txt',
        caption: '8.Nolu Koşul'
    })
    return next()
    
})
bot.command('9', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/9.txt'
    }, {
        filename: '9.txt',
        caption: '9.Nolu Koşul'
    })
    return next()
    
})
bot.command('10', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/10.txt'
    }, {
        filename: '10.txt',
        caption: '10.Nolu Koşul'
    })
    return next()
    
})
bot.command('11', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/11.txt'
    }, {
        filename: '11.txt',
        caption: '11.Nolu Koşul'
    })
    return next()
    
})
bot.command('12', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/12.txt'
    }, {
        filename: '12.txt',
        caption: '12.Nolu Koşul'
    })
    return next()
    
})

bot.command('13', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/13.txt'
    }, {
        filename: '13.txt',
        caption: '13.Nolu Koşul'
    })
    return next()
    
})
bot.command('14', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/14.txt'
    }, {
        filename: '14.txt',
        caption: '14.Nolu Koşul'
    })
    return next()
    
})

bot.command('15', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/15.txt'
    }, {
        filename: '15.txt',
        caption: '15.Nolu Koşul'
    })
    return next()
    
})
bot.command('16', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/16.txt'
    }, {
        filename: '16.txt',
        caption: '16.Nolu Koşul'
    })
    return next()
    
})
bot.command('17', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/17.txt'
    }, {
        filename: '17.txt',
        caption: '17.Nolu Koşul'
    })
    return next()
    
})
bot.command('18', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/18.txt'
    }, {
        filename: '18.txt',
        caption: '18.Nolu Koşul'
    })
    return next()
    
})
bot.command('19', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/19.txt'
    }, {
        filename: '19.txt',
        caption: '19.Nolu Koşul'
    })
    return next()
    
})
bot.command('20', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/20.txt'
    }, {
        filename: '20.txt',
        caption: '20.Nolu Koşul'
    })
    return next()
    
})

bot.command('21', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/21.txt'
    }, {
        filename: '21.txt',
        caption: '21.Nolu Koşul'
    })
    return next()
    
})
bot.command('22', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/22.txt'
    }, {
        filename: '22.txt',
        caption: '22.Nolu Koşul'
    })
    return next()
    
})
bot.command('23', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/23.txt'
    }, {
        filename: '23.txt',
        caption: '23.Nolu Koşul'
    })
    return next()
    
})
bot.command('24', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/24.txt'
    }, {
        filename: '24.txt',
        caption: '24.Nolu Koşul'
    })
    return next()
    
})
bot.command('25', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/25.txt'
    }, {
        filename: '25.txt',
        caption: '25.Nolu Koşul'
    })
    return next()
    
})
bot.command('26', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/26.txt'
    }, {
        filename: '26.txt',
        caption: '26.Nolu Koşul'
    })
    return next()
    
})
bot.command('27', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/27.txt'
    }, {
        filename: '27.txt',
        caption: '27.Nolu Koşul'
    })
    return next()
    
})
bot.command('28', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/28.txt'
    }, {
        filename: '28.txt',
        caption: '28.Nolu Koşul'
    })
    return next()
    
})
bot.command('29', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/29.txt'
    }, {
        filename: '29.txt',
        caption: '29.Nolu Koşul'
    })
    return next()
    
})
bot.command('30', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/30.txt'
    }, {
        filename: '30.txt',
        caption: '30.Nolu Koşul'
    })
    return next()
    
})
bot.command('31', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/31.txt'
    }, {
        filename: '31.txt',
        caption: '31.Nolu Koşul'
    })
    return next()
    
})
bot.command('32', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/32.txt'
    }, {
        filename: '32.txt',
        caption: '32.Nolu Koşul'
    })
    return next()
    
})
bot.command('33', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/33.txt'
    }, {
        filename: '33.txt',
        caption: '33.Nolu Koşul'
    })
    return next()
    
})
bot.command('34', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/34.txt'
    }, {
        filename: '34.txt',
        caption: '34.Nolu Koşul'
    })
    return next()
    
})
bot.command('35', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/35.txt'
    }, {
        filename: '35.txt',
        caption: '35.Nolu Koşul'
    })
    return next()
    
})
bot.command('36', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/36.txt'
    }, {
        filename: '36.txt',
        caption: '36.Nolu Koşul'
    })
    return next()
    
})
bot.command('37', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/37.txt'
    }, {
        filename: '37.txt',
        caption: '37.Nolu Koşul'
    })
    return next()
    
})
bot.command('38', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/38.txt'
    }, {
        filename: '38.txt',
        caption: '38.Nolu Koşul'
    })
    return next()
    
})
bot.command('39', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/39.txt'
    }, {
        filename: '39.txt',
        caption: '39.Nolu Koşul'
    })
    return next()
    
})
bot.command('40', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/40.txt'
    }, {
        filename: '40.txt',
        caption: '40.Nolu Koşul'
    })
    return next()
    
})
bot.command('41', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/41.txt'
    }, {
        filename: '41.txt',
        caption: '41.Nolu Koşul'
    })
    return next()
    
})
bot.command('42', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/42.txt'
    }, {
        filename: '42.txt',
        caption: '42.Nolu Koşul'
    })
    return next()
    
})
bot.command('43', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/43.txt'
    }, {
        filename: '43.txt',
        caption: '43.Nolu Koşul'
    })
    return next()
    
})
bot.command('44', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/44.txt'
    }, {
        filename: '44.txt',
        caption: '44.Nolu Koşul'
    })
    return next()
    
})
bot.command('45', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/45.txt'
    }, {
        filename: '45.txt',
        caption: '45.Nolu Koşul'
    })
    return next()
    
})
bot.command('46', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/46.txt'
    }, {
        filename: '46.txt',
        caption: '46.Nolu Koşul'
    })
    return next()
    
})
bot.command('47', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/47.txt'
    }, {
        filename: '47.txt',
        caption: '47.Nolu Koşul'
    })
    return next()
    
})
bot.command('48', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/48.txt'
    }, {
        filename: '48.txt',
        caption: '48.Nolu Koşul'
    })
    return next()
    
})
bot.command('49', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/49.txt'
    }, {
        filename: '49.txt',
        caption: '49.Nolu Koşul'
    })
    return next()
    
})
bot.command('50', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/50.txt'
    }, {
        filename: '50.txt',
        caption: '50.Nolu Koşul'
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
