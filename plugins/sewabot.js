let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let time = require('tiny-timer') 

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
    let a = new Date();
    let d = a.setTime(a.getTime() + 10000);
    console.log(d)
    console.log(`join grup`)
    if (a == d) 
    await conn.groupLeave (res.gid) 
    
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true
handler.limit = 10

module.exports = handler
