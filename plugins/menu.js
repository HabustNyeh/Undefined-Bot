let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
━━ 「 *Razen Bot* 」 ━━
➸ Hallo👋 %name!
<<<<<<< HEAD
➸ Kamu Adalah Role %role
➸ Kamu Adalah  %rank
➸ Sisa *%limit Limit*
➸ Level Kamu *%level (%exp / %maxexp)* [%xp4levelup lagi untuk levelup]
➸ Owner: wa.me/❤️🔪=💔6⃣2⃣8⃣2⃣1⃣8⃣1⃣6⃣6⃣1⃣5⃣6⃣1⃣
➸━「 08-09-05 」━
=======
➸ Kamu Adalah Role %role}
➸ Kamu Adalah  %rank}
➸ Sisa *%limit Limit*
➸ Level Kamu *%level (%exp / %maxexp)* [%xp4levelup lagi untuk levelup]
➸ Owner: wa.me/❤️🔪=💔6⃣2⃣8⃣2⃣1⃣8⃣1⃣6⃣6⃣1⃣5⃣6⃣1⃣
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
%readmore`.trimStart(),
  header: '━━「 %category 」━━',
  body: '│ ➸ %cmd%islimit',
  footer: '━━Next━━\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
<<<<<<< HEAD
  let user = global.db.data.users[m.sender]
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'daftar', 'main', 'game', 'xp', 'money', 'fish', 'pokemon', 'sticker', 'kerang', 'quotes', 'admin', 'group', 'islami', 'premium', 'internet', 'nulis', 'downloader', 'tools', 'fun', 'database', 'jadibot', 'owner', 'host', 'advanced', 'info', 'vicstore']
=======
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'daftar', 'main', 'game', 'xp', 'money', 'fish', 'pokemon', 'sticker', 'kerang', 'quotes', 'admin', 'group', 'islami', 'premium', 'internet', 'nulis', 'downloader', 'tools', 'fun', 'database', 'jadibot', 'owner', 'host', 'advanced', 'info', 'vicstore', '-----/n\-----' , 'vpso', 'vpsg', 'provider', 'vcc', 'payment']
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'Daftar': 'Daftar', 
      'main': 'Main',
      'game': 'Game',
      'xp': 'Exp & Limit',
      'money': 'Money', 
      'fish': 'Fish', 
      'pokemon': 'Pokemon', 
      'sticker': 'Sticker',
      'kerang': 'Kerang Ajaib',
      'quotes': 'Quotes',
      'admin': 'Admin',
      'group': 'Group',
      'islami': 'Al-Quran & Jadwal Shalat', 
      'premium': 'Premium',
      'internet': 'Internet',
      'nulis': 'MagerNulis & Logo',
      'downloader': 'Downloader',
      'tools': 'Tools',
      'fun': 'Fun',
      'database': 'Database',
      'jadibot': 'Jadi Bot',
      'owner': 'Owner',
      'host': 'Host',
      'advanced': 'Advanced',
      'info': 'Info',
<<<<<<< HEAD
      'vicstore': 'Victrius Store'
=======
      'vicstore': 'Victrius Store', 
      '-----/n\-----': 'SHOP', 
      'vpso': 'Vps  - Rdp OVH',
      'vpsg': 'Vps - Rdp Gcp', 
      'provider': 'Provider', 
      'vcc': 'List Vcc', 
      'payment': 'Payment'
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
  }
   if (teks == 'daftar') tags = {
    'daftar': 'Daftar'
  }
   if (teks == 'main') tags = {
    'main': 'Main'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
   if (teks == 'money') tags = {
    'money': 'Money'
  }
  if (teks == 'fish') tags = {
    'fish': 'Fish'
}
  if (teks == 'pokemon') tags = {
    'pokemon': 'Pokemon'
}
  if (teks == 'sticker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'group') tags = {
    'group': 'Grup'
  }
   if (teks == 'islami') tags = {
    'islami': 'Al-Quran & Jadwal Shalat'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner'
  }
  if (teks == 'host') tags = {
    'host': 'Host'
  }
  if (teks == 'advanced') tags = {
    'advanced': 'Advanced',
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'vicstore') tags = {
     'vicstore': 'Victrius Store'
     }
<<<<<<< HEAD
=======
 if (teks == '-----/n\-----') tags = {
     '-----/n\-----': 'SHOP'
     }
  if (teks == 'vpso') tags = {
   'vpso': 'Vps  - Rdp OVH'
   }
   if (teks == 'vpsg') tags = {
      'vpsg': 'Vps - Rdp Gcp'
      }
   if (teks == 'provider') tags = {
      'provider': 'Provider'
      }
   if (teks == 'vcc') tags = {
      'vcc': 'List Vcc'
      }
    if (teks == 'payment') tags = {
      'payment': 'Payment'
      }
>>>>>>> af1925062280e64ba5708f13a58560832731a8af


  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, rank, money, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `Halo ${name}`.trim(),
          "description": "©Undefined Bot",
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Menu Utama`,
                  "description": "",
                  "rowId": ".? all"
                }, 
                {
                  "title": "daftar",
                  "description": "",
                  "rowId": ".? daftar"
                },
                {
                  "title": "main",
                  "description": "",
                  "rowId": ".? main"
                },
                  {
                  "title": "Game",
                  "description": "",
                  "rowId": ".? game"
                }, {
                  "title": "XP",
                  "description": "",
                  "rowId": ".? xp"
                }, {
                  "title": "Stiker",
                  "description": "",
                  "rowId": ".? sticker"
                }, {
                  "title": "Kerang Ajaib",
                  "description": "",
                  "rowId": ".? kerang"
                }, {
                  "title": "Quotes",
                  "description": "",
                  "rowId": ".? quotes"
                }, {
                  "title": "Admin",
                  "description": "",
                  "rowId": ".? admin"
                }, {
                  "title": "Grup",
                  "description": "",
                  "rowId": ".? group"
                },
                {
                  "title": "Islami",
                  "description": "",
                  "rowId": ".? islami"
                },
                {
                  "title": "Premium",
                  "description": "",
                  "rowId": ".? premium"
                }, {
                  "title": "Internet",
                  "description": "",
                  "rowId": ".? internet"
                }, {
                  "title": "Nulis & Logo",
                  "description": "",
                  "rowId": ".? nulis"
                }, {
                  "title": "Downloader",
                  "description": "",
                  "rowId": ".? downloader"
                }, {
                  "title": "Tools",
                  "description": "",
                  "rowId": ".? tools"
                }, {
                  "title": "Fun",
                  "description": "",
                  "rowId": ".? fun"
                }, {
                  "title": "Database",
                  "description": "",
                  "rowId": ".? database"
                }, {
                  "title": "Jadi Bot",
                  "description": "",
                  "rowId": ".? jadibot"
                },
                   {
                  "title": "owner",
                  "description": "",
                  "rowId": ".? owner"
                },
                {
                  "title": "Host",
                  "description": "",
                  "rowId": ".? host"
                },
                {
                  "title": "Advanced",
                  "description": "",
                  "rowId": ".? advanced"
                },
                  {
                  "title": "Info",
                  "description": "",
                  "rowId": ".? info"
                }, {
                  "title": "vicstore",
                  "description": "",
                  "rowId": ".? vicstore"
<<<<<<< HEAD
=======
                }, {
                  "title": "-----/Shop\-----",
                  "description": "",
                  "rowId": ".? -----/n\-----"
                }, 
                {
                  "title": "Vps - Rdp OVH",
                  "description": "",
                  "rowId": ".? vpso"
                },
                {
                  "title": "Vps - Rdp GCP",
                  "description": "",
                  "rowId": ".? vpsg"
                },
                {
                  "title": "Provider",
                  "description": "",
                  "rowId": ".? provider"
                },
                {
                  "title": "Vcc",
                  "description": "",
                  "rowId": ".? vcc"
                },
                {
                  "title": "Payment",
                  "description": "",
                  "rowId": ".? payment"
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
                },
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, rank, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
<<<<<<< HEAD
    await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), 'Undefined Bot', 'Owner', '.owner', 'Donasi', '.donasi', 'VictriusStore', '.vicstore', m)
=======
    await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), 'Undefined Bot', 'Owner', '.owner', 'Donasi', '.donasi', '_VictriusStore_', '.vicstore', m)
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
