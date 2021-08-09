require("dotenv").config();

const BOT_API       = process.env.BOT_API || '';
const PORT          = process.env.PORT || 3000;
const URL           = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const { Telegraf, Markup } = require('telegraf')
const bot       = new Telegraf(BOT_API);

const config = require('./config');


// Bota start verdiğinizde atılan ilk mesaj
bot.start((ctx) => {
    return ctx.reply("Lütfen Bakmak İstediğiniz Özel Koşul Numarasını Yazıp Gönderiniz.");
});


bot.hears(/selam/ig, async (ctx, next) => {
    await ctx.telegram.sendPhoto(ctx.chat.id,
        'https://www.ajanskirim.com/wp-content/uploads/2019/03/1525995635Merhaba.jpg',
        { caption:  `<b>${ctx.from.first_name}</b>`,  parse_mode: 'HTML' })
    return next();
});
bot.hears(/1/ig, async (ctx, next) => {
   return ctx.reply("1. Bir mesleğe yönelik program uygulayan lise veya dengi meslek okulu çıkışlı adayların bu programla ilgili tercihlerini belirlemeden önce Tablo-6'yı dikkatl incelemeleri gerekir  
.");
});
bot.hears(/2/ig, async (ctx, next) => {
   return ctx.reply("2. ----- .");
});   
bot.hears(/3/ig, async (ctx, next) => {
   return ctx.reply(" 3. 2021-2022 öğretim yılında ikinci öğretim öğrencilerinin ödeyecekleri öğrenim ücretleri tablo halinde bu kılavuzun ileri sayfalarında yer almaktadır  
  .");                    
});
bot.hears(/4/ig, async (ctx, next) => {
   return ctx.reply(" 3. 4. Bu programa yerleşen adaylardan ilgili yükseköğretim kurumu tarafından aranan şartları sağlayanlara, yükseköğretim kurumunun vakfı / anlaşmal olduğu kurum tarafından burs, yurt, ücretsiz yemek, kısmi zamanlı çalışma vb. imkânlar sağlanmaktadır. Söz konusu imkanlara ilişkin ayrıntılı bilg yükseköğretim kurumunun internet sayfasından edinilebilecektir  
.");                    
});
bot.command('botsohbet', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/botsohbet.mp4'
    }, {
        filename: 'botsohbet.mp4',
        caption: 'https://t.me/botsohbet'
    })
    return next()
    
    
});
bot.command('5', async (ctx, next) => {
    
    await bot.telegram.sendDocument(ctx.chat.id, {
        source: './dosyalar/5.txt'
    }, {
        filename: '5.txt',
        caption: 'https://t.me/botsohbet'
    })
    return next()    
    
});

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
